import React, { useState } from 'react'
import ExpandButton from '../ExpandButton'
import CallRecord from '../CallRecord'

export default function ZomeFunction ({ fnDeclaration, callZomeFunc, zomeName }) {
  const defaultParams = 
    `{\n${fnDeclaration.inputs.reduce((acc, { name }) => acc + `  "${name}": "",\n`, '')}}`
  const [params, setParams] = useState(defaultParams)
  const { name } = fnDeclaration  

  const [callRecord, setCallRecord] = useState()
  const call = async () => setCallRecord(await callZomeFunc(name)(JSON.parse(params)))

  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded(!expanded)


  return <div className='zome-function'>
    <div className='zome-function-header clickable-div' onClick={toggleExpanded}>
      <div className='function-name'>
        {name}
        <ExpandButton expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
      {expanded && <div className='zome-function-signature'>
        <div className='zome-function-signature-label'>Inputs</div>
        {fnDeclaration.inputs.map(({ name, type }) => <div className='zome-function-signature-row' key={name}>
          {name}: {type}
        </div>)}
        <div className='zome-function-signature-label'>Outputs</div>
        {fnDeclaration.outputs.map(({ name, type }) => <div className='zome-function-signature-row' key={name}>
          {name}: {type}
        </div>)}
      </div>}
    </div>
    {expanded && <TabableEditor id={`editor-${zomeName}-${name}`} value={params} onChange={({ target: { value } }) => setParams(value)} />}
    {expanded && <button className='call-button' onClick={call}>Call</button>}
    {callRecord && <CallRecord callRecord={callRecord} />}
  </div>
}

export function TabableEditor ({ id, value, onChange }) {
  const onKeyDown = e => {
    if (e.keyCode === 9) {
      e.preventDefault()      
      insertAtCaret(id, '  ')
    }
  }

  return <textarea
    id={id}
    rows={15} 
    cols={50} 
    value={value}
    onChange={onChange} 
    onKeyDown={onKeyDown} />
}

function insertAtCaret(areaId, text) {
  var txtarea = document.getElementById(areaId);
  var scrollPos = txtarea.scrollTop;
  var caretPos = txtarea.selectionStart;

  var front = (txtarea.value).substring(0, caretPos);
  var back = (txtarea.value).substring(txtarea.selectionEnd, txtarea.value.length);
  txtarea.value = front + text + back;
  caretPos = caretPos + text.length;
  txtarea.selectionStart = caretPos;
  txtarea.selectionEnd = caretPos;
  txtarea.focus();
  txtarea.scrollTop = scrollPos;
}