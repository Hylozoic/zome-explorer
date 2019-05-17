import React, { useState } from 'react'
import ExpandButton from '../ExpandButton'
import JSONInput from 'react-json-editor-ajrm';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

export default function ZomeFunction ({ fnDeclaration, callZomeFunc, zomeName }) {
  const [params, setParams] = useState('')
  const { name } = fnDeclaration
  const call = () => callZomeFunc(name)(params)

  const [expanded, setExpanded] = useState(true)
  const toggleExpanded = () => setExpanded(!expanded)  

  console.log('params', params)

  return <div className='zome-function'>
    <div className='function-name clickable-div' onClick={toggleExpanded}>
      {name}
      <ExpandButton expanded={expanded} toggleExpanded={toggleExpanded} />
    </div>
    {expanded && <TabableEditor id={`editor-${zomeName}-${name}`}value={params} onChange={({ target: { value } }) => setParams(value)} />}
    {expanded && <button className='call-button' onClick={call}>Call</button>}
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