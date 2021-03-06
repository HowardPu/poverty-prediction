import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

// This page is the validation evaluation section for showing how efficient each approach is.
export class Validation extends Component {
    render() {
        return(
            <div> 
                <Navigation current="validation" />
                <div className="validation-page-content">
                    <div className="roundness-shadow white-box" >
                        <h1>4. Validation</h1>
                        <p>After all statistical analysis and model training, we can then access the validity of each approach.</p>
                        <p>
                            And since poverty level only has four outcomes, most of the visualization techniques are not appropriately visualize the result,
                            which leads us to apply some basic techniques(barplot and pie chart) to explain the efficacy of our analysis.
                        </p>
                    </div>

                    <div className="roundness-shadow white-box margin">
                        <h2>4.1 Visualization  of Statistical Analysis</h2>
                        <p>The first aspect is we can analyze our statistical model by distributions of prediction and actual poverty level</p>
                        <center><img src="./imgs/stat_pred.png" ></img></center>
                        

                        <p>With the barplot, we can clearly observe that the statistic model has under prediction at level 1 and 2, 
                            while has overprediction at level 3 and 4, with level 3 has significant overprdiction. Given logistic regression
                            is to fit the data into s-like shape distribution, we can conjecture that the distribution of poverty level may not
                            hold a s-like shape, therefore owning lower prediction at lower end and overprediction at higher end.</p>
                        
                        <p>The second thing we can see is the proportion of overprediction/underprediction/exact prediction</p>
                        <center><img src="./imgs/Rplot.png" ></img></center>
                        
                        <p>
                            With the proportion, overprediction is as twice as underprediction. Moreover, almost 1/3 of the household are misclassified, which 
                            may imply that ordinal logistic regression may not be able to capture the relationship between poverty and household attributes.
                        </p>

                        <p>Specifically, we can see the residuals of each cases where the prediction is wrong.</p>
                        <center><img src="./imgs/stat_bar.png" ></img></center>
                        
                        <p>
                            The shape of residual distributions is almost symmetry, with right hand side has longer and higher tiles. 
                            Furthermore, we also observe that the number of cases decreases as the absolute number of residual increase.
                            This shows that this model does capture some relationships between household structure and poverty level. (residual converges to 0)
                        </p>
                    </div>

                    <div className="roundness-shadow white-box margin" >
                        <h2>4.2 Statistical Analysis: Chi-2 Test of best fit model</h2>
                        <div>
                            <p>
                                There is no straightforward way of accessing the strength of this regression, as the dependent variable is ordinal variable.
                                However, we can apply the best fit model test to determine whether this model can capture the relationship between household
                                structure and poverty level.
                            </p>

                            <p>For the test of best fit model, we propose the following pair of null/alternative hypothesis:</p>

                            <ul>
                                <li>H0: this model is a best fit between household attributes and poverty level</li>
                                <li>H1: this model is not a best fit between household attributes and poverty level</li>
                            </ul>

                            <p>
                                With the deviance 16088 and degrees of freedom 9493, this models yield of p value 0, which means we reject the null hypothesis,
                                and therefore this model is not a best fit of household structure and poverty level.
                            </p>

                            <p>With this result, there are two possibilities about why the statistical analysis is not a best fit model</p>
                            <ul>
                                <li>There is no relationship between household attributes and poverty level.</li>
                                <li>This statistic model have fewer explanatory potential to the relationships.</li>
                            </ul>
                            <p>
                                For those two reasons, we can access the performance of machine learning method. If the machine learning method also fails to
                                explain the relationships, then the first theory has high probability to be true. Otherwise, the fault can be the statistical model.
                            </p>
                        </div>
                    </div>

                    <div className="roundness-shadow white-box margin" >
                        <h2>4.3 Visualization of Random Forest</h2>
                        <p>With similar approach, we will first access the distribution of predict poverty values against actual</p>
                        <center><img src="./imgs/rf_bar_chart.png"></img></center>
                        
                        <p>
                            In this case, although it seems to be random forest still overpredicts the poverty level, the gap between prediction and actual
                            poverty has been reduced a lot. With those in mind, we can infer that random forest has a much higher potential to predict and
                            capture the relationship between poverty level and household attributes.
                        </p>

                        <p>And following chart shows the proportion of over/under/exact prediction</p>
                        <center><img src="./imgs/rf_pie_chart.png" ></img></center>
                        
                        <p>
                            The pie chart shows the exactly the same trend with one in statistic analysis: random forest overpredicts the poverty level, and 
                            the overprediction is as twice as underprediction. However, since the amount of misclassficiation is low in this case, there is 
                            only 2% difference, which implies the problem of overprediction is not as significant as the one in statistical analysis. 
                        </p>

                        <p>Last but not the least, we can also assess the distribution of residual by the following bar chart.</p>
                        <center>
                            <img src="./imgs/rf_residuals_count_bar_chart.png" ></img>
                        </center>
                        <p>
                            The residual distribution of random forest is similar with the plot of ordinal logistic analysis, only with the difference
                            that tail of each side is much shorter. In further, this plot also demonstrates no obvious overprediction or underprediction
                            by random forest as the plot is in symmertic shape at 0.
                        </p>
                    </div>

                    <div className="roundness-shadow white-box margin">
                        <h2>4.4 Accuracy Assessment against Test Data</h2>

                        <p>With the best model, we access its validity by predicting the testing data, and get an accuracy rate of 93.13%.</p>
                        <p>
                            With accuracy in test data is higher than the accuracy in cross validation(92.00%), this random forest does not have the
                            problem of overfitting/underfitting data(or test accuracy will decrease significantly). In further, with the accuracy of
                            93% for predicting 4 outcomes(random guess should yields accuracy around 25%), random forest does have the prediction potential
                            to predict poverty and capture the relationship.
                        </p>

                        <p>
                            And since the random forest does capture the relationship, we can conclude that ordinal logistic regression has low estimation
                            power to poverty level.
                        </p>
                    </div>
                </div>
                
                <footer>For more detailed analysis, the code can be accessed at <a href="https://github.com/HowardPu/poverty-prediction" target="_blank">our Github page</a></footer>
            </div>
        )
    }
}