import { Message } from 'element-ui'
export const constant = {
  text: '10000',
}

let messageInstance: any = null
export function mainMessage(options: any) {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
// const arr = ['success', 'warning', 'info', 'error']
// arr.forEach(function (type) {
//   mainMessage[type] = function (options: any) {
//     if (typeof options === 'string') {
//       options = {
//         message: options,
//       }
//     }
//     options.type = type
//     options.duration = type === 'success' ? 1500 : 3000
//     return mainMessage(options)
//   }
// })

export function toToc(data: string[]) {
  const levelStack: string[] = []
  let result: string = ''
  const addStartUL = () => {
    result += '<ul class="catalog-list">'
  }
  const addEndUL = () => {
    result += '</ul>\n'
  }
  const addLI = (index: number, itemText: string) => {
    result +=
      '<li><a name="link" class="toc-link' +
      '-#' +
      index +
      '" href="#' +
      index +
      '">' +
      itemText +
      '</a></li>\n'
  }
  data.forEach(function (item: any, index: number) {
    const itemText: string = item.replace(/<[^>]+>/g, '') // 匹配h标签的文字
    const itemLabel: string = item.match(/<\w+?>/)[0] // 匹配h?标签<h?>
    let levelIndex: number = levelStack.indexOf(itemLabel) // 判断数组里有无<h?>
    // 没有找到相应<h?>标签，则将新增ul、li
    if (levelIndex === -1) {
      levelStack.unshift(itemLabel)
      addStartUL()
      addLI(index, itemText)
    }
    // 找到了相应<h?>标签，并且在栈顶的位置则直接将li放在此ul下
    else if (levelIndex === 0) {
      addLI(index, itemText)
    }
    // 找到了相应<h?>标签，但是不在栈顶位置，需要将之前的所有<h?>出栈并且打上闭合标签，最后新增li
    else {
      while (levelIndex--) {
        levelStack.shift()
        addEndUL()
      }
      addLI(index, itemText)
    }
  })
  // 如果栈中还有<h?>，全部出栈打上闭合标签
  while (levelStack.length) {
    levelStack.shift()
    addEndUL()
  }
  return result
}
