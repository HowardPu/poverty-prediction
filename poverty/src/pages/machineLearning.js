import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class MachineLearning extends Component {
    render() {
        return(
            <div> 
                <Navigation current="ml" />
                <div>
                    <h1>Machine Learning</h1>
                    
                    <div>
                        <h2>Model Selection</h2>

                        <div>
                            <p>We decided to apply Random Forest Classifications to this relationship accessment as the following two conditions are met:</p>
                            <ul>
                                <li>The target prediction is an ordinary variable with 4 outcomes, which leads us to apply Classifications approach</li>
                                <li>Random Forest have good perfomance in working with high dimension dataset(62 columns in this research)</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2>Maching Learning Preparation</h2>

                        <div>
                            <h2>Feature Engineering</h2>
                            
                            {/* flex box to show three aspects?*/}
                            <div className="feature-selection-container" >
                                <div className="feature-selection-item" >
                                    <h3>Feature Addtion</h3>
                                    <div>
                                        <p>We decided not to add extra features in this dataset for the following three reasons</p>

                                        <ul>
                                            <li>This dataset has already included all attributes we can find from research paper about poverty classification in other countries such as China, Indonesia. (House material, possession, etc)</li>
                                            <li>Some variables which may have relationship to poverty level also have been transformed. (age square, average year of education, etc)</li>
                                            <li>Most quantitive variables are also been processed to categorical variables(# of tablets --> whether a household has a tablet)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="feature-selection-item">
                                    <h3>Feature selection</h3>
                                    <p> 
                                        The feature selection is based on how well an independent variable can explain the poverty level. In this case,
                                        we apply each integer top percentage features as thresholds to discover the best set of features which yields highest accruacy.
                                    </p>
                                </div>

                                <div className="feature-selection-item">
                                    <h3>Feature Transformation</h3>
                                    <p>
                                        Some features may not have linear relationship to poverty level, which means we need to transform some of the features
                                        in higher degrees. With those in mind, we include three different degrees(1 to 3) to determine which one is the best fit
                                        between household attributes and poverty level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Model Training</h2>

                        {/* Flex box? */}
                        <div className="Model-Training-container" >
                            <div className="model-training-item" >
                                <h3>Data Separation</h3>
                                <p>
                                    In terms of validating the random forest model, we need to split the data into training and testing at different proportions.
                                    Since training data and testing data cannot be small(otherwise yields in low accruacy/high variance in testing), we decide to
                                    split the training/testing data by 70%/30% since both percentages should be appropriate to the functionaility of training/testing.
                                </p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Standard for Validation</h3>
                                <p>Since this is a classification prediction, we need to predict each household precisely, which implies accruacy is the standard for evaluation.</p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Cross Validation</h3>
                                <p>
                                    In order to mimize the variance of training by chance, we will apply cross validation in traing process to make sure the accruate score consistent.
                                    With those in minds, we folded the training data into 10 piences with same size. For each training cycle, 9 piceces will train the data, use the last picece
                                    to get the accruacy, and finally average accruacies of 10 cycles for the consistent result of prediction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Result</h2>
                        <div>
                            <p>Given all preparations, the result of the best model of random forest is the following:</p>
                            <ul>
                                <ul>Paramters
                                    <li>Polynomial Transformation Degrees: 2</li>
                                    <li>Top Percentile: 11%</li>
                                    <li>Sample Split: 4</li>
                                </ul>

                            </ul>
                            <p>And the highest accruacy by this model is 92.00%</p>
                        </div>                        
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}