import CallRecord from './CallRecord'
import { shallow } from 'enzyme'
import React from 'react'

it('matches the last snapshot', () => {
  const callRecord = {
    path: '/instance/zome/function',
    params: {
      a: "value",
      b: "different value"
    },
    result: {
      "ok": "yup"
    }
  }
  const wrapper = shallow(<CallRecord callRecord={callRecord} />)
  expect(wrapper).toMatchSnapshot()
})
