import React, { useState } from 'react'
import CallRecord from '../CallRecord'

export default function Results ({ history }) {
  const [filter, setFilter] = useState('')
  const filteredRecords = history.filter(callRecord => JSON.stringify(callRecord).indexOf(filter) >= 0)

return <div className='results'>
    <div>
      <label className='input-label'>Filter</label>
      <input value={filter} onChange={({ target: { value }}) => setFilter(value)} />
    </div>
    {filteredRecords.map((callRecord, i) => <CallRecord callRecord={callRecord} key={i} />)}
  </div>
}