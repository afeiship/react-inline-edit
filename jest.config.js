// https://jestjs.io/docs/en/configuration
module.exports = {
  verbose: true,
  testRegex: [/\.spec.tsx/],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  //preset: "jest-puppeteer",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
