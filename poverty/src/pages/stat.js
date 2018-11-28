import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class StatAnalysis extends Component {
    render() {
        return(
            <div>
                <Navigation current="stat"/> 
                <div className="stat-page-content" >
                    <h1>Statistical Analysis to the Data</h1>
                    <p>Some overall intro to the stat analysis section</p>

                    <div>
                        <h2>Distribution Selection and Hypothesises</h2>

                        <p>Generalized logistic regression, (we need the exact name), and some explainations</p>

                        <div>
                            <p>This means, our hypothesis can be described by the test of best-fit model</p>
                            <ul>
                                <li>H0: xxx regression is a best fit model of estimating poverty level by household attribute</li>
                                <li>H1: xxx regression is not a best fit model of estimating poverty level by household attribute</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2>Correlations</h2>
                        {/*Some Charts shows how each attrobutes correlate to the poverty level*/}
                        <p>Some Charts shows how each attrobutes correlate to the poverty level, or we can make it interactive</p>
                    </div>

                    <div>
                        <h2>Feature Selection (Forward Selection or Backward Selection??) and hyperparameter tuning to that regression</h2>

                        <div>
                            <p>In terms of maximizing the predicting level, we need to consider the following things</p>
                            <ul>
                                <li>The set of features which generates lowest estimation error</li>
                                <li>Some parameters of the regression which can minimize the estimation error</li>
                            </ul>

                        </div>

                        <div>
                            <p>And the result of the selection is shown as following:</p>
                            <ul>
                                <ul>Features
                                    <li>Something</li>
                                    <li>Something</li>
                                </ul>

                                <ul>Parameters
                                    <li>Something</li>
                                    <li>Something</li>
                                </ul>
                            </ul>
                            <p>Lowest estimation error: something</p>
                        </div>
                    </div>

                    <div>
                        <h3>Best Fit Model Accessment</h3>
                        <div> 
                            <p>Given the hyperparameter tuning and feature selection, we can build our model based on xxx regressopn, and the formula can be shown as:</p>
                            <div>Insert formula here</div>
                        </div>
                        <p>
                            Once the model is found, we can use Chi-2 test to access whether the model is best fit or not. Recall the degrees of freedom is xxx and deviance is xxx, 
                            we can get p value of xxx, which is xxx
                        </p>

                        <p>Some further analysis to the p-value</p>
                    </div>
                </div>
            </div>
        )
    }
}