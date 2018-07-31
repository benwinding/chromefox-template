var core = (function() {
  function getBrowser() {
    const newsit_browser = typeof chrome !== "undefined" ? chrome : browser;
    return newsit_browser;
  }

  function getStorage(values) {
    return new Promise((resolve, reject) => {
      getBrowser().storage.sync.get(values, (items) => {
        resolve(items);
      })
    });
  }

  function setStorage(values) {
    return new Promise((resolve, reject) => {
      getBrowser().storage.sync.set(values)
    });
  }

  return {
    getBrowser: getBrowser,
    getStorage: getStorage,
    setStorage: setStorage,
  }
}())
