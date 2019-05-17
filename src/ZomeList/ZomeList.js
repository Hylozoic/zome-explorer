import React from 'react'
import Zome from '../Zome'

export default function ZomeList ({ callZome, zomes }) {
  return <div className='zome-list'>
    <div className='zome-list-header'>Zomes</div>
    {zomes.map(zome => 
      <Zome 
        zome={zome} 
        callZome={callZome} 
        key={zome.name} />)}
  </div>
}