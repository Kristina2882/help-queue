import React from "react";
import PropTypes from "prop-types"

function TicketDetail(props) {
    const {ticket, onClickingDelete} = props;
 return (
    <React.Fragment>
        <h2>Ticket Details</h2>
        <h3>{ticket.location} - {ticket.names}</h3>
        <h3><em>{ticket.issue}</em></h3>
        <button onClick={props.onClickingEdit}>Update Ticket</button>
        <button onClick={() => onClickingDelete(ticket.id)}>Close the ticket</button>
        <hr/>
    </React.Fragment>
 );
}

TicketDetail.propTypes = {
 ticket: PropTypes.object,
 onClickingDelete: PropTypes.func,
 onClickingEdit: PropTypes.func
}

export default TicketDetail;