import React, { Component } from 'react';

import {Navigation} from './parts/navigation'

export class Introduction extends Component {
    render() {
        return(
            <div> 
                <Navigation current="/" />
                <div className="title roundness-shadow">
                        <div className="title-content" >
                            <h1 className="display-4">
                                <strong>Estimation of Poverty Level Based on Household Attributes</strong>
                            </h1>
                            <p className="subtitle">Give help to those who need help the most.</p>
                            <p> by Howard Pu, Changyu Li, Wenjun Chen, Xiaoli Qiao </p>
                        </div>
                </div>

                <div className="target-user-container" > 
                    <h2>Target Users</h2>
                    <p> 
                        Determining poverty is one of the most essential and challenging parts in social welfare distribution. A precise and accurate estimation can distribute resource who need it the most and vice versa.
                        This means, we think our audiences may include Non-Governmental Organizations, governments, private or public investors who show interests in improving the social well-being. 
                        Specifically, governors should be our main target audiences as they play the role of distributing social resources in the world. With those in mind, our research will focus on
                        how governors can capture the relationship between household structure and poverty effectively, therefore enhancing their ability to eliminate poverty.
                    </p>
                </div>

                <div className="purpose-container"> 
                    <h2>Purpose</h2>
                    <div className="purpose-content-container">
                        <div className="purpose-content-item roundness-shadow" >
                            <h2>Find the relationship</h2>
                            <p>
                                The existence of the relationship is consequential for our objective. If we can find such relationships, governors can apply this approach for better welfare distribution.
                                On the other hand, if such relationship does not exist, they can also apply this research for not collecting those household data, instead focusing on other data which may have the potential for poverty estimation.
                            </p>
                        </div>

                        <div className="purpose-content-item roundness-shadow" >
                            <h2>Refine poverty estimation</h2>
                            <p>
                                Current poverty estimation applies Proxy Means Test, which is considered as an inefficient approach due to low accuracy. 
                                This means, our research has the potential of enhancing the estimation method if there is a strong relationship. 
                                With those in mind, finding poverty estimation is also our objective in this study.
                            </p>
                        </div>

                        <div className="purpose-content-item roundness-shadow">
                            <h2>Support poverty research</h2>
                            <p>
                                We found an study took household attributes in Indonesia as independent variable, and then found that there is some relationship to poverty. If we could find some similar result, we can show the generality
                                of relationship between household structure and poverty, which can extends the usefulness of the study of this kind. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="structure-container" >
                    <h2>Data Source</h2>
                    <p> 
                        This dataset is from <a className="reference" href="https://www.iadb.org/en" target="_blank" rel="noopener noreferrer">Inter-American Development Bank</a>, the largest source of development financing for Latin America and the Caribbean.
                        This dataset provides comprehensive information we can probably use, such as house structure, to make a good model about poverty prediction and this is the reason of why we chose this dataset. 
                    </p>
                    <h2>In our website, you can find</h2>
                    <ul>
                        <li>Data Wrangling</li>
                        <li>Statistical Analysis</li>
                        <li>Machine Learning approach</li>
                        <li>Validation to the model.</li>
                        <li>Conclusion and implication of our research</li>
                    </ul>
                </div>
                <footer>Image from <a className = "footer-reference" href="https://news.un.org/en/story/2018/09/1019952" rel="noopener noreferrer" target="_blank" >UN News</a></footer>
            </div>
        )
    }
}