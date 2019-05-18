import React, { useState, useRef } from 'react'


export default function TwoResizableColumns({ leftColumn, rightColumn }) {
  const leftColumnRef = useRef(null)
  const columnWrapperRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const onMouseDownDragBar = () => setIsDragging(true)
  const onMouseUp = () => setIsDragging(false)
  const onMouseMove = e => {
    if (!isDragging) {
      return
    }
    var containerOffsetLeft = columnWrapperRef.current.offsetLeft;
    var pointerRelativeXpos = e.clientX - containerOffsetLeft
    leftColumnRef.current.style.width = (pointerRelativeXpos - 8) + 'px'
    leftColumnRef.current.style.flexGrow = 0;
  }

  return (
    <div className='column-wrapper' onMouseUp={onMouseUp} onMouseMove={onMouseMove} ref={columnWrapperRef}>
      <div className='resizable-box' ref={leftColumnRef}>
        {leftColumn}
      </div>
      <div className='dragbar' onMouseDown={onMouseDownDragBar} />
      <div className='resizable-box'>
        {rightColumn}
      </div>
    </div>
  )
}
