<template>
    <div v-if="!event.edit" class="calendar-event" :key="event.details"
    :style="getBackgroundColor(event)">
        <p>{{ event.details }}</p>
        <i class="fas fa-edit" @click="setEditEvent(event.details, day.id)"></i>
        <i class="fas fa-trash-alt" @click="deleteEvent(event, day.id)"></i>
    </div>
    <div class="calendar-event edit" v-if="event.edit"
    v-bind:style="{background: backgroundColorCalendarEventEdit}">
      <input type="text" :placeholder="event.details" v-model="newDetails"
      v-bind:style="{background: backgroundColorCalendarEventEdit}" />
      <i class="fas fa-check" @click="updateEvent(day.id, event, newDetails)"></i>
    </div>
</template>

<script>
import store from '../store';

export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  data() {
    return {
      backgroundColorCalendarEventEdit: this.getBasicRandomColor(),
      newDetails: '',
    };
  },
  methods: {
    getBackgroundColor(event) {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      if (event.color === '#FF') {
        return `background-color: ${randomColor}`;
      }
      return `background-color: ${event.color}`;
    },
    getBasicRandomColor() {
      const colors = ['#FF9999', '#85D6FF', '#99FF99'];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    setEditEvent(eventDetails, dayId) {
      store.setEdit(eventDetails, dayId);
      console.log(dayId);
    },
    updateEvent(dayId, event, newDetails) {
      store.updateEvent(dayId, event, newDetails);
    },
    deleteEvent(event, dayId) {
      store.deleteEvent(event, dayId);
    },
  },
};
</script>

<style>
    .calendar-event {
        background-color: #B5CDA3;
        width: 160px;
        margin: 0px -25px 0px -25px;
        padding: 5px 0;
        border-radius: 2px;
        margin: 7px;
    }

    .calendar-event > i {
        padding: 3px;
    }

    .calendar-event.edit {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .calendar-event.edit > input {
      border: none;
      text-align: center;
      width: 75%;
      border-bottom: 1px solid grey;
    }

    .calendar-event.edit {
      text-align: center;
    }
</style>
