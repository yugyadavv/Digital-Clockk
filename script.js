
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var amPm = hours >= 12 ? 'PM' : 'AM';
  
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
   
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
    document.getElementById('am-pm').textContent = amPm;
  }
  
  setInterval(updateClock, 1000); // Update the clock every 1000 milliseconds (1 second)
  updateClock(); // Initial call to display the clock immediately