import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class Validation extends Component {

    // some function for making charts

    render() {
        return(
            <div> 
                <Navigation current="validation" />
                <div>
                    <h1>Validation</h1>
                    <p>After all statistical analysis and model training, we can then access the vadility of each approach.</p>
                    <div>
                        <h2>Statistical Analysis: Chi-2 Test of best fit model</h2>
                        <div>
                            {/*Some visulizations to the prediction against actual value*/}
                            <div>Some visulizations to the prediction against actual value</div>
                            <p>Some analysis</p>
                        </div>
                        <div>
                            Given the model is xxx regression, we can apply the Chi-2 test of best fit model where:
                            <ur>
                                <li>N0: xxx regression is a best fit model of estimating poverty based on household attribute</li>
                                <li>N1: xxx regression is not a best fit model of estimating poverty based on household attribute</li>
                            </ur>
                            <p>With degrees of freedom xxx and chi-2 score xxx, we can get p value xxx, which implies xxx</p>

                            <p>Some further analysis to the p value</p>
                        </div>
                    </div>

                    <div>
                        <h2>Machine Learning</h2>
                        <p>With the best model, we access its vadility by predicting the testing data and get an accuracy rate of 92%.</p>
                        <div>
                            {/*Some visulizations to the prediction against actual value*/}
                            <div>Some visulizations to the prediction against actual value</div>
                            <p>Some analysis</p>
                        </div>

                        <p>Some analysis and suggestions for improvement</p>
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}