import React, { useState } from 'react'
import ZomeFunction from '../ZomeFunction'
import ExpandButton from '../ExpandButton'

export default function Zome ({ zome, callZome }) {
  const { name, description, fn_declarations } = zome
  const callZomeFunc = callZome(zome.name)  

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)  

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
      {fn_declarations.map(fnDeclaration => 
      <ZomeFunction         
        fnDeclaration={fnDeclaration} 
        callZomeFunc={callZomeFunc} 
        zomeName={name}
        key={fnDeclaration.name} />)}
    </div>}
  </div>
}