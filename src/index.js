'use strict'

const chalk = require('chalk')
const msgPath = process.env.HUSKY_GIT_PARAMS

if (!msgPath) {
  console.log(chalk.yellow('You must install husky first as below: '))
  console.log(chalk.cyan('npm install husky -D\n'))
  console.log('OR')
  console.log(chalk.cyan('yarn add husky --dev\n'))
  process.exit(1)
}

const msg = require('fs')
  .readFileSync(msgPath, 'utf-8')
  .trim()

const commitRE = /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/

module.exports = function validate(regexp = commitRE) {
  if (!regexp.test(msg)) {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        'invalid commit message format.'
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(
          `fix(v-model): handle events on blur (close #28)`
        )}\n\n` +
        `  Enter ${chalk.cyan('ez git -m')} for more details.\n` +
        `  You can also use ${chalk.cyan(
          'npm run commit'
        )} to interactively generate a commit message.\n`
    )
    process.exit(1)
  }
}
