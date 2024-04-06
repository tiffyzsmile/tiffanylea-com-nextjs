// checks if value is string if so return parsed obj
// else return as is
const formatJsonFromAws = (string) => {
  if (typeof string === "string" || string instanceof string) {
    return JSON.parse(string);
  }
  return string;
};

// This updates link to use cloudfront distribution url
// See: https://github.com/aws-amplify/amplify-console/issues/330
const getCdnImage = (url) => {
  if (url) {
    return url.replace(
      "tiffanylea-com-content20191210135709-master.s3.us-west-2.amazonaws.com", // eslint-disable-line
      "d3oyz6uk1t3qpy.cloudfront.net",
    );
  }
  return url;
};

export { formatJsonFromAws, getCdnImage };
