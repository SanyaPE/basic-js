const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 class VigenereCipheringMachine {
  constructor(option = true) {
    this.option = option;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    message = this._toCode(message);
    key = this._toCode(key);

    let directCode = [];
    let j = 0;
    message.forEach((el) => {
      if (el < 65 || el > 90) directCode.push(el);
      else {
        directCode.push(((el + key[j % key.length]) % 26) + 65);
        j++;
      }
    });

    return this._toString(directCode);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");
    encryptedMessage = this._toCode(encryptedMessage);
    key = this._toCode(key);

    let directCode = [];
    let j = 0;
    encryptedMessage.forEach((el) => {
      if (el < 65 || el > 90) directCode.push(el);
      else {
        directCode.push(((el - key[j % key.length] + 26) % 26) + 65);
        j++;
      }
    });
    return this._toString(directCode);
  }
  _toCode(message) {
    return message
      .toUpperCase()
      .split("")
      .map((elem) => elem.charCodeAt(0));
  }
  _toString(code) {
    if (this.option) return String.fromCharCode(...code);
    else return String.fromCharCode(...code.reverse());
  }
}

module.exports = {
  VigenereCipheringMachine
};
