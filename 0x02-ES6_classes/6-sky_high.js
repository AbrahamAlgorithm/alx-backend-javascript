/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') throw new TypeError('Floors must be a Number');
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(newSqft) {
    if (typeof newSqft !== 'number') throw new TypeError('Floors must be a Number');
    this._floors = newSqft;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
