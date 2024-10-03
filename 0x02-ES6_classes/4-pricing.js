import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency = new Currency()) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(NewAmount) {
    this._amount = NewAmount;
  }

  set currency(curr = new Currency()) {
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
