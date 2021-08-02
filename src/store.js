/* eslint-disable array-callback-return */
import { reactive } from 'vue';
import seedData from './seed';

const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.data.forEach((dayObj) => {
      if (dayObj.id === dayId) {
        // eslint-disable-next-line no-param-reassign
        dayObj.active = true;
      } else {
        // eslint-disable-next-line no-param-reassign
        dayObj.active = false;
      }
    });
  },
  addNewEvent(dayActive, dayEvent) {
    dayActive.events.push(dayEvent);
  },
  setEdit(eventDetails, dayId) {
    this.state.data.forEach((day) => {
      day.events.forEach((event) => {
        if (day.id === dayId && event.details === eventDetails) {
          // eslint-disable-next-line no-param-reassign
          event.edit = true;
        }
      });
    });
  },
  updateEvent(dayId, e, newDetails) {
    this.state.data.forEach((day) => {
      day.events.forEach((event) => {
        if (day.id === dayId && event.details === e.details && event.edit === e.edit) {
          // eslint-disable-next-line no-param-reassign
          event.details = newDetails;
          // eslint-disable-next-line no-param-reassign
          event.edit = false;
        }
      });
    });
  },
  deleteEvent(event, dayId) {
    this.state.data.forEach((day) => {
      const indexCurrentEvent = day.events.indexOf(event);
      if (day.id === dayId && indexCurrentEvent >= 0) {
        day.events.splice(indexCurrentEvent, 1);
      }
    });
  },
};

export default store;
