/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a Number');
    if (!(currency instanceof Currency)) throw new TypeError('Must be type Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newName) {
    if (typeof newName !== 'number') {
      throw new TypeError('Name must be a String');
    }
    this._amount = newName;
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Must be type Currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number' || typeof (conversionRate) !== 'number') {
      throw new TypeError('Must be number');
    }
    return amount * conversionRate;
  }
}
