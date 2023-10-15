const countdownTimer = (deadline) => {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const updateTimer = () => {
    const currentTime = new Date();
    const timeLeft = new Date(deadline - currentTime);

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const [hoursLeft, minutesLeft, secondsLeft] = timeLeft
      .toLocaleTimeString("ru-RU", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .split(":");

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;

    if (timeLeft < 0) {
      clearInterval(timerId);
    }
  };

  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
};

const deadline = new Date("2023-12-31T23:59:59");

countdownTimer(deadline);
