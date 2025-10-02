// Jump to a given time on a YouTube live stream.
// Video must follow live broadcast before running the bookmarklet (i.e., stream time must match current time). 

javascript: (function() {
    const target_time = window.prompt('Time (ex: 20:09):', '08:00');
    const [target_hour, target_minute] = target_time.split(':');
    const player = document.getElementsByTagName('video')[0];
    const now = new Date();
    const current_second = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    const target_second = target_hour * 60 * 60 + target_minute * 60;
    const seconds_passed = current_second - target_second;
    x = player.currentTime - seconds_passed;
    if (x >= 0) {
        player.currentTime = x;
    } else {
        window.alert('Stream started after time');
    };
})();