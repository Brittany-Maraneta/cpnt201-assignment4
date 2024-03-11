import dayjs from "dayjs";

export function currentTime(element) {
  let now = dayjs().format("h:mm:ss a" + " on " + "DD/MM/YYYY");
  element.innerHTML = `Current Time is ${now}`;
}

console.log(dayjs);
