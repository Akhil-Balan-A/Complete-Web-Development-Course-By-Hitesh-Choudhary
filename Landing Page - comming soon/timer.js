
  // Set launch date
  const launchDate = new Date("July 30, 2025 00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? '0' + days : days;
    document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

    if (diff < 0) {
      clearInterval(timer);
      document.querySelector(".countdown-container").innerHTML = "We Are Live!";
    }
  }, 1000);
  
