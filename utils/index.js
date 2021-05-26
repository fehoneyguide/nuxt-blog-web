import { Message } from 'element-ui'
export const constant = {
  text: '10000',
}

let messageInstance = null
export function mainMessage(options) {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
const arr = ['success', 'warning', 'info', 'error']
arr.forEach(function (type) {
  mainMessage[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options,
      }
    }
    options.type = type
    options.duration = type === 'success' ? 1500 : 3000
    return mainMessage(options)
  }
})
