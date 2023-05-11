import { getDate } from './getDate';

describe('get date test', () => {
  it('test for true', () => {
    expect(getDate('2022-05-10T00:00:00Z')).toBe('09/05/2022');
  });
  it('test for false', () => {
    expect(getDate('2022-05-10T00:00:00Z')).not.toBe('2022-05-10T00:00:00Z');
  });
});
