<template>
    <div id="calendar-entry">
        <div>
            <input type="text" placeholder="New Event" v-model="inputEntry">
        </div>
        <diV>
            <p>Day of event: {{ titleOfActiveDay }}</p>
            <input type="submit" @click="addNewEvent()">
        </div>
    </div>
    <p class="error" v-if="error">You can enter a new event please !</p>
</template>

<script>
import store from '../store';

export default {
  name: 'CalendarEntry',
  data() {
    return {
      inputEntry: '',
      error: false,
    };
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
  methods: {
    addNewEvent() {
      if (this.inputEntry === '') { this.error = true; } else { this.error = false; }
      if (!this.error) {
        const colors = ['#FF9999', '#85D6FF', '#99FF99'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newEvent = { details: this.inputEntry, edit: false, color: randomColor };
        store.addNewEvent(store.getActiveDay(), newEvent);
      }
    },
  },
};
</script>

<style>
    #calendar-entry {
        background-color: #FFF5EA;
        width: 10%;
        margin: auto;
        padding: 2% 2%;
        border-radius: 7px;
        box-shadow: 1px 1px 5px 1px #3cbac2;
    }

    input[type="text"] {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        background-color: #FFF5EA;
        outline: none;
    }

    #calendar-entry > div:last-child {
        color: #3cbac2;
    }

    input::placeholder {
        opacity: 1;
        font-family: "Courier 10 Pitch";
        font-size: 16px;
        font-weight: bold;
    }

    input[type="submit"] {
        border: 1px solid #3cbac2;
        color: #3cbac2;
        padding: 8px;
        background-color: #FFF5EA;
        border-radius: 3px;
    }

    input[type="submit"]:hover {
        background-color: #3cbac2;
        color: #FFF5EA;
        border-color: #FFF5EA;
    }
</style>
