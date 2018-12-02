import React, { Component } from 'react';
import {Navigation} from './parts/navigation';

export class Conclusion extends Component {
    render() {
        return(
            <div> 
                <Navigation  current="conclusion"/>
                <div className="conclustion-page-content">
                    <h1>Conclusions and Implications</h1>

                    <div>Some further analysis from validation</div>

                    <div>Some implications of this researxh</div>

                    <div>Some reflections of the research</div>

                    <div>Some further works/extensions of this project</div>
                </div>
                <footer>For more detailed analysis, the code can be accessed at (provide a href)</footer>
            </div>
        )
    }
}