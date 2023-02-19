// jest.config.js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
   "coverageReporters": [
      "json",
      "html"
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
      "<rootDir>/src/**/*.ts",
      "<rootDir>/!lib/*",
    ],
    coveragePathIgnorePatterns : [
       "<rootDir>/node_modules/", 
       "<rootDir>/lib/" 
    ],
    "roots": [
      "<rootDir>/src"
    ],
        "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "coverageThreshold": {
      "global": {
        "lines": 80
      }
    }
}