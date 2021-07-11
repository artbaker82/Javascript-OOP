function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = () => {
    if (running) throw new Error("Timer already started");
    startTime = Date.now();
    console.log(startTime);
    running = true;
  };

  this.stop = () => {
    if (!running) {
      throw new Error("Timer already stopped");
    } else {
      running = false;
      endTime = Date.now();
      let seconds = (endTime - startTime) / 1000;
      console.log(seconds);
      console.log(duration);
      duration += seconds;
    }
  };

  this.reset = () => {
    (startTime = 0), (endTime = 0), (duration = 0);
    running = false;
  };

  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
}
