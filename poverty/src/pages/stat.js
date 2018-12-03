import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class StatAnalysis extends Component {
    render() {
        return(
            <div>
                <Navigation current="stat"/> 
                <div className="stat-page-content" >
                    <h1>2. Statistical Analysis to the Data</h1>

                    <div>
                        <h2>2.1 Distribution Selection</h2>

                        <p>
                            The type of the poverty level is ordinal variable, as each value represents the order of poverty.
                            This leads us to consider some generalized logistics regression because logistics regression is for binary
                            variable; a variable with 2 outcomes instead of multiple. By our research, we found ordinal logistic regression
                            as this regression is specifically for predicting the ordinal variables with various outcomes.
                        </p>
                    </div>

                    <div>
                        <h2>2.2 Correlations</h2>
                        {/*Some Charts shows how each attrobutes correlate to the poverty level*/}
                        <p>
                            Since correlation is a measurement for quantitive variables, we found that it can be less meaningful in this case. 
                            (Poverty Level is a ordinal variable instead of quantitive.) This means, we cannot apply correlation to find the best
                            set of independent variables to maximize the relationship between household attributes and poverty level.
                        </p>
                    </div>

                    <div>
                        <h2>2.3 Feature Selection</h2>

                        <div>
                            <p>
                                With the impossibility of selecting features by correlation, we decide to apply a more generalized and 
                                systematically way to find the set with highest prediction power: forward feature selection. This means,
                                we wills start with a empty set of parameters, then add each parameter one by one, and finally includes variables
                                which can enhance the prediction power of poverty level.
                            </p>
                            <p>
                                For measuring the prediction power, we decide to use accuracy as there are only 4 outcomes to our dependent variable.
                            </p>

                        </div>
                    </div>

                    <div>
                        <h2>2.4 Result</h2>
                        <p>
                            With all of the processing, the ordinal logistics regressions yields the accuracy of 62.5%. However, since the the formula
                            contains 30 variables and 30 coefficients, the report will be messy and we include the <a>code</a> in our repository for 
                            reproducing our research and displaying formula.
                        </p>
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}