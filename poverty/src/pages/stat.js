import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class StatAnalysis extends Component {
    render() {
        return(
            <div>
                <Navigation current="stat"/> 
                <div>This is stat analysis</div>
            </div>
        )
    }
}