/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw new Error('Class extending Building must override evacuationWarningMessage');
    if (typeof sqft !== 'number') throw new TypeError('Sqft must be a Number');
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') throw new TypeError('Sqft must be a Number');
    this._sqft = newSqft;
  }
}
