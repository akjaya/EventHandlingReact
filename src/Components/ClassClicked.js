import React, { Component } from 'react'

class ClassClicked extends Component {
    classHandler(){
        console.log("Class Clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.classHandler}>Class Clicked</button>
            </div>
        )
    }
}

export default ClassClicked
