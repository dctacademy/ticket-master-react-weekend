import React from 'react'
import { Link } from 'react-router-dom'

class TicketRow extends React.Component {
  
    render() {
        const { ticket_code, name, department, priority, message, status } = this.props
        return (
            <tr>
                <td> <Link to={{
                    pathname: `/tickets/${ticket_code}`, 
                    state: { 
                        ticket_code, 
                        name, 
                        department, 
                        priority, 
                        message, 
                        status
                    }
                }}> {ticket_code}  </Link></td>
                <td> {name} </td>
                <td> {department} </td>
                <td> {priority} </td>
                <td> {message} </td>
                <td> {status} </td>
            </tr>
        )
    }
}

export default TicketRow