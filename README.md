# Vue-web-storage

[![vue-js](https://img.shields.io/badge/vue.js-2.x-brightgreen.svg?maxAge=604800)](https://vuejs.org/)
[![downloads](https://img.shields.io/npm/dt/vue-web-storage.svg)](http://npm-stats.com/~packages/vue-web-storage)
[![npm-version](https://img.shields.io/npm/v/vue-web-storage.svg)](https://www.npmjs.com/package/vue-web-storage)
[![github-tag](https://img.shields.io/github/tag/ankurk91/vue-web-storage.svg?maxAge=1800)](https://github.com/ankurk91/vue-web-storage/)
[![license](https://img.shields.io/github/license/ankurk91/vue-web-storage.svg?maxAge=1800)](https://yarnpkg.com/en/package/vue-web-storage)
[![build-status](https://travis-ci.org/ankurk91/vue-web-storage.svg?branch=master)](https://travis-ci.org/ankurk91/vue-web-storage)
[![codecov](https://codecov.io/gh/ankurk91/vue-web-storage/branch/master/graph/badge.svg)](https://codecov.io/gh/ankurk91/vue-web-storage)

A minimalistic Vue.js v2.x plugin for web storage

## Features
* Choose either `localStorage` or `sessionStorage`
* Prefix all of your stored keys
* Auto `JSON.stringify` and `JSON.parse`
* Events for cross tab communication

## Installation
```bash
# npm
npm install vue-web-storage --save

# Yarn
yarn add vue-web-storage
```

## Usage
```js
import Vue from 'vue';
import Storage from 'vue-web-storage';  
Vue.use(Storage);  
```

## Configuration (optional)
```js
Vue.use(Storage, {
  prefix: 'your_app_name',// default `app_`
  driver: 'session', // default 'local'
})
```

### Methods
All methods takes care of `prefix` in key name, so you no need to specify key prefix when using them.

#### `set(key,value)`
Stores the `value` under specified `key` in storage. Convert value to JSON before saving.
Returns `true` on success and `false` on errors.
```js
Vue.$storage.set('name', 'john')
Vue.$storage.set('isAdmin', true)
Vue.$storage.set('roles', ['admin', 'sub-admin'])
Vue.$storage.set('permission', {id: 2, slug: 'edit_post'})
```
#### `get(key)`
Retrieves given `key` value from storage, parse the value from JSON before returning.
If parsing failed then returns the actual value get from storage.
```js
Vue.$storage.get('name')
```
#### `remove(key)`
Removes the `key` from storage. 
```js
Vue.$storage.remove('name')
```
#### `clear(force = false)`
Removes all keys from storage. Passing `true` will clear whole storage without taking `prefix` into consideration.
```js
Vue.$storage.clear()
```
#### `keys(withPrefix = false)`
Returns array of keys stored in storage. Passing `true` will return prefixed key names.
```js
Vue.$storage.keys()
```
#### `hasKey(key)`
Returns `true` if key exists in storage regardless of its value.
```js
Vue.$storage.hasKey('name')
```
#### `length()`
Returns the number of keys stored in storage.
```js
Vue.$storage.length()
```

### Events
* These are not regular Vue.js events, these [events](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent) to be used for cross tab communication.

#### `on(key,fn)`
Attaches a listener method to the given key. You can attach multiple methods on the same key.
```js
const onChangeName = (newValue, OldValue, url) => {
  // do something when `name` value gets changed
};
Vue.$storage.on('name', onChangeName);
Vue.$storage.on('name', this.anotherMethod)
```
#### `off(key,fn)`
Removes specified listener method form the given key.
```js
Vue.$storage.off('name', this.onChangeName)
```
#### `clearEvents(key?)`
* Removes all listeners for the given key otherwise clears the listeners pool when not specified.
```js
Vue.$storage.clearEvents('name');
Vue.$storage.clearEvents()
```

## Install in non-module environments (without webpack)
```html
<!-- Vue js -->
<script src="https://unpkg.com/vue@2.5/dist/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="https://unpkg.com/vue-web-storage@2"></script>
<!-- Init the plugin -->
<script>
Vue.use(VueWebStorage)
</script>
```

## Testing
* This package is using [Jest](https://github.com/facebook/jest) for testing
* Tests can be found in `__test__` folder.
* Execute tests with this command `yarn test`

## Resources
* [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
* [Browser support status](https://caniuse.com/#feat=namevalue-storage), [Chrome](https://www.chromestatus.com/feature/5345825534246912), [Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/webstorage/)
* [Web Storage Quota](https://www.html5rocks.com/en/tutorials/offline/quota-research/)
* [Storage Event Example](https://html5demos.com/storage-events/)

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License
[MIT](LICENSE.txt) License
