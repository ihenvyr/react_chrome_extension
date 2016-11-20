// Chrome Storage - https://developer.chrome.com/extensions/storage
const Storage = () => {
  const methods = {
    set: (items, callback) => {
      chrome.storage.sync.set(items, callback);
    },
    get: (keys, callback) => {
      chrome.storage.sync.get(keys, callback);
    },
    remove: (keys, callback) => {
      chrome.storage.sync.remove(keys, callback);
    }
  };

  return {
    set: methods.set,
    get: methods.get,
    remove: methods.remove
  }
};

export default Storage;
