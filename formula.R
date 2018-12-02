
library(MASS)
library("dplyr")
library(ggplot2)
library(tidyr)

poverty.data <- read.csv("poverty_data.csv", stringsAsFactors = FALSE)

target <- poverty.data$Target

best.set <- c()

poverty.level <- poverty.data$Target

cleaned.data <- subset(poverty.data, select = -c(Id, idhogar))
cleaned.data$Target <- factor(cleaned.data$Target)
current.accuracy <- 0
best.model <- ""
best.predict <- ""

all.independent.variables <- colnames(subset(cleaned.data, select = -c(Target)))


for(col.name in all.independent.variables) {
  formula <- "Target ~ "
  formula <- paste(formula, col.name, sep = "")
  for(variable in best.set) {
    formula <- paste(formula, " + ", variable, sep = "")
  }
  formula.no.quote <- noquote(formula)
  result <- polr(formula.no.quote, data = cleaned.data, Hess=TRUE)
  predict.value <- result$fitted.values
  
  # given the expectation can never become 4, we have to elevate the 
  # expection number by a real number.
  expectation <- round(predict.value[, 1] + 2 * predict.value[, 2] 
                                    + 3 * predict.value[, 3]
                                    + 4 * predict.value[, 4] + 0.25, digits = 0)
  evaluation <- expectation == target
  true.prediction <- sum(evaluation == TRUE)
  accruacy <- true.prediction / length(target)
  if(current.accuracy <= accruacy) {
    current.accuracy <- accruacy
    best.set <- append(best.set, col.name)
    best.model <- result
    best.predict <- expectation
  }
}

print(best.model)
print(paste("Deviance: ", best.model$deviance, sep = ""))
print(paste("Degrees of Freedom: ", best.model$df.residual, sep = ""))
print(paste("p value: ", pchisq(best.model$deviance, best.model$df.residual, lower.tail = FALSE)))

viz.data <- data_frame(best.predict, target)
viz.data <- gather(viz.data)

ggplot(viz.data,aes(x = value)) + 
  geom_histogram(data=subset(viz.data, key == 'best.predict'),fill = "red", alpha = 0.5) +
  geom_histogram(data=subset(viz.data, key == 'target'),fill = "blue", alpha = 0.5) +
  labs(title="Actual and prediction (Red is predict and blue is actual)", x ="Poverty Level", y = "# of occurance")


exact <- sum(best.predict == target)
over <- sum(best.predict > target)
under <- sum(best.predict < target)

pie.data <- data_frame(Prediction = c("Exact", "Overpredict", "Underpredict"), value = c(exact, over, under))
bp<- ggplot(pie.data, aes(x="", y=value, fill=Prediction)) +
        geom_bar(width = 1, stat = "identity") + labs(x = "", y = "")
pie <- bp + coord_polar("y", start=0) + geom_text(aes(y=value, label=scales::percent(value / length(target))))
pie

bar_data <- data_frame(residual = best.predict - target)
ggplot(bar_data, aes(x = residual)) + geom_bar(residual)
