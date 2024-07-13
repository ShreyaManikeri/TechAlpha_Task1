//let date=document.querySelectorAll("timer-display").setDate();

window.onload = () => {
   
    var x = setInterval(() => {
        var now = new Date().getTime();
        
       var countDownDate = new Date('July 07 2024 11:06:00').getTime();
       //countDownDate.setDate();
        var dis = countDownDate - now;

        var Days = Math.floor(dis / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((dis % (1000 * 60)) / 1000);

        if (dis < 0) {
            setCount('closed');
            return clearInterval(x);
        } else {
            var count = 
                `${Days > 0 ? (Days + 'D ') : ''}` + 
                `${(Days > 0 || hours > 0) ? (hours >= 10 ? hours : '0' + hours) + 'H ' : ''}` + 
                `${(Days > 0 || hours > 0 || minutes > 0) ? (minutes >= 10 ? minutes : '0' + minutes) + 'M ' : ''}` + 
                `${seconds >= 10 ? seconds : '0' + seconds}s`;
            setCount(count);
        }

    }, 1000);
}

const setCount = (c) => {
    document.querySelectorAll(".timer-display").forEach(element => {
        element.innerHTML = c;
    });
    console.log(c);
};
