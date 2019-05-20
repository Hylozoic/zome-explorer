import Zome from './Zome'
import { shallow } from 'enzyme'
import React from 'react'

it('matches the last snapshot', () => {
  const props = {
    zome: {
      name: 'some zome',
      description: 'a really great one',
      fn_declarations: [
        {name: 'a function declaration'},
        {name: 'a different function declaration'},        
      ]
    },
    callZome: name => () => {},    
  }  
  const wrapper = shallow(<Zome {...props} />)
  expect(wrapper).toMatchSnapshot()
})
