import React from 'react'
import axios from 'axios'

import api from '../config/api'
import keys from '../config/credentials'

class TicketForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '', 
            department: '', 
            priority: '', 
            message: '', 
            hasServerError: false, 
            serverErrorMessages: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault() 
        const formData = {
            name: this.state.name, 
            department: this.state.department,
            priority: this.state.priority, 
            message: this.state.message
        }
        // client side validation 
        axios.post(`${api.tickets.baseURL}?api_key=${keys.authentication}`, formData).then(response => {          
            console.log(response.data)  
            if(response.data.errors) {
               this.setState({
                   hasServerError: true, 
                   serverErrorMessages: response.data
               })
            } else {
                this.props.handleResponse(response.data)
                this.setState({
                    name: '',
                    department: '',
                    priority: '',
                    message: '',
                    hasServerError: false
                })
            }
        })
    }

    handleChange(event) {
        // console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    errorMessageFormatter() {
        const { errors } = this.state.serverErrorMessages
        return Object.keys(errors).map(key => {
            return <li key={key}> <strong> {key} : </strong> {errors[key].join(', ')} </li>
        })
    }

    render() {
        return (
            <div>
                <h2> Add Ticket </h2>
                <form onSubmit={this.handleSubmit}> 

                {this.state.hasServerError
                    && (
                        <div className= "alert alert-danger">
                        <h4> Theses errors prohibitted the form from being saved: </h4>
                            <ul> 
                                { this.errorMessageFormatter() }
                            </ul>
                        </div>
                    )
                }

                <div className="form-group">
                    <label>
                        Name
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} className="form-control" />
                    </label> 

                </div>
                   
                <div className="form-group">
                    <label>
                        Department
                        <select name="department" className="form-control" value={this.state.department} onChange={this.handleChange}>
                            <option value=""> Select </option>
                            <option value="Technical"> Technical </option>
                            <option value="Hr"> Hr </option>
                            <option value="Sales"> Sales </option>
                        </select>
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                        <input 
                            type="radio" 
                            value="High" 
                            checked={this.state.priority === 'High'} 
                            onChange={this.handleChange} 
                            name="priority" 
                            className="form-check-input"
                        /> High 
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                            <input 
                                type="radio" 
                                value="Medium" 
                                checked={this.state.priority === 'Medium'} 
                                onChange={this.handleChange} 
                                name="priority" 
                                className="form-check-input"
                            /> Medium 
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <label className="form-check-label">
                            <input      
                                type="radio" 
                                value="Low" 
                                checked={this.state.priority === 'Low'} 
                                onChange={this.handleChange} 
                                name="priority" 
                                className="form-check-input"
                            /> Low
                    </label>
                </div> 
                   
                <div className="form-group"> 
                    <label>
                        Message
                     <textarea value={this.state.message} name="message" onChange={this.handleChange} className="form-control"></textarea>
                    </label> 
                </div> 
                
                    <input type="submit" value="Add Ticket" className="btn btn-primary" /> or <input type="reset" value="Reset" className="btn btn-secondary" /> 
                </form>
            </div>
        )
    }
}

export default TicketForm