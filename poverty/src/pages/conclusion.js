import React, { Component } from 'react';
import {Navigation} from './parts/navigation';

export class Conclusion extends Component {
    render() {
        return(
            <div> 
                <Navigation  current="conclusion"/>
                <div>This is conclusion</div>
            </div>
        )
    }
}