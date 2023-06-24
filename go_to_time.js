javascript: (function() {
    const target_time = window.prompt('Time (ex: 20:09):');
    const [target_hour, target_minute] = target_time.split(':');
    const player = document.getElementsByTagName('video')[0];
    const now = new Date();
    const current_second = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
    const target_second = target_hour * 60 * 60 + target_minute * 60;
    const seconds_passed = current_second - target_second;
    player.currentTime -= seconds_passed;
})();