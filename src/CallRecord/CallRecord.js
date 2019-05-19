import React from 'react'
import JSONPretty from 'react-json-pretty';

const jsonTheme = {
  key: 'color:#80B21C;',
  string: 'color:#C455A6;',
  value: 'color:#C455A6;',
  boolean: 'color:#C455A6;'
}
export default function CallRecord ({ callRecord }) {
  const { path, params, result } = callRecord

return <div className='call-record'>
    <div className='call-record-path'>{path}</div>
    <div className='call-record-title'>Inputs</div>
    <JSONPretty data={params} theme={jsonTheme}/>
    <div className='call-record-title'>Outputs</div>
    <JSONPretty data={result} theme={jsonTheme} />    
  </div>
}