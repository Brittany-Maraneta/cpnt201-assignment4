import dayjs from "dayjs";

export function difference(element) {
  const startDate = dayjs("2023-09-23");
  const todaysDate = dayjs("2023-10-30");
  let diff = startDate.diff(todaysDate, "day");
  element.innerHTML = `Difference between these two dates is: ${diff}`;
}
