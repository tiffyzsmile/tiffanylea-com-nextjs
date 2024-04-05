// checks if value is string if so return parsed obj
// else return as is
const formatJsonFromAws = (string) => {
  if (typeof string === "string" || string instanceof string) {
    return JSON.parse(string);
  }
  return string;
};

export { formatJsonFromAws };
