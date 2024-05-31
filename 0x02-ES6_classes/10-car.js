/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') throw new TypeError('Brand must be a string');
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newBrand) {
    if (typeof newBrand !== 'string') throw new TypeError('Motor must be a string');
    this._motor = newBrand;
  }

  get color() {
    return this._color;
  }

  set color(newBrand) {
    if (typeof newBrand !== 'string') throw new TypeError('Color must be a string');
    this._color = newBrand;
  }

  static get [Symbol.type]() {
    return this;
  }

  cloneCar() {
    const NewInstance = this.constructor[Symbol.type];
    return new NewInstance();
  }
}
