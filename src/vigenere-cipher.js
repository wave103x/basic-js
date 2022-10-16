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
  constructor(mod) {
    this.mod = mod;
    this.alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    while (message.length >= key.length) {
      key = key.concat(key)
    }

    key = key.split('');
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') key.splice(i, 0, ' ')
    }
    key = key.join('');

    key = key.slice(0, message.length);
    let res = [];
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        res.push(message[i]);
      } else res.push(String.fromCharCode((message.charCodeAt(i) - 65 + key.charCodeAt(i) - 65) % 26 + 65))
    }

    return this.mod ? res.reverse().join('') : res.join('');

  }
  decrypt(encMessage, key) {
    if (!encMessage || !key) throw new Error('Incorrect arguments!');
    key = key.toUpperCase();

    while (encMessage.length >= key.length) key = key.concat(key)
    key = key.split('');
    for (let i = 0; i < encMessage.length; i++) if (encMessage[i] === ' ') key.splice(i, 0, ' ')
    key = key.join('');
    key = key.slice(0, encMessage.length);

    let res = [];
    for (let i = 0; i < encMessage.length; i++) {
      if (encMessage.charCodeAt(i) < 65 || encMessage.charCodeAt(i) > 90) {
        res.push(encMessage[i]);
      } else if (encMessage.charCodeAt(i) < key.charCodeAt(i)) res.push(String.fromCharCode((key.charCodeAt(i) - encMessage.charCodeAt(i)) % 26 + 65))
      else res.push(String.fromCharCode((encMessage.charCodeAt(i) - key.charCodeAt(i)) % 26 + 65))
    }

    return this.mod ? res.reverse().join('') : res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

// const one = new VigenereCipheringMachine();
// console.log(one.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
