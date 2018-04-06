const { Writable } = require('stream');

class SimpleJSONDocStream extends Writable {
  constructor(options) {
    super(options);
    this.currentLine = '';
  }

  _write(chunk, encoding, callback) {
    const json = this.currentLine + chunk.toString('utf8');
    const lines = json.split('\n');
    this.currentLine = lines.pop();
    lines.forEach(line => {
      try {
        this.emit('parsed', JSON.parse(line));
      } catch (error) {
        this.emit('error', error);
      }
    });
    callback();
  }
}

module.exports = SimpleJSONDocStream;
