import React from 'react' 
import TicketRow from './table-row'

function TicketTable(props) {
    return (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th> Code </th>
                    <th> Name </th>
                    <th> Department </th>
                    <th> Priority </th>
                    <th> Message </th>
                    <th> Status </th>
                </tr>
            </thead>
            <tbody>
                {props.tickets.map(ticket => {
                    return (
                        <TicketRow 
                            key={ticket.id} 
                            ticket_code={ticket.ticket_code} 
                            name={ticket.name} 
                            department={ticket.department} 
                            priority={ticket.priority} 
                            message={ticket.message} 
                            status={ticket.status}
                            handleStatusChange={props.handleStatusChange}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default TicketTable