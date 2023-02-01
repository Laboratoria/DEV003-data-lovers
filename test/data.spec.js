import { filterByType } from '../src/data.js'
import { dataOrderAZ } from '../src/data.js'
import { dataOrderZA } from '../src/data.js'

const mockdata = [
  {
    num: '001',
    name: 'bulbasaur',
    type: ['posion'],
  },
  {
    num: '154',
    name: 'meganium',
    type: ['grass'],
  },
  {
    num: '222',
    name: 'corsola,',
    type: ['water'],
  },
  {
    num: '251',
    name: 'celebi',
    type: ['psychic'],
  },
]

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function')
  })

  it('returns tipos de pokemon', () => {
    expect(filterByType(mockdata, 'grass')).toEqual([
      {
        num: '154',
        name: 'meganium',
        type: ['grass'],
      },
    ])
  })
})

describe('dataOrderAZ', () => {
  it('is a function', () => {
    expect(typeof dataOrderAZ).toBe('function')
  })

  it('returns orden ascendente', () => {
    expect(dataOrderAZ(mockdata)).toEqual([
      {
        num: '001',
        name: 'bulbasaur',
        type: ['posion'],
      },
      {
        num: '251',
        name: 'celebi',
        type: ['psychic'],
      },
      {
        num: '222',
        name: 'corsola,',
        type: ['water'],
      },
      {
        num: '154',
        name: 'meganium',
        type: ['grass'],
      },
    ])
  })
})

describe('dataOrderZA', () => {
  it('is a function', () => {
    expect(typeof dataOrderZA).toBe('function')
  })

  it('returns orden descendente', () => {
    expect(dataOrderZA(mockdata)).toEqual([
      {
        num: '154',
        name: 'meganium',
        type: ['grass'],
      },
      {
        num: '222',
        name: 'corsola,',
        type: ['water'],
      },
      {
        num: '251',
        name: 'celebi',
        type: ['psychic'],
      },
      {
        num: '001',
        name: 'bulbasaur',
        type: ['posion'],
      },
    ])
  })
})