# simple-json-doc-stream

Parses streams of JSON documents line by line.

## Motivation

This library is an alternative to [`json-doc-stream`](https://www.npmjs.com/package/json-doc-stream) which may not be super effecient but does handle a lot of corner cases. When those corner cases don't need to be handled then `simple-json-doc-stream` can be used instead. The corner cases arise when you want to pretty print your JSON documents over multiple lines and still need to handle error cases cleanly. The principle with this library is that JSON documents will not be split over multiple lines, but that there will be at least one line between each document. Any lines that cannot be parsed as a complete JSON document will result in an error event.

## Install

```
npm install simple-json-doc-stream
```

## Usage

```javascript
const SimpleJSONDocStream = require('simple-json-doc-stream');

const stream  = new SimpleJSONDocStream();

stream.on('parsed', parsed => {
  // handle the parsed JSON document
  // could be an object, array, string,
  // number, boolean or null
});
 
stream.on('error', error => {
  // handle parse errors
});
 
stream.write(JSONdata);
 
// or
 
readableStream.pipe(stream);
```
