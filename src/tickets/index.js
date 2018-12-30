import React from 'react' 
import axios from 'axios'
import api from '../config/api'
import keys from '../config/credentials'

import TicketTable from './table'
import TicketForm from './form'

class TicketIndex extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            tickets: []
        }
        this.handleResponse = this.handleResponse.bind(this)
    }

    componentDidMount() {
        axios.get(`${api.tickets.baseURL}?api_key=${keys.authentication}`).then(response => 
            this.setState({
                tickets: response.data 
            })
        )
    }

    handleResponse(ticket) {
        this.setState(prevState => ({
            tickets: prevState.tickets.concat(ticket)
        }))
    }


    render() {
        return( 
            <div>
                <h2> Listing Tickets - {this.state.tickets.length}</h2>
                <div className="row"> 
                    <div className="col-md-8"> 
                        <TicketTable tickets={this.state.tickets} />
                    </div> 
                    <div className="col-md-4">
                        <TicketForm handleResponse={this.handleResponse} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TicketIndex