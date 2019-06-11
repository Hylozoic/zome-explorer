import { useEffect, useRef } from 'react'
import { connect } from '@holochain/hc-web-client'

export default function useHolochainConnection (url) {
  var callZomeRef = useRef(() => {})

  useEffect(() => {
    var connection
    async function connectToConductor () {
      connection = await connect({url, wsClient: {max_reconnects: 0, reconnect_interval: 2500}})

      const successMessage = '🎉 Successfully connected to Holochain!'
      console.log(successMessage)
      connection.ws.on('open', () => console.log(successMessage))

      callZomeRef.current = connection.callZome
    }
    connectToConductor()
    return () => {
      if (connection && connection.close) {
        connection.close()
      }
    }
  })

  return callZomeRef
}