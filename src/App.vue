<template>
  <div id="app">
    <div id="calendar-week" class="container">
      <div class="calendar-day">
        <div class="calendar-day-header">
          <h3>MON</h3>
        </div>
        <div class="calendar-day-body">
          <p>1</p>
          <div class="canlendar-event">
            <p>Test</p>
            <p>zedfseffsfsfs</p>
          </div>
        </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
      </div>
      <div class="calendar-day">
          <div class="calendar-day-header">
            <h3>MON</h3>
          </div>
          <div class="calendar-day-body">
            <p>1</p>
            <div class="canlendar-event">
              <p>Test</p>
              <p>zedfseffsfsfs</p>
            </div>
          </div>
        </div>
      </div>
    <div id="calendar-entry">
      <div id="calendar-entry-header">
        <input type="text" placeholder="New Event">
      </div>
      <div id="calendar-entry-body">
        <p>Day of event: Monday</p>
        <input type="submit">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
hmtl, body, #app {
  height: 100%;
}

body {
  background-color: #F7DAD9;
}

#app {
  text-align: center;
}

#calendar-week {
  display: flex;
  flex-direction: row;
  margin: 7% auto 7% auto;
  justify-content: center;
}

.calendar-day {
  border-right: 1px solid white;
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

#calendar-entry {
  background-color: #FFF5EA;
  width: 10%;
  margin: auto;
  padding: 2% 2%;
  border-radius: 7px;
  box-shadow: 1px 1px 5px 1px #3cbac2;
}

#calendar-entry-header > input[type="text"] {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: #FFF5EA;
  outline: none;
}

#calendar-entry-body {
  color: #3cbac2;
}

input::placeholder {
  opacity: 1;
  font-family: "Courier 10 Pitch";
  font-size: 16px;
  font-weight: bold;
}

#calendar-entry-body > input {
  border: 1px solid #3cbac2;
  color: #3cbac2;
  padding: 8px;
  background-color: #FFF5EA;
  border-radius: 3px;
}

#calendar-entry-body > input:hover {
  background-color: #3cbac2;
  color: #FFF5EA;
  border-color: #FFF5EA;
}

</style>
