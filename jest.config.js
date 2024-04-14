/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.test.json' }], // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig/
  },

  testEnvironment: 'node',
  verbose: true,
  clearMocks: true,
};
