import React, { Component } from 'react';

import {Navigation} from './parts/navigation'

export class Data extends Component {
    render() {
        return(
            <div> 
                <Navigation current="data" />
                <div>This is data</div>
            </div>
        )
    }
}