import type {Config} from 'jest';
import nextJest from 'next/jest.js'

// This was the only way I found to get past this Jest error:
//   'ReferenceError: Response is not defined'
const { Response, Headers, Request } = require('whatwg-fetch');

global.Response = Response;
global.Headers = Headers;
global.Request = Request;
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/__tests__/setupFiles.js'],

  // The test environment that will be used for testing
  // This was the only way I found to get past this Jest error:
  //   'ReferenceError: Response is not defined'
  testEnvironment: './__tests__/FixJSDOMEnvironment.js',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    'setupFiles.js',
    'FixJSDOMEnvironment.js'
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
