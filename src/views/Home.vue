<template>
  <div class="home">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarWeek from '@/components/CalendarWeek.vue';
import CalendarEntry from '@/components/CalendarEntry.vue';

export default {
  name: 'Home',
  components: {
    CalendarWeek,
    CalendarEntry,
  },
};
</script>
