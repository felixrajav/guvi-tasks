import React, { Component } from 'react'

export class Index extends Component {
    constructor(){
        super();
        this.state= {
            item:0,
        }
        console.log("component called!!")
    }
    componentDidMount(){
        console.log("did mount called!!")
    }
    handelClick=()=>{
       this.setState({item: this.state.item +1})
    }
    componentDidUpdate(){
        console.log("component Did Update!!")
    }
    componentWillUnmount(){
        alert("The component will be unMount")
    }
  render() {
    console.log("render called!!              ")
    return (
      <div>
        <p>item{this.state.item}</p>
        <button onClick={this.handelClick}>click Me!!</button>
      </div>

    )
  }
}

export default Index