function Stopwatch() {
  this.duration = 0;
  let startStorage = 0;

  //let intervalDuration = 0;
  this.start = () => {
    startStorage = Date.now();
    console.log(`startStorage: ${startStorage}`);
  };

  this.stop = () => {
    let end = Date.now();
    //console.log(`intervalDuration: ${intervalDuration}`);

    //if the interval duration is greater than 0, it means some time has already been recorded, and we just want
    // to add the new time.

    if (this.duration > 0) {
      let recentInterval = (end - startStorage) / 1000;
      console.log(`recentInterval: ${recentInterval}`);
      this.duration += recentInterval;
    } else {
      //this is the first start stop sequence

      this.duration = (end - startStorage) / 1000;
    }
  };

  this.reset = () => {
    this.duration = 0;
    startStorage = 0;
    intervalDuration = 0;
  };
}
