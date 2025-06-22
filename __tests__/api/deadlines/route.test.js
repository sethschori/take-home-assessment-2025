import VoterRegistrationDeadline from '../../../src/app/models/voter-registration-deadline'
import { GET } from '../../../src/app/api/deadlines/route';
import sequelize from '../../../src/app/db/sequelize';

describe('Deadlines API Tests', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('GET Requests', () => {

    it('returns deadline data', async () => {
      const mockData = [{state: 'Kyrgyzstan'}]

      jest.spyOn(sequelize, 'authenticate').mockImplementation(() => Promise.resolve())
      jest.spyOn(VoterRegistrationDeadline, 'findAll').mockImplementation(() => Promise.resolve(
        mockData
      ))

      const result = await GET({method: 'GET'});

      expect(result.constructor).toEqual(Response);
      expect(Object.values(result)).toContain(JSON.stringify(mockData));
    });
  });

  beforeEach(() => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => null);
  });``

  it('returns 400 response for error', async () => {
      jest.spyOn(sequelize, 'authenticate').mockImplementation(() => Promise.resolve())
      jest.spyOn(VoterRegistrationDeadline, 'findAll').mockRejectedValue(new Error('error foo'));

      const result = await GET({method: 'GET'});

      expect(result.constructor).toEqual(Response);
      expect(result.status).toEqual(400);
  })
});
