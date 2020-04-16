<template>
    <div class="timer">
        <div class="days">{{days}}</div>
        <div class="hours">{{hours}}</div>
        <div class="minutes">{{minutes}}</div>
        <div class="seconds">{{seconds}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            timeDate: this.dateTime
        }
    },

    props: ['dateTime'],

    created() { // Turn data into viewable values
        this.interval = setInterval(() => this.timing(this.timeDate), 1000);
    },

    methods: {
        timing(dateTime) {
            let endTime = new Date(dateTime);			
            let endTimeParse = (Date.parse(endTime)) / 1000;
            let now = new Date();
            let nowParse = (Date.parse(now) / 1000);
            let timeLeft = endTimeParse - nowParse;
            let days = Math.floor(timeLeft / 86400); 
            let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        }
    }
}
</script>