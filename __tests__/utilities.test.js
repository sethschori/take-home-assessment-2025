import { getApi } from '../src/app/utilities';

describe('Utilities Tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('getApi', () => {

    it('fetches and returns objects', async () => {
      const mockData = {hello: 'world'};
      const url = 'https://example.com/api/foo/bar'
      
      global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockData),
        })
      );

      const result = await getApi(url)

      expect(result).toEqual(mockData);
      expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('sends errors to console', async () => {
      const url = 'https://example.com/api/foo/bar';
      const errorMessage = 'Something is wrong';
      
      fetch.mockImplementationOnce(() => Promise.reject(errorMessage));
      console.error = jest.fn()

      const result = await getApi(url)

      expect(global.fetch).toHaveBeenCalledWith(url);
      expect(console.error).toHaveBeenCalledWith(errorMessage);
    });
  });
});
