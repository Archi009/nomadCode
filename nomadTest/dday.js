function dday() {
  //오늘
  const today = new Date();
  //d-dqy
  const targetDay = new Date("2025-12-25");

  const differ = (targetDay - today);

  const difDays = String(Math.floor(differ / (1000 * 60 * 60 * 24))); 
  const difHours = String(Math.floor((differ / (1000 * 60 * 60))% 24)) ; 
  const difMin = String(Math.floor((differ / (1000 * 60)) % 60));
  const difSec = String(Math.floor(differ / 1000 % 60));
  console.log(`${difDays}:${difHours}:${difMin}:${difSec}`);
}
dday
setInterval(dday,1000)