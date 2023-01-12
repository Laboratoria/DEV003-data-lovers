import { filterData, getData } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData', () => {
    expect(filterData()).toBe('example');
  });
})


describe('getData', () => {
  it('is a function', () => {
    expect(typeof getData).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
