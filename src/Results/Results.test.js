import Results from './Results'
import { shallow } from 'enzyme'
import React from 'react'

it('matches the last snapshot', () => {
  const props = {
    history: [
      {name: "one call record"},
      {name: "another call record"}
    ]
  }  
  const wrapper = shallow(<Results {...props} />)
  expect(wrapper).toMatchSnapshot()
})
