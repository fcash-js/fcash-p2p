<img src="http://www.fcash.cash/css/images/fcash-p2p.svg" alt="fcash-base payment protocol" height="35" width="102">

Fcash P2P
=======

[![NPM Package](https://img.shields.io/npm/v/fcash-p2p.svg?style=flat-square)](https://www.npmjs.org/package/fcash-p2p)
[![Build Status](https://img.shields.io/travis/fcash-js/fcash-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/fcash-js/fcash-p2p)
[![Coverage Status](https://img.shields.io/coveralls/fcash-js/fcash-p2p.svg?style=flat-square)](https://coveralls.io/r/fcash-js/fcash-p2p?branch=master)

`fcash-p2p` adds [Fcash protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Fcash.

See [the main fcash-base repo](https://github.com/fcash-js/fcash-base) for more information.

## Getting Started

```sh
npm install fcash-p2p
```
In order to connect to the Fcash network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('fcash-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [fcash-base guide](http://www.fcash.cash/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/fcash-js/fcash-base/blob/master/CONTRIBUTING.md) on the main fcash-base repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/fcash-js/fcash-base/blob/master/LICENSE).

Copyright 2013-2015 Fcash, Inc. Fcash is a trademark maintained by Fcash, Inc.
