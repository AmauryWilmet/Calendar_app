<template>
    <div id="calendar-week" class="container">
        <CalendarDay v-for="day in sharedDaysData.data" :key="day.id" :day="day" />
    </div>
</template>
<script>
import store from '../store';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarWeek',
  data() {
    return {
      sharedDaysData: store.state,
    };
  },
  components: {
    CalendarDay,
  },
};
</script>

<style>
    #calendar-week {
        display: flex;
        flex-direction: row;
        margin: 7% auto 7% auto;
        justify-content: center;
        padding: 0 10px 0 10px;
    }
</style>
