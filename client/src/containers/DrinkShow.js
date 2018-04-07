import React from 'react';
import { Drink } from '../components/Drink'


export default class DrinkShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 1,
    }
  }

  handleOnClick = () => {
    this.setState({
      number: Math.floor(Math.random() * Math.floor(250)) + 1
    })
  }

  render() {

    return (
      <div>
        <h1>Drink Show Component</h1>
        <p>Will display all info of a drink</p>
        <button onClick={this.handleOnClick}>Load New Drink</button>
        <hr/>
        <Drink number={this.state.number}/>
      </div>
    )
  }
}