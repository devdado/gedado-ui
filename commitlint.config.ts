import { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 100],
    'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
  ignores: [message => message.startsWith('chore(release):')],
};

module.exports = config;
