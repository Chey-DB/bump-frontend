import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, clearEventField, addEventDate, toggleEventsSidebarObj, toggleNewEventSidebarObj, toggleDetailSidebarObj } from "../Calendar/actions/actionCreatorObj";


const NewEventButton = ({ date }) => {

  const calendarContext = useSelector(state => state.calendarState);
  const dispatch = useDispatch();

  const {
    newEventSidebarToggled,
    eventDate,
    days
  } = calendarContext;

  const dispatchEditEventDate = () => {
    dispatch(addEventDate(date))
    dispatch(changeServiceField('date', days[eventDate].date))
  }

  return (
    <nav className="navbar-button">
      <div className="button-group">
        <button
          className="primary-btn primary-btn-green"
          onClick={() => {
            dispatch(toggleNewEventSidebarObj(!newEventSidebarToggled));
            dispatch(toggleEventsSidebarObj(false));
            dispatch(toggleDetailSidebarObj(false))
            dispatch(clearEventField())
            date ? dispatchEditEventDate() : dispatch(addEventDate(null))
          }}
        >
          <i className="fas fa-plus"></i> New Event
        </button>
      </div>
    </nav>
  );
};

export default NewEventButton;
