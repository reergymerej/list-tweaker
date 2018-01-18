const removeByIndex = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ]
}

const replaceByIndex = (list, index, newItem) => {
  return [
    ...list.slice(0, index),
    newItem,
    ...list.slice(index + 1),
  ]
}

const updateByIndex = (list, index, newItem) => {
  const oldItem = list[index]
  const mergedItem = {
    ...oldItem,
    ...newItem,
  }
  return replaceByIndex(list, index, mergedItem)
}

const getIndex = (list, needle) => {
  const index = list.indexOf(needle)
  return index === -1
    ? list.findIndex(item => item.id === needle.id)
    : index
}

export const remove = (list, itemOrId) => {
  const index = getIndex(list, itemOrId)
  return index > -1
    ? removeByIndex(list, index)
    : list
}

export const replace = (list, item) => {
  if (!item) {
    throw new Error('You are missing the item in your call to `replace`.')
  }
  const index = getIndex(list, item)
  return index > -1
    ? replaceByIndex(list, index, item)
    : (() => {
      throw new Error(`item with id "${item.id}" not found in list`)
    })()
}

export const update = (list, item) => {
  if (!item) {
    throw new Error('You are missing the item in your call to `update`.')
  }
  const index = getIndex(list, item)
  return index > -1
    ? updateByIndex(list, index, item)
    : (() => {
      throw new Error(`item with id "${item.id}" not found in list`)
    })()
}

export default {
  remove,
  replace,
  update,
}
