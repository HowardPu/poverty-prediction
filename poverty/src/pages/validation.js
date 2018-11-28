import React, { Component } from 'react';
import {Navigation} from './parts/navigation'

export class Validation extends Component {
    render() {
        return(
            <div> 
                <Navigation current="validation" />
                <div>This is validation</div>
            </div>
        )
    }
}