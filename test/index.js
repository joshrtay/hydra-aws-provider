/**
 * Imports
 */

const test = require('tape')
const awsProvider = require('..')
const co = require('co')
const lambdaJSON = require('lambda-json')


process.env.HOME = __dirname

/**
 * Tests
 */

test('should work', co.wrap(function * (t) {
  const config = yield lambdaJSON(awsProvider)
  t.deepEqual({
    variable: {aws_region: {default: 'us-west-1'}},
    provider: {aws: {region: '${var.aws_region}'}}
  }, config)
  t.end()
}))
