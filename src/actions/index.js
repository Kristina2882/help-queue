import * as c from './../actions/ActionTypes';

export const deleteTicket = id => ({
    type: c.DELETE_TICKET,
    id
});

export const toggleForm = () => ({
   type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
    const {names, location, issue,timeOpen, formattedWaitTime, id} = ticket;
    return {
        type: c.ADD_TICKET,
        id: id,
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        formattedWaitTime
    }
};

export const updateTime = (id, formattedWaitTime) => ({
    type: c.UPDATE_TIME,
    formattedWaitTime: formattedWaitTime,
    id: id
});