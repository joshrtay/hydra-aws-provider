/**
 * Modules
 */

const readRegion = require('aws-read-region')

/**
 * Expose
 */

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
