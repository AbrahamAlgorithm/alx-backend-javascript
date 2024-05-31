/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(newBrand) {
    if (typeof newBrand !== 'string') throw new TypeError('Range must be a string');
    this._range = newBrand;
  }

  cloneCar() {
    const NewInstance = super.constructor[Symbol.type];
    return new NewInstance();
  }
}
