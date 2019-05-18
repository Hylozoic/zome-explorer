import React, { useState } from 'react'
import './App.css'
import useHolochainConnection from './utils/useHolochainConnection'
import { name, description, zomes } from './utils/parsedDNA'
import ZomeList from './ZomeList'
import Results from './Results'

export default function App() {
  const callZomeRef = useHolochainConnection()
  const [instanceId, setInstanceId] = useState('hylo-chat')
  const [history, setHistory] = useState([])

  const callZome = zomeName => funcName => async params => {
    const result = await callZomeRef.current(instanceId, zomeName, funcName)(params)
    const callRecord = {
      path: `${instanceId}/${zomeName}/${funcName}`,
      params,
      result
    }
    setHistory([callRecord].concat(history))
  }

  const leftColumn = <div>
    <div className='dna-name'>{name}</div>
    <div className='dna-description'>{description}</div>      
    <div>
      <label className='input-label'>Instance Id</label>
      <input value={instanceId} onChange={({ target: { value }}) => setInstanceId(value)} />
    </div>
    <ZomeList callZome={callZome} zomes={zomes} />
  </div>

  const rightColumn = <Results history={history} />

  return (
    <div className='app'>
      <div className='column-wrapper'>
        <div className='column'>
          {leftColumn}
        </div>
        <div className='separator' />
        <div className='column'>
          {rightColumn}
        </div>
      </div>
    </div>
  )
}
