library(MASS)
library("dplyr")
library(ggplot2)
library(tidyr)

# read the data
poverty.data <- read.csv("poverty_data.csv", stringsAsFactors = FALSE)

# select the poverty level column
target <- poverty.data$Target

# initialize the best ser for ordinary logistic regression
best.set <- c()

# remove the unique identifier of each column
cleaned.data <- subset(poverty.data, select = -c(Id, idhogar))

# factorize the poverty level column for applying ordinal logistic regression
cleaned.data$Target <- factor(cleaned.data$Target)

# initialize the best model/score
current.accuracy <- 0
best.model <- ""
best.predict <- ""

# forward selection
for(col.name in all.independent.variables) {
  
  # select a variable and add it into the formula
  formula <- "Target ~ "
  formula <- paste(formula, col.name, sep = "")
  for(variable in best.set) {
    formula <- paste(formula, " + ", variable, sep = "")
  }
  formula.no.quote <- noquote(formula)
  
  # fit the model and get the prediction
  result <- polr(formula.no.quote, data = cleaned.data, Hess=TRUE)
  predict.value <- result$fitted.values
  
  
  # given the expectation can never become 4, we have to elevate the 
  # expection number by a real number.
  
  # since the computaion consumption is high for iterating between 0 and 1 by 0.01 increment,
  # we include the real number into the formula
  expectation <- round(predict.value[, 1] + 2 * predict.value[, 2] 
                       + 3 * predict.value[, 3]
                       + 4 * predict.value[, 4] + 0.25, digits = 0)
  
  # find the accruacy
  evaluation <- expectation == target
  true.prediction <- sum(evaluation == TRUE)
  accruacy <- true.prediction / length(target)
  
  # add the column and update the score if current estimation has higher accruacy.
  if(current.accuracy <= accruacy) {
    current.accuracy <- accruacy
    best.set <- append(best.set, col.name)
    best.model <- result
    best.predict <- expectation
  }
}

# display the forward selection result
print(best.model)
print(paste("Deviance: ", best.model$deviance, sep = ""))
print(paste("Degrees of Freedom: ", best.model$df.residual, sep = ""))
print(paste("p value: ", pchisq(best.model$deviance, best.model$df.residual, lower.tail = FALSE)))

# reshape the result for easy visulization
viz.data <- data_frame(best.predict, target)
viz.data <- gather(viz.data)

# bar chart of distribution of actual/predict distribution
ggplot(viz.data,aes(x = value)) + 
  geom_histogram(data=subset(viz.data, key == 'best.predict'),fill = "red", alpha = 0.5) +
  geom_histogram(data=subset(viz.data, key == 'target'),fill = "blue", alpha = 0.5) +
  labs(title="Actual and prediction (Red is predict and blue is actual)", x ="Poverty Level", y = "# of occurance")



exact <- sum(best.predict == target)
over <- sum(best.predict > target)
under <- sum(best.predict < target)

# pie chart of overprediction/underprediction/exact prediction
pie.data <- data_frame(Prediction = c("Exact", "Overpredict", "Underpredict"), value = c(exact, over, under))
bp<- ggplot(pie.data, aes(x="", y=value, fill=Prediction)) +
            geom_bar(width = 1, stat = "identity") + labs(x = "", y = "")
pie <- bp + coord_polar("y", start=0) + geom_text(aes(y=value, label=scales::percent(value / length(target))))
pie

bar_data <- data_frame(residual = best.predict - target)

# bar chart of the distribution of residual
ggplot(bar_data) + geom_bar(aes(x = residual))
