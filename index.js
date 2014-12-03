module.exports = doctor

var npm = require("npm")
var semver = require("semver")
var npmlog = require("npmlog")

var stdout = process.stdout

var OLD_STABLE_NODE = "0.8.28"
var STABLE_NODE = "0.10.33"

var LATEST_NPM = "2.1.9"

function doctor (args, cb) {
  collect(args, report, cb)
}

function report(er, data, cb) {
  stdout.write("The doctor is in.\n")
  stdout.write(" node version: " + data.node_version + "\n")

  if (semver.lt(data.node_version, STABLE_NODE)) {
    stdout.write(" -> upgrade your node to the latest stable version, " + STABLE_NODE + "\n")
    stdout.write("    https://github.com/npm/npm/wiki/Troubleshooting#try-the-latest-stable-version-of-node")
    stdout.write("\n")
  }

  stdout.write(" npm version : " + data.npm_version + "\n")
  if (semver.lt(data.npm_version, LATEST_NPM)) {
    stdout.write(" -> upgrade your npm to the latest version, " + LATEST_NPM + "\n")
    stdout.write("    $ sudo npm -g install npm\n")
    stdout.write("    https://github.com/npm/npm/wiki/Troubleshooting#try-the-latest-stable-version-of-npm\n")
    stdout.write("\n")
  }

  cb(null)
}

function collect(args, rep, cb) {
  var data = {}

  data.node_version = process.version
  data.npm_version = npm.version

  rep(null, data, cb)
}
