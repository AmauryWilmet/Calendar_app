<template>
    <div class="calendar-day" @click="changeDayActive(day.id)">
        <div class="calendar-day-header">
            <p>{{ day.abbvTitle }}</p>
        </div>
        <div class="calendar-day-body">
            <p>{{ day.id }}</p>
            <CalendarEvent v-for="event in day.events" :key="event.details" :event="event"
            :day="day" />
        </div>
    </div>
</template>

<script>
import CalendarEvent from './CalendarEvent.vue';
import store from '../store';

export default {
  name: 'CalendarDay',
  props: ['day'],
  components: {
    CalendarEvent,
  },
  methods: {
    changeDayActive(dayId) {
      store.setActiveDay(dayId);
    },
  },
};
</script>

<style>
.calendar-day {
  border-right: 1px solid white;
  width: 100%;
  height: 100%;
}

.calendar-day:last-child {
  border: none;
}

.calendar-day-header {
  background-color:  #968C83;
  margin: 0;
  padding: 1px;
  color: #fff;
}

.calendar-day-body {
  background-color: #D6D2C4;
  margin: 0;
  padding: 22px 50px 22px 50px;
}

.calendar-day-body > p {
  text-align: left;
  padding: 0;
  margin-left: -20px;
  margin-top: 0;
  color: #fff;
}
</style>
