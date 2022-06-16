/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    '^@test(.*)$': '<rootDir>/test$1',
    '^@core(.*)$': '<rootDir>/src/core$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@validator(.*)$': '<rootDir>/src/validator$1',
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: 'tsconfig.test.json',
    },
  },
};
