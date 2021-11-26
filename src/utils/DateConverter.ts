import { DAY_IN_MILLISECONDS } from "./Constants";

export const getTimeFromDateString = (dateString: string) => {
  return new Date(dateString).getTime();
};

export const getDisplayedDate = (date: string | Date): string => {
  let currentDate;

  if (typeof date === "string") {
    currentDate = date;
  }
  if (date instanceof Date) {
    currentDate = date.toDateString();
  }
  if (currentDate === undefined) return "";

  if (currentDate === new Date(Date.now() - DAY_IN_MILLISECONDS).toDateString())
    return "Yesterday";
  if (currentDate === new Date().toDateString()) return "Today";
  if (currentDate === new Date(Date.now() + DAY_IN_MILLISECONDS).toDateString())
    return "Tomorrow";
  else return currentDate.split(" ").slice(1, 3).join(" ");
};
