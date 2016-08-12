class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.time = new Date();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    const timeString = this.time.toGMTString().match(/\d+\:\d+\:\d+/)[0];
    let hours = parseInt(timeString.substring(0,2));
    if (hours >= 7)
      hours -= 7;
    else{
      hours -= 7;
      hours += 24;
    }
    hours = hours.toString();
    if (hours.length === 1)
      hours = '0'.concat(hours);
    console.log(hours.concat(timeString.slice(2)));
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    setInterval( () => {
      this.time.setSeconds(this.time.getSeconds() + 1);
      this.printTime();
    },  1000);

  }
}

const clock = new Clock();
clock._tick();
