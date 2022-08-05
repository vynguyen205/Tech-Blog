//append name of user on to the dashboard page
const appendUserName = () => {
    let username = window.location.pathname.split('/')[2];
    const dashboardGreeting = document.getElementById('greeting')
    const currentTime = document.getElementById('date-time')

    const getTime = () => {
        let today = new Date ();
        let timeToday = moment();
    //getHours() -- current hour between 0-23
        let hour = today.getHours();
        // var time = (hour - 12) + ":" + minute;
        let time = timeToday.format("dddd, MMMM Do, h:mm");
        
        // conditional statement for am and pm, and greetings
        if (hour < 12){
            currentTime.innerHTML = time + "AM";
            dashboardGreeting.innerHTML = `🌞 Good Morning, ${ username }!`;
        //current time is 6pm or greater, greet evening
        } else if (hour >= 12 && hour < 18) {
            currentTime.innerHTML = time + "PM";
            dashboardGreeting.innerHTML = `☀️ Good Afternoon, ${ username }!`;
        } 
        else {
            currentTime.innerHTML = time + "PM";
            dashboardGreeting.innerHTML = `😴 Good Evening, ${ username }!`;
        }
    
    } 
    getTime();
    
    setInterval(function () {
        getTime();
    }, 60000)
    
}
appendUserName();
