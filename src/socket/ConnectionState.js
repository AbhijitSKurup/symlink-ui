
export const socketMethods = {
  onConnect : () => {
      console.log('connected')
    },
  onDisconnect : () => {
      console.log('disconnected')
    },
  onMessage : (value) => {
      console.log({value})
    }
}