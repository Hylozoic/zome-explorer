import React, { useState } from 'react'
import './App.css'
import useHolochainConnection from './utils/useHolochainConnection'
import { name, description, zomes } from './utils/parsedDNA'
import ZomeList from './ZomeList';

export const submitCall = (callZome, { instanceId, zome, funcName, params }) => {
  return callZome(instanceId, zome, funcName)(JSON.parse(params))
}

function App() {
  const callZomeRef = useHolochainConnection()
  const [instanceId, setInstanceId] = useState('hylo-chat')

  const callZome = (zome, funcName) => callZomeRef.current(instanceId, zome, funcName)

  return (
    <div className="App">
      <div className='dna-name'>{name}</div>
      <div className='dna-description'>{description}</div>      
      <div>
        <label className='instance-id-label'>Instance Id</label>
        <input value={instanceId} onChange={({ target: { value }}) => setInstanceId(value)} />
      </div>
      <ZomeList callZome={callZome} zomes={zomes} />
    </div>
  )
}

export default App;
