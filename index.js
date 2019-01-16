#!/usr/bin/env node

'use strict'

const get = require('lodash.get')
const path = require('path')
const pkginfo = require(path.join(process.cwd(), 'package.json'))
const regSource = get(pkginfo, 'husky.rules.commit-msg')
const commitMsgReg = regSource ? new RegExp(regSource) : undefined

require('./src')(commitMsgReg)
