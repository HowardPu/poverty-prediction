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
                        <h2>Visulization to the performance of statistical analysis</h2>
                        
                        <h2>Statistical Analysis: Chi-2 Test of best fit model</h2>
                        <div>
                            <p>
                                There is no straightfowward way of accessing the strength of this regression, as the dependent variable is ordinal variable.
                                However, we can apply the best fit model test to determine whether this model can capture the relationship betweem household
                                structure and poverty level.
                            </p>

                            <p>For the test of best fit model, we propose the following pair of null/alternative hypothesis:</p>

                            <ul>
                                <li>H0: this model is a best fit between household attributes and poverty level</li>
                                <li>H1: this model is not a best fit between household attributs and poverty level</li>
                            </ul>

                            <p>
                                With the deviance 16088 and degrees of freedom 9493, this models yield of p value 0, which means we reject the null hypothesis,
                                and therefore this model is not a best fit of household structure and poverty level.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2>Machine Learning</h2>
                        <p>With the best model, we can access its vadility by predicting the testing data in data separation section</p>
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