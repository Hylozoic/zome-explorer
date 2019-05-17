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
  const [instanceId, setInstanceId] = useState('')
  const [values, setValues] = useState({})
  const setValue = key => ({ target: { value }}) => setValues({...values, [key]: value})

  const callZome = (zome, funcName) => callZomeRef.current(instanceId, zome, funcName)

  return (
    <div className="App">
      <div className='title'>{name}</div>
      <div className='description'>{description}</div>      
      <div>
        <label>Instance Id</label>
        <input onChange={({ target: { value }}) => setInstanceId(value)} />
      </div>
      <ZomeList callZome={callZome} zomes={zomes} />
      <div>
        <label>Instance Id</label>
        <input onChange={setValue('instanceId')} />
      </div>
      <div>
        <label>Zome</label>
        <input onChange={setValue('zome')} />
      </div>
      <div>
        <label>funcName</label>
        <input onChange={setValue('funcName')} />
      </div>            
      <div>
        <label>Params</label>
        <textarea rows={10} cols={20} onChange={setValue('params')}/>
      </div>
      <button onClick={async () => console.log(await submitCall(callZomeRef.current, values))}>Call</button>
    </div>
  );
}

export default App;
