// format to send to AWS 'yyyy-mm-dd'
// export const formatDateForAWS = (date) => {
//   return date.toISOString().slice(0, 10);
// };

// format to send to datepicker Date object
// export const formatDateFromAWS = (date: string | null | undefined) => {
//   // extra space is intentional or it will be 1 day off
//   return new Date(`${date} `) as string | null | undefined;
// };

// checks if value is string if so return parsed obj
// else return as is
export const formatJsonFromAws = (string) => {
  if (typeof string === "string" || string instanceof string) {
    return JSON.parse(string);
  }
  return string;
};

export default {
  formatJsonFromAws,
};
