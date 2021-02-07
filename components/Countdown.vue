<template>
    <div v-if="loaded" class="page-content">
        <div v-if="!expired" class="coming-soon">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Countdown to Election Day</h2>
                        <p>Pemungutan suara akan dilakukan pada tanggal 26 Februari 2021 - 1 Maret 2021. Stay tuned!</p>
                        <div class="timer">
                            <div class="days-wrapper">
                                <span class="days">{{displayDays}}</span> <br>days
                            </div>
                            <div class="hours-wrapper">
                                <span class="hours">{{displayHours}}</span> <br>hours
                            </div>
                            <div class="minutes-wrapper">
                                <span class="minutes">{{displayMinutes}}</span> <br>minutes
                            </div>
                            <div class="seconds-wrapper">
                                <span class="seconds">{{displaySeconds}}</span> <br>seconds
                            </div>
                        </div>
                        <div class="infocalon">
                            <NuxtLink to="/info" class="btn btn-primary btn-lg">Lihat Informasi CaKahim dan CaSenat</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="coming-soon">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2>Vote Now!</h2>
                        <p>Pemungutan suara telah dimulai. Login untuk menggunakan hak suara Anda!</p>
                        <div class="timer">
                            <div class="days-wrapper">
                                <span class="days">{{displayDays}}</span> <br>days
                            </div>
                            <div class="hours-wrapper">
                                <span class="hours">{{displayHours}}</span> <br>hours
                            </div>
                            <div class="minutes-wrapper">
                                <span class="minutes">{{displayMinutes}}</span> <br>minutes
                            </div>
                            <div class="seconds-wrapper">
                                <span class="seconds">{{displaySeconds}}</span> <br>seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data : () => ({
        displayDays: 0,
        displayHours: 0,
        displayMinutes:0,
        displaySeconds:0,
        loaded :false,
        expired : false,
    }),
    computed: {
        _seconds : () => 1000,
        _minutes(){
            return this._seconds*60
        },
        _hours(){
            return this._minutes*60
        },
        _days(){
            return this._hours*24
        } 
    },
    mounted() {
        this.showRemaining();
    },
    methods : {
        formatNum: num => (num<10 ? "0" + num : num),

        showRemaining(){
            const timer = setInterval( () => {
                const now = new Date();
                const end = new Date(2021, 1, 26, 7, 0, 0);
                const distance = end.getTime() - now.getTime();
                
                if(distance<=0){
                    clearInterval(timer);
                    this.$emit('start-vote');
                    this.expired = true;
                    this.loaded = true;
                    return
                }

                const days = Math.floor(distance/this._days);
                const hours = Math.floor((distance%this._days)/this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);
                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
}
</script>

<style lang="scss" scoped>
	.coming-soon {
    margin: 0 auto;
    text-align: center;
    }

    .coming-soon h2 {
        font-size: 40px;
        line-height: 44px;
        font-weight: 700;
        text-transform: uppercase;
        text-shadow: 0 1px 7px rgba(0,0,0,.2);
    }

    .coming-soon p {
        margin-top: 20px;
        font-size: 18px;
        line-height: 36px;
        text-shadow: 0 1px 7px rgba(0,0,0,.2);
    }

    .timer {
        margin-top: 40px;
        text-shadow: 0 1px 5px rgba(0,0,0,.1);
        margin-bottom : 40px;
    }

    .timer .days-wrapper,
    .timer .hours-wrapper,
    .timer .minutes-wrapper,
    .timer .seconds-wrapper {
        display: inline-block;
        width: 160px;
        height: 160px;
        margin: 0 10px;
        padding-top: 20px;
        background: #C4C4C4;
        font-size: 18px;
        line-height: 22px;
        -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%;
    }

    .timer .days-wrapper:hover,
    .timer .hours-wrapper:hover,
    .timer .minutes-wrapper:hover,
    .timer .seconds-wrapper:hover {
        background: #e45642;
        text-shadow: none;
    }

    .timer .days,
    .timer .hours,
    .timer .minutes,
    .timer .seconds {
        font-size: 80px;
        line-height: 90px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
	
	.timer .days-wrapper,
    .timer .hours-wrapper,
    .timer .minutes-wrapper,
    .timer .seconds-wrapper { width: 140px; height: 140px; margin: 0 7px; }
    
    .timer .days,
    .timer .hours,
    .timer .minutes,
    .timer .seconds { font-size: 60px; line-height: 70px; }
	
    }

    @media (max-width: 767px) {

    .coming-soon h2 { font-size: 36px; }

    .timer .days-wrapper,
    .timer .hours-wrapper,
    .timer .minutes-wrapper,
    .timer .seconds-wrapper { width: 140px; height: 140px; margin: 7px; }

    .timer .days,
    .timer .hours,
    .timer .minutes,
    .timer .seconds { font-size: 60px; line-height: 70px; }
    }

    .btn {
        background-color: #3EA0AD ;
    }
</style>