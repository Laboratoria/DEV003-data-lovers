import { filterData, getData } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `filterData', () => {
    expect(filterData()).toBe('example');
  });
});git pull origin main


describe('getData', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
