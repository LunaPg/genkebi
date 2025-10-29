module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
   "coverageReporters": [
      "json",
      "html"
    ],
    "collectCoverage": true,
    "collectCoverageFrom": [
      "<rootDir>/*.js"
    ],
    coveragePathIgnorePatterns : [
       "<rootDir>/node_modules/", 
       "<rootDir>/lib/" 
    ],
    "moduleFileExtensions": [
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