import React from 'react'
import Zome from '../Zome'

export default function ZomeList ({ callZome, zomes }) {
  return <div className='zome-list'>
    {zomes.map(zome => <Zome zome={zome} key={zome.name} callZome={callZome} />)}
  </div>
}