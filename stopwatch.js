function Stopwatch() {
  //declare private variables
  duration = 0;
  let startStorage = 0;
  let timerStarted = false;

  this.start = () => {
    if (timerStarted) {
      throw new Error("Timer already started");
    }
    console.log(timerStarted);
    startStorage = Date.now();
    timerStarted = true;
    console.log(timerStarted);
    console.log(`startStorage: ${startStorage}`);
  };

  this.stop = () => {
    if (!timerStarted) {
      throw new Error("Timer already stopped");
    }

    let end = Date.now();

    console.log(timerStarted);

    //if the interval duration is greater than 0, it means some time has already been recorded, and we just want
    // to add the new time.
    timerStarted = false;
    if (duration > 0) {
      let recentInterval = (end - startStorage) / 1000;
      console.log(`recentInterval: ${recentInterval}`);
      this.duration += recentInterval;
    } else {
      //this is the first start stop sequence

      duration = (end - startStorage) / 1000;
    }
  };
  //getter for private variable duration
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });

  this.reset = () => {
    duration = 0;
    startStorage = 0;
    intervalDuration = 0;
  };
}
