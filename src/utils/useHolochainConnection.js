import { useEffect, useRef } from 'react'
import { connect } from '@holochain/hc-web-client'

export default function useHolochainConnection () {
  var callZomeRef = useRef(() => {})

  useEffect(() => {
    var connection
    async function connectToConductor () {
      connection = await connect("ws://localhost:3400")
      callZomeRef.current = connection.callZome  
    }
    connectToConductor()
    return () => {
      console.log('cleaningup') 
      if (connection && connection.close) {
        console.log('calling connection.close') 
        connection.close()
      } else {
        console.log('not closing connection', connection)
      }
    }
  })

  return callZomeRef
}