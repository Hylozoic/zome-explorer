import React from 'react'
import ZomeFunction from '../ZomeFunction'

export default function Zome ({ zome, callZome }) {
  console.log('zome', zome)
  const { name, description, fn_declarations } = zome
  console.log('fn_declarations', fn_declarations)  
  const callZomeFunc = funcName => callZome(zome.name, funcName)  
  return <div className='zome'>
    <div className='zome-name'>{name}</div>
    <div className='zome-description'>{description}</div>
    {fn_declarations.map(fnDeclaration => 
      <ZomeFunction fnDeclaration={fnDeclaration} callZomeFunc={callZomeFunc} key={fnDeclaration.name} />)}
  </div>
}