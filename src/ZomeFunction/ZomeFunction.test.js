import ZomeFunction, { getDefaultParams, TabableEditor } from './ZomeFunction'
import { shallow } from 'enzyme'
import React from 'react'

const fnDeclaration = {
  name: 'the function',
  inputs: [
    {
      name: 'input-one',
      type: 'String'
    },
    {
      name: 'input-two',
      type: 'bool'
    },
    {
      name: 'input-three',
      type: 'Vec<String>'
    },
    {
      name: 'input-four',
      type: 'CommentData'
    },
    {
      name: 'input-five',
      type: 'HashString'
    },
    {
      name: 'input-six',
      type: 'Address'
    },
    {
      name: 'input-six',
      type: 'Iso8601'
    },     
  ]
}

describe('getDefaultParams', () => {
  expect(getDefaultParams(fnDeclaration)).toMatchSnapshot()
})


describe('ZomeFunction', () => {
  it('matches the last snapshot', () => {
    const props = {
      fnDeclaration,
      callZomeFunc: name => () => {},
      zomeName: 'the zome'
    }  
    const wrapper = shallow(<ZomeFunction {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('TabableEditor', () => {
  it('matches the last snapshot', () => {
    const props = {
      id: 'id',
      value: 'text',
      onChange: () => {}
    }  
    const wrapper = shallow(<TabableEditor {...props} />)
    expect(wrapper).toMatchSnapshot()
  })  
})