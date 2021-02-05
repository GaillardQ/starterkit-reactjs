export const urlToFile = (url: string, filename: string, mimeType: string) => {
  return fetch(url)
    .then(function(res) {
      return res.blob();
    })
    .then(function(blob) {
      return new File([blob], filename, { type: mimeType });
    });
};
