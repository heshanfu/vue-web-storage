class Storage {

  constructor({prefix, driver}) {
    this.prefix = prefix;
    this.storage = window[driver + 'Storage'];
  }

  set(key, value) {
    let newValue = JSON.stringify(value);
    return this.storage.setItem(this.prefix + key, newValue);
  }

  get(key) {
    let value = this.storage.getItem(this.prefix + key);
    try {
      return JSON.parse(value);
    }
    catch (e) {
      return null
    }
  }

  remove(key) {
    return this.storage.removeItem(this.prefix + key);
  }

  clear() {
    this.keys(true).forEach((key) => {
      this.storage.removeItem(key);
    });
  }

  keys(withPrefix = false) {
    let keys = [];
    let fullKeyName, newKeyName;
    let i = 0;
    let storageLength = this.storage.length;
    // Loop through all storage keys
    for (i; i < storageLength; i++) {
      fullKeyName = this.storage.key(i);
      // Check if key has prefix
      /* istanbul ignore else */
      if (fullKeyName.substr(0, this.prefix.length) === this.prefix) {
        newKeyName = withPrefix ? fullKeyName : fullKeyName.slice(this.prefix.length);
        keys.push(newKeyName);
      }
    }
    return keys;
  }

  hasKey(key) {
    return this.keys().indexOf(key) !== -1;
  }

  length() {
    return this.keys().length;
  }
}

export default Storage