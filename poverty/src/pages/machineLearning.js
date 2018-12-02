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

                        <p>We selected random forests as our machine learning model for two main reasons. 
                            First, random forests is a good method for doing classification and the prediction
                            of our project should be the classification of each household's poverty level from 1 to 4.
                            Second, random forest works better in avoiding overfitting to training dataset
                            compared to decision trees.
                        </p>
                    </div>

                    <div>
                        <h2>Maching Learning Preparation</h2>

                        <div>
                            <h2>Feature Engineering</h2>

                            <div>Some basic intro</div>
                            
                            {/* flex box to show three aspects?*/}
                            <div className="feature-selection-container" >
                                <div className="feature-selection-item" >
                                    <h3>Feature Addtion</h3>
                                    <p>We think the dataset already provides a comprehensive list of features so we 
                                        do not add new feature.
                                    </p>
                                </div>

                                <div className="feature-selection-item" >
                                    <h3>Feature selection(By percentile)</h3>
                                    <p>We select features according to 25, 50, 75, 100 percentile of the highest scores</p>
                                </div>

                                <div className="feature-selection-item" >
                                    <h3>Feature Transformation</h3>
                                    <p>We apply the polynomial transformation to generate a new feature matrix
                                        consisting of all polynomial combinations of features with degree less 
                                        than or equal to 3.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Model Training</h2>

                        <p>Some basic introduction</p>
                        {/* Flex box? */}
                        <div className="Model-Training-container" >
                            <div className="model-training-item" >
                                <h3>Data Separation</h3>
                                <p>We split 70% of the dataset into training data and the rest 30% into test data. </p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Cross Validation</h3>
                                <p>We split the data into 10 folds and each fold of the data is used as the
                                    validation one time. In this way, we can decrease the chance that we get
                                    a certain subset of training set by chance and therefore harness the full
                                    potential of our model. The highest accuracy rate is 91%.
                                </p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Standard for Validation</h3>
                                <p>Accuracy. Our results should be the classification of povety level so
                                    we choose accuracy as Standard for validation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2>Result</h2>
                        <div>
                            <p>Given all preparations, the result of the best model is the following:</p>
                            <ul>
                                <ul>Paramters
                                    <li>Something</li>
                                    <li>Something</li>
                                </ul>

                                <ul>Transformations
                                    <li>Something</li>
                                    <li>Something</li>
                                </ul>
                            </ul>
                            <p>Accuracy: something</p>
                        </div>                        
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}