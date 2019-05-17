import React from 'react'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'

export default function ExpandButton ({ expanded, toggleExpanded }) {
  return <div className='expand-button' onClick={toggleExpanded}>
    {!expanded && <FiChevronRight className='expand-button-icon' />}
    {expanded && <FiChevronDown className='expand-button-icon' />}
  </div>
}