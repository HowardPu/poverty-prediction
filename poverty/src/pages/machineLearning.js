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

                        <div>Select a model and explain the reason why using this model</div>
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
                                    <p>Add a new feature and explain why</p>
                                </div>

                                <div className="feature-selection-item" >
                                    <h3>Feature selection(By percentile?)</h3>
                                    <p>Choose an approach and explain the reason</p>
                                </div>

                                <div className="feature-selection-item" >
                                    <h3>Feature Transformation</h3>
                                    <p>Apply the polynomial transformation and explain why</p>
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
                                <p>Ratio of dataset for training/testing and explain why</p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Cross Validation</h3>
                                <p>How many parts to fold in training data and explain why using CV</p>
                            </div>

                            <div className="model-training-item" >
                                <h3>Standard for Validation</h3>
                                <p>Mean score value? and explain why</p>
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
                            <p>Lowest absolute mean error: something</p>
                        </div>                        
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}