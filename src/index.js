document.addEventListener('DOMContentLoaded', function(){

    function timer(dataLine, timer, ...time){
        
        function getTimSelectors(endtime, timerSelector, ...getTimes){
            const selector = document.querySelector(timerSelector);
            let getSelectorsTime = getTimes.map(element => selector.querySelector(`#${element}`));

            timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const [days, hours, minutes, seconds] = getSelectorsTime;
                const t = getTimeRemaining(endtime);
    
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        getTimSelectors(dataLine, timer, ...time);
        
        function getTimeRemaining(endtime) {
            
            const t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor( (t/1000) % 60 ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                hours = Math.floor( (t/(1000*60*60) % 24) ),
                days = Math.floor( (t/(1000*60*60*24)) );
    
            return {
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours,
                'days': days
            };
        }

        function getZero(num) {
            return (num >= 0 && num < 10) ? '0' + num : num;
        }
    }
    timer('2023-12-30', '.timer', 'days', 'hours', 'minutes', 'seconds');
});