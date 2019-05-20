import ExpandButton from './ExpandButton'
import { shallow } from 'enzyme'
import React from 'react'

it('matches the last snapshot', () => {
  const wrapper = shallow(<ExpandButton toggleExpanded={() => {}} />)
  expect(wrapper).toMatchSnapshot()
})

it('matches the last snapshot when expanded', () => {
  const wrapper = shallow(<ExpandButton toggleExpanded={() => {}} expanded />)
  expect(wrapper).toMatchSnapshot()
})
