#!/usr/bin/env node
import semver from "semver";
import chalk from "chalk";

import { SUPPORTED_NODE_VERSIONS } from "./constants";

if (!semver.satisfies(process.version, SUPPORTED_NODE_VERSIONS.join(" || "))) {
  console.warn(
    chalk.yellow.bold(`WARNING:`),
    `You are using a version of Node.js (${process.version}) that is not supported, and it may work incorrectly, or not work at all. See https://hardhat.org/nodejs-versions`
  );
  console.log();
  console.log();
}

require("./cli");
