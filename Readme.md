
# hydra-aws-provider

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Hydra helper for adding aws provider conifg.

## Installation

    $ npm install hydra-aws-provider

## Usage

aws.tf.js
```js
module.exports = require('hydra-aws-provider')
```

## Code

```js
module.exports = {
  "variable": {
    "aws_region": {
      "default": function * () {
        return (yield readRegion()).region
      }
    }
  },
  "provider": {
    "aws": {
      "region": "${var.aws_region}"
    }
  }
}
```

`readRegion` grabs the region from your config file.

## License

MIT

[travis-image]: https://img.shields.io/travis/joshrtay/hydra-aws-provider.svg?style=flat-square
[travis-url]: https://travis-ci.org/joshrtay/hydra-aws-provider
[git-image]: https://img.shields.io/github/tag/joshrtay/hydra-aws-provider.svg?style=flat-square
[git-url]: https://github.com/joshrtay/hydra-aws-provider
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/hydra-aws-provider.svg?style=flat-square
[npm-url]: https://npmjs.org/package/hydra-aws-provider
