## Prediction between Household Enviornmental Structure and Poverty Level
<p align="center">
  Group member: Haoran Pu, Changyu Li, Emily Qiao, Wenjun Chen
</p>

### Project Description

#### What is the overarching purpose of your research project, and why is it an important undertaking?

> Many government and social organizations are working on helping people in poverty but have difficulties in finding the qualified segment of population. Currently, an althrigom called Proxy Means Test (or PMT) is used by agencies to assess a household’s level of need in Latin America. However, the model used still has some accuracy problems caused by population growth and poverty decline. In our research project, we will **build a model to identify the poverty level of each household based on the dataset of household information from Costa Rican, which is an under-developing country**. Only identifying household with the highest need for social welfare assistance, we can make a reasonable use of our public resources.

#### How does your research fit into the broader problem domain? You should cite at least 3 papers that help contextualize your research. 

> The problem domain of this research is poverty, And in terms of poverty, there have been extensive researches in the past 100 years. One is an research of [examining the poverty/social welfare in Indonesia](https://elibrary.worldbank.org/doi/pdf/10.1596/1813-9450-2148), and then found that there is a relationship between household structure and poverty. Another research applied [machine learning techniques into those two factors for accurate predictions](https://google.com). Last but not the least, [a research about China](https://www.sciencedirect.com/science/article/pii/S0147596705000673) also found some relationship between household and poverty, Given all of those researches, we believe that our research branch is consequential to the poverty and therefore requires further investigation to understand the problem thoroughly. 

#### What specific hypothesis (hypotheses) are you going to test?

> As the dependent variable is poverty level and independent variables are household attribute. We propose null hypothesis is there is no relationship between household attributes and poverty level, and therefore the poverty cannot be predicted by household attribute. And the althernative hypothesis is there is a relationship between them, which means we can apply the household structure to predict poverty.

#### What are the datasets you'll be working with to answer this question? Please include relevant background describing the datasets you identify.

> We will be using the public dataset provided by [**Inter-American Development Bank**](https://www.iadb.org/en). Given this is an authoritative institution in Latin American, we believe this dataset is credible enough to support further investigation.

> For the data structure, each row of the data set represents an unique household in Costa Rica. Variables include house structure and material, family members age-sex composition, education degree, water provision location, and the location of each household, poverty level (from 1 to 4 where 1 means extremely poor and 4 means not poor at all), and so on. As the dataset generally captures the characteristics of each household and a category of poverty level, we can apply this data to the topic we are investigating.

#### What statistical and machine learning methods do you plan on using to test your hypothesis?

> For the statistical analysis, we notice that the poverty is defined into 4 categories, although the order represents the level of poverty. As those 4 categories are just generalization of binary variable, we can apply logistic regression to access the relationship between poverty level and household structure.

> We will use the **K-nearest neighbors algorithm** (KNN) method from sklearn library for machine learning use the **Logistic Model** from the StatsModels library to estimate the statistical model. 

#### Who is your target audience for the resource you will build? Depending on the domain of your data, there may be a variety of audiences interested in using the dataset. You should hone in on one of these audiences.

> We think our audiences may include **Non-Governmental Organizations, governments, private or public investors who show interests in improving the social well-being**. However, we conjecture governers are the main target audience of this project. Specifically, a good prediction between household attributes and poverty may increase the efficiency of social resources redistributions. There is always a problem where government give non-poor household the resources which should be given to the poorest segment of population in the society. This means, the main purpose of this report is to serve as a good prediction for governors. 

#### What should your audience learn from your resource? Consider specific questions they may want to answer.

> Given the problem governors are facing, the prediction algorithm in this report may demonstrate better way to deal with the problems in the previous paragraph. This means, the governor may have better understanding towards who are poor and who should be helped in the society by the population censorship data, which can increase the efficiency of resource redistribution.

-----

### Technical Description

#### What will be the format of your final web resource?

> We decide to use **HTML pages** to build our final report. We believe, as HTML is more flexible compared with other options such as RMarkdown or Shiny, HTML may have more efficiency to visualize data, display graphs, demonstrate our prediction model.

#### Do you anticipate any specific data collection / data management challenges?

> A few challenges must exist in data management. The first challenge is that we only learn R or Python to manipulate data in INFO 370. It means that we have few experience in dealing with data by JavaScript. Another challenge is that data visualization techniques in JavaScript may not be the same as those in Python/R. In other words, we require extensive research on those exploratory data analysis library to build an interactive report.

#### What new technical skills will need to learn in order to complete your project?

> Given those challenges, we believe the following aspects are required for succeeding in this project. The first one is to learn new libraries for data management in JavaScript to clean and prepare the data for further data visualization. And the second aspect is that we should do some research about data visualization tools in Javascript.

#### How will you conduct you analysis? Please include a detailed description of your intended modeling approach. 

> For exploratory data analysis, the manipulation of data will be done in Javascript/React. For such manipulation, we found “js-dataframe” and “lodash” is useful to wangle the data. For statistical analysis and machine learning process, most of the work will be done in Python. The logistical modeling and machine learning will be done in “statsmodels” and “sklearns” as we learned both of them in INFO 370.
    
#### What major challenges do you anticipate? 

> As we mentioned before, the first major challenge is that we do not learn data wrangling and visualization through HTML in class and we need extra time to learn these skills. Another major challenge is that we utilize various programming languages(Python and HTML) in this project. It will increase the burden of debugging, testing, and integration as they are in different platforms and in different syntaxes.

-----

### Project Set-up
> Please check **GitHub repository** about details. We have assigned five issuses for each individual for basic structure of this project. 