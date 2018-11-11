## Prediction between Household Enviornmental Structure and Poverty Level
<p align="center">
  Group member: Haoran Pu, Changyu Li, Emily Qiao, Wenjun Chen
</p>

### Project Description
* What is the overarching purpose of your research project, and why is it an important undertaking?
> Many government and social organizations are working on helping people in poverty but have difficulties in finding the qualified segment of population. Currently, an althrigom called Proxy Means Test (or PMT) is used by agencies to assess a household’s level of need in Latin America. However, the model used still has some accuracy problems caused by population growth and poverty decline. In our research project, we will **build a model to identify the poverty level of each household based on the dataset of household information from Costa Rican, which is an under-developing country**. Only identifying household with the highest need for social welfare assistance, we can make a reasonable use of our public resources.

* How does your research fit into the broader problem domain? You should cite at least 3 papers that help contextualize your research. 
> The problem domain of this research is poverty, And in terms of poverty, there have been extensive researches in the past 100 years. One is an research of **examining the poverty/social welfare in Indonesia**, and then found that there is a relationship between household structure and poverty.  
Another research applied **machine learning techniques into those two factors for accurate predictions**. Last but not the least, **an research about China** also found some relationship between household and poverty, Given all of those researches, we believe that this topic is consequential to the domain of poverty and therefore requires further investigation to understand the problem thoroughly. 

* What specific hypothesis (hypotheses) are you going to test?
> 

* What are the datasets you'll be working with to answer this question? Please include relevant background describing the datasets you identify.
> We will be using the public dataset provided by **Inter-American Development Bank** (IDB). Given this is an authoritative institution in Costa Rica, we believe this dataset is credible enough to support further investigation.
> For the data structure, each row of the data set represents an unique household in Costa Rica. Variables include house structure and material, family members age-sex composition, education degree, water provision location, and the location of each household, poverty level (from 1 to 4 where 1 means extremely poor and 4 means not poor at all), and so on. As the dataset generally captures the characteristics of each household and a category of poverty level, we can apply this data to the topic we are investigating.

* What statistical and machine learning methods do you plan on using to test your hypothesis?
> We will use the **K-nearest neighbors algorithm** (KNN) method from sklearn library for machine learning use the **Logistic Model** from the StatsModels library to estimate the statistical model. 

* Who is your target audience for the resource you will build? Depending on the domain of your data, there may be a variety of audiences interested in using the dataset. You should hone in on one of these audiences.
>

* What should your audience learn from your resource? Consider specific questions they may want to answer.
> 

### Technical Description

* What will be the format of your final web resource?
> We decide to use **HTML pages** to build our final report. We believe, as HTML is more flexible compared with other options such as RMarkdown or Shiny, HTML may have more efficiency to visualize data and display graphs.

* Do you anticipate any specific data collection / data management challenges?
> A few challenges must exist in data management. The first challenge is that we learned to utilize R or Python to manipulate data in class. It means that we have few experience in dealing with data by JavaScript language. Another challenge is that data visualization techniques in JavaScript may not be the same as those in Python/R. In other words, we require extensive research on those exploratory data analysis library to build an interactive report.

* What new technical skills will need to learn in order to complete your project?
> Given those challenges, we believe the following aspects are required for succeeding in this project. The first one is to learn new libraries for data management in JavaScript to clean and prepare the data for further data visualization. And the second aspect is that we should do some research about data visualization tools in Javascript.

* How will you conduct you analysis? Please include a detailed description of your intended modeling approach. 
> For exploratory data analysis, the manipulation of data will be done in Javascript/React. For such manipulation, we found “js-dataframe” and “lodash” is useful to wangle the data. For statistical analysis and machine learning process, most of the work will be done in Python. The logistical modeling will be done in “statsmodels” and “sklearns” as we learned both of them in INFO 370.
    
* What major challenges do you anticipate? 
> As we mentioned before, the first challenge is that we do not learn data wrangling and visualization through HTML in class and we need extra time to learn these skills. Another challenge is that we utilize various programming languages such as R, Python and HTML in this project. It will increase the burden of debugging and testing as they are in different platforms and in different syntaxes.

### Project Set-up
> Please check **GitHub repository** about details. 