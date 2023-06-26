export function jsonp(url) {
  return new Promise((resolve, reject) => {
    const callbackName = 'jsonpCallback' + Date.now();

    window[callbackName] = function (data) {
      delete window[callbackName];
      script.remove();
      resolve(data);
    };

    const script = document.createElement('script');
    script.src = url + '&callback=' + callbackName;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
