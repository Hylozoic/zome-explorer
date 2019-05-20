import ZomeList from './ZomeList'
import { shallow } from 'enzyme'
import React from 'react'

it('matches the last snapshot', () => {
  const props = {
    zomes: [
      {name: 'zome one'},
      {name: 'zome two'}
    ],
    callZome: name => () => {},    
  }  
  const wrapper = shallow(<ZomeList {...props} />)
  expect(wrapper).toMatchSnapshot()
})
