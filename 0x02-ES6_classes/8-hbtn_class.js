/* eslint-disable no-underscore-dangle */
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize !== 'number') throw new TypeError('Size must be a Number');
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') throw new TypeError('Location must be a String');
    this._location = newLocation;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    } if (hint === 'string') {
      return this._location;
    }
    return this._location;
  }
}
