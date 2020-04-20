import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import '../../App.css'
import Button from '@material-ui/core/Button';

export default class VisitorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      about: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = (event) => {
    const newVisitor = this.state
  event.preventDefault()
  this.props.postVisitor(newVisitor)
  this.setState ({
    name:'',
    about:''
  })

  }


  render(){
    return (
      <>
      <div className='form-heading'>
      <h1>Visitor</h1>
      <form  onSubmit={(event) => this.handleSubmit(event)} className="form">
          <label htmlFor='name'>Name: </label>
                  <Input name="name" id="name" onChange={(event) => this.handleChange(event)} value={this.state.name} />
                <label htmlFor='about'>About: </label>
                  <Input name="about" id="about" onChange={(event) => this.handleChange(event)} value={this.state.about} />
                <Button type="submit" color="default" variant="outlined">Submit</Button><br />
      </form>

      </div>
   
      </>
    )
  }
}
