import React, { useState } from 'react'

export default function ZomeFunction ({ fnDeclaration, callZomeFunc }) {
  const [params, setParams] = useState('')
  const { name } = fnDeclaration
  const call = () => callZomeFunc(name)(params)

  return <div className='zome-function'>
    <div className='function-name'>{name}</div>
    <textarea rows={10} cols={20} onChange={({ target: { value } }) => setParams(value)} />
    <button onClick={call}>Call</button>
  </div>
}