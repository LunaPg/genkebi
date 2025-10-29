module.exports = {
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
        "lines": 5
      }
    },
  
 transform: {

    "^.+\\.(js|jsx)$": "babel-jest"

  }
}