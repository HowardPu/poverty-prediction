import React, { Component } from 'react';
import {Navigation} from './parts/navigation';

export class Conclusion extends Component {
    render() {
        return(
            <div> 
                <Navigation  current="conclusion"/>
                <div className="conclustion-page-content content">
                    <h1>5. Conclusions and Implications</h1>
                    
                    <div>
                        With all analysis in terms of statistical analysis and machine learning, we conclude that, although we did not find a explicit
                        formula between household attribute and poverty level by statistical analysis, the relationship exists due to the fact that
                        random forest yielded a high accuracy score for prediction.
                    </div>

                    <div>In terms of bad performance of statistical analysis, we proposed two possible reasons to explain it:</div>
                    <ul>
                        <li>poverty performance does not have a s-like shape, which is the shape of logistic regression</li>
                        <li>statistical analysis may has lower efficacy to access ordinal variables</li>
                    </ul>
                    <p>
                        For the first possibility, we can apply different statistical model to measure the relationship between them. And for the second possibility,
                        our team will apply machine learning only instead of measuring the relationship by traditional statistical approaches.
                    </p>
                    <p>
                        And analysis in both machine learning and statistical approach do have some implications. For machine learning, high accuracy means it can
                        replace the current approach with lower prediction power. And for statistical analysis, two possible reasons can help researchers to further
                        investigate the validity of applying statistical analysis to poverty level.
                    </p>

                    <div>
                        Last but not the least, machine learning also requires further researches. Since we tuned lots of parameters and random forest consumes
                        much higher computation power compared with other approaches, the range of each parameter tuning is limited for higher efficiency. With those
                        in mind, further research can expand the range of parameters wilder for higher accuracy.
                    </div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}
