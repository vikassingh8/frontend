import { format } from "date-fns";

export const dateFormat = (date) => {
  if (!date) {
    return "NA";
  }
  return format(new Date(date), "yyyy");
};
