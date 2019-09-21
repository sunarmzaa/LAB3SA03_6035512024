
import React, { Component } from 'react'

export default class Content extands Component{

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    addNum = () => {
        this.setState({ count: state.count + 1 })
    }

    render(){
        return (
            <div>
                <button onclick={this.addNum}>num : {this.state.count}</button>
            </div>

        )

    }
}