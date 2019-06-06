import React, { useState } from 'react'
import ZomeFunction from '../ZomeFunction'
import ExpandButton from '../ExpandButton'
import { isEmpty } from 'lodash/fp'

export default function Zome ({ zome, callZome, expanded: expandedProp }) {
  const { name, description, fn_declarations } = zome
  const callZomeFunc = callZome(zome.name)  

  const [expanded, setExpanded] = useState(expandedProp || sessionStorage.getItem(`zome:${name}`))
  const setExpandedSession = value => {
    setExpanded(value)
    sessionStorage.setItem(`zome:${name}`, value)
  }
  const toggleExpanded = () => setExpandedSession(!expanded)  

  return <div className='zome'>
    <div onClick={toggleExpanded} className='clickable-div'>
      <div className='zome-name'>
        {name}
        <ExpandButton expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
      {expanded && <div className='zome-description'>{description}</div>}
    </div>
    {expanded && <div className='zome-functions'>
      <div className='zome-functions-header'>Functions</div>
      {isEmpty(fn_declarations) && <div className='zome-functions-empty-state'>
        No public functions exposed in zome.
      </div>}
      {fn_declarations.map(fnDeclaration => 
      <ZomeFunction         
        fnDeclaration={fnDeclaration} 
        callZomeFunc={callZomeFunc} 
        zomeName={name}
        key={fnDeclaration.name} />)}
    </div>}
  </div>
}