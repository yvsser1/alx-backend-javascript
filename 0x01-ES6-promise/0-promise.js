// eslint-disable-next-line no-unused-vars
export default function getResponseFromAPI() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success!');
    }, 1000);
  });
}
