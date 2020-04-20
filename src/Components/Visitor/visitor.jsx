import React, { Component } from 'react';

import VisitorForm from './visitor-form';
import VisitorContainer from './visitor-container'

import '../../App.css'

export default class Visitor extends Component {
    constructor () {
      super()
      this.state = {
        visitors: ''
      }
    };

    componentDidMount() {
      this.fetchVisitors()
    }

    fetchVisitors = () => {
      // const proxy = "https://cors-anywhere.herokuapp.com/"
      let url = "https://starter-kit-backend.herokuapp.com/visitors"
      fetch(url)
      .then(response => response.json())
      .then(result => this.setState({visitors: result}))
    }

    deleteVisitor = (id) => {
    let url = `https://starter-kit-backend.herokuapp.com/visitors/${id}`
    fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => this.fetchVisitors())
  }

    addVisitor = (visitorObj) => {
    const newItem = {...visitorObj, id: Date.now()}
    const newVisitors = [...this.state.visitors, newItem]
    this.setState({
      visitors: newVisitors
    })
  }

  postVisitor = (newVisitor) => {
    let url = "https://starter-kit-backend.herokuapp.com/visitors"
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newVisitor),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error))
  .then(result => this.fetchVisitors())
  }


  render() {
    const { visitors } = this.state;
    return (
      <>
      <VisitorForm postVisitor={this.postVisitor} addVisitor={this.addVisitor}/>
      {visitors
        ? <VisitorContainer  visitors={visitors} deleteVisitor={this.deleteVisitor}/>
      : <h1>Almost There</h1>
      }
      </>
    )
  }
}
