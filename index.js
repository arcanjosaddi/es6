class Message {
  constructor(text = '', created = Date.now()) {
    this.text = '';
    this._created = Date.now();
  }

  get created() {
    return this._created;
  }

  set created(created){
    if (!created || isNaN(created)) {
      throw new Error('Invalid Created');
    }
    this._created = created;
  }

  toString() {
    return `Message created at: ${this._created} - Text: ${this.text}`;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);

console.log(String(emptyMessage));
console.log(String(textMessage));