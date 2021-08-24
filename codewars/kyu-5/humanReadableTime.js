function humanReadable(seconds) {
    let hours = Math.floor(seconds/3600);
    let mins = Math.floor( (seconds/60) % 60);
    let secs = Math.floor( seconds%60);
    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;
    return hours + ':' + mins + ':' + secs;
}