import type { Config } from 'jest'

const ConfigJest: Config = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

export default ConfigJest