import React, { useState, useEffect } from 'react'
import './App.css'
import useHolochainConnection from '../utils/useHolochainConnection'
import { name, description, zomes } from '../utils/parsedDNA'
import ZomeList from '../ZomeList'
import Results from '../Results'

export default function App() {
  const callZomeRef = useHolochainConnection(process.env.REACT_APP_ZOME_WEBSOCKET_URL)
  const [instanceId, setInstanceId] = useState(sessionStorage.getItem('instanceId') || "")
  const storedHistory = sessionStorage.getItem('history')    
  const [history, setHistory] = useState((storedHistory && JSON.parse(storedHistory)) || [])  

  const setInstanceIdSession = value => {
    sessionStorage.setItem('instanceId', value)
    setInstanceId(value)
  } 

  useEffect(() => {
    document.title = `Zome Explorer - ${name}`
  })

  const callZome = zomeName => funcName => async params => {
    const result = await callZomeRef.current(instanceId, zomeName, funcName)(params)
    const callRecord = {
      path: `${instanceId}/${zomeName}/${funcName}`,
      params,
      result
    }
    const newHistory = [callRecord].concat(history)
    setHistory(newHistory)
    sessionStorage.setItem('history', JSON.stringify(newHistory))
    return callRecord
  }

  return (
    <div className='app'>
      <div className='column-wrapper'>
        <div className='column'>
          <div>
            <div className='dna-name'>{name}</div>
            <div className='dna-description'>{description}</div>      
            <div>
              <label className='input-label'>Instance Id</label>
              <input value={instanceId} onChange={({ target: { value }}) => setInstanceIdSession(value)} />
            </div>
            <ZomeList callZome={callZome} zomes={zomes} />
          </div>
        </div>
        <div className='separator' />
        <div className='column'>
          <Results history={history} />
        </div>
      </div>
    </div>
  )
}
