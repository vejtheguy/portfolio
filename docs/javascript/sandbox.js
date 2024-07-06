const clock = document.querySelector(".clock");
const day = document.querySelector(".day");
const month = document.querySelector(".month");

const ticks = () => {
  const time = new Date();

  const h = dateFns.format(time, "hh");
  const m = dateFns.format(time, "mm");
  const s = dateFns.format(time, "ss");
  const ap = dateFns.format(time, "a").toUpperCase();
  const d = dateFns.format(time, "dddd").toUpperCase();
  const date = dateFns.format(time, "MMMM Do, YYYY");

  const design =
    'class="p-2 w-[50px] rounded-lg shadow text-xl flex-col text-center"';

  const html = `
  <span ${design}>${h}</span> :
  <span ${design}>${m}</span> :
  <span ${design}>${s}</span> :
  <span ${design}>${ap}</span>
  `;

  day.innerHTML = d;
  clock.innerHTML = html;
  month.innerHTML = date;
};

setInterval(ticks, 1000);
