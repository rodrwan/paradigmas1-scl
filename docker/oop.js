function Note(text) {
  this.text = text || '';
  this.createdAt = new Date();
  this.completed = false;
}

Note.prototype.toString = function () {
  return `[${this.completed ? 'X' : ' '}] | ${this.createdAt.toDateString()} | ${this.text}`;
};


function Notes() {
  this.data = [];
}

Notes.prototype.add = function (note) {
  if (!(note instanceof Note)) {
    throw new Exception('note no es instancia de Note');
  }

  this.data.unshift(note);
};

Notes.prototype.toString = function () {
  if (!this.data.length) {
    return ''
  }

  // this.data.sort((a,b) => b.createdAt - a.createdAt)
  return this.data.join('\n')
};

module.exports.Note = Note
module.exports.Notes = Notes
