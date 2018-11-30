import React, { Component } from 'react';

import {Navigation} from './parts/navigation'

export class Data extends Component {
    render() {
        return(
            <div> 
                <Navigation current="data" />

                <div className="data-page-content" >
                    <h1>Data Wrangling and Visulization</h1>

                    <p>Describe the origin of the data and why it is credible.</p>

                    <p>Some basic introduction about this page(Attribute introduction, Data Cleaning, and Visulization)</p>

                    <div>
                        <h2>Data Attributes</h2>
                        <p>Some description about this section</p>
                        <ur>
                            <li>Attribute 1: something</li>
                            <li>Attribute 2: something</li>
                            <li>Attribute 3: something</li>
                        </ur>
                    </div>

                    <div>
                        <h2>Data Wrangling</h2>
                        <p>Some Description about this section </p>
                        {/* a flex box to show three aspects */}
                        <div className="data-wrangling-container">
                            <div className="data-wrangling-item">
                                <h3>Attributes bundling</h3>
                                <div>
                                    Dummy variables, good for machine learning but not efficient for stat analysis,
                                    therefore bundling those variables into category varibles
                                </div>
                            </div>

                            <div className="data-wrangling-item">
                                <h3>Renaming Column Names</h3>

                                <div>Detail desc for column renaming</div>
                            </div>

                            <div className="data-wrangling-item">
                                <h3>Missing Values in data</h3>

                                <div>Two situations occurs in terms of missing values:</div>

                                <ul>
                                    <li>Some columns miss values for more than 50%, which lead us remove the column for accruate analysis</li>
                                    <li>For the rest, we will project the distribution of the column by histograms, and apply a random number generator to sill in the missings</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>Data Visulizations</h3>
                        <div>
                            {/*some interactive histograms/scatterplots/linecharts */}
                        </div>

                        <div>
                            {/* Pick up some interesting plots for detail analysis */}
                        </div>
                    </div>
                </div>

                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}