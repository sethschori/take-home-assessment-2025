import JSDOMEnvironment from 'jest-environment-jsdom';

// This was the only way I found to get past this Jest error:
//   'ReferenceError: Response is not defined'
export default class FixJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    this.global.fetch = fetch;
    this.global.Headers = Headers;
    this.global.Request = Request;
    this.global.Response = Response;
  }
}
