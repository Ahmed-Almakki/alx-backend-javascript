export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(Nname) {
    this._name = Nname;
  }

  set code(Ccode) {
    this._code = Ccode;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
