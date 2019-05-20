import App from './App'
import { shallow } from 'enzyme'
import React from 'react'
import '../utils/parsedDNA'

jest.mock('../utils/parsedDNA', () => ({
  name: 'the dna name',
  description: 'any old dna',
  zomes: [
    {
      name: 'Zome One'
    },
    {
      name: 'Zome Two'
    }
  ]
}))

it('matches the last snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})
