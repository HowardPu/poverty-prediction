
require(MASS)
library("dplyr")

poverty.data <- read.csv("poverty_data.csv", stringsAsFactors = FALSE)

string <- "Target ~ age + rooms"

string.no.quote <- noquote(string)

poverty.data$Target <- factor(poverty.data$Target)

polr(string.no.quote, data = poverty.data, Hess=TRUE)
