const clock = document.querySelector("#time");


function RealTime() {

  const Time = new Date();
  const Hours = String(Time.getHours());
  const Minutes = String(Time.getMinutes());
  const Seconds = String(Time.getSeconds());
  
  clock.innerText = `${Hours.padStart(2,'0')}:${Minutes.padStart(2,'0')}:${Seconds.padStart(2,'0')}`;

}
RealTime();
setInterval(RealTime, 1000);