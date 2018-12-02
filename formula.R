
library(MASS)
library("dplyr")

poverty.data <- read.csv("poverty_data.csv", stringsAsFactors = FALSE)

target <- poverty.data$Target

best.set <- c()

poverty.level <- poverty.data$Target

cleaned.data <- subset(poverty.data, select = -c(Id, idhogar))
cleaned.data$Target <- factor(cleaned.data$Target)
current.accuracy <- 0
best.model <- ""

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
  print(current.accuracy)
  true.prediction <- sum(evaluation == TRUE)
  accruacy <- true.prediction / length(target)
  if(current.accuracy <= accruacy) {
    current.accuracy <- accruacy
    best.set <- append(best.set, col.name)
    best.model <- result
  }
}

print(best.model)
print(paste("Deviance: ", best.model$deviance, sep = ""))
print(paste("Degrees of Freedom: ", best.model$df.residual, sep = ""))
print(paste("p value: ", pchisq(best.model$deviance, best.model$df.residual, lower.tail = FALSE)))
