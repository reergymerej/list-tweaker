const removeByIndex = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ]
}

const getIndex = (list, id) => {
  return list.findIndex(item => item.id === id)
}

export const remove = (list, id) => {
  const index = getIndex(list, id)
  return index > -1
    ? removeByIndex(list, index)
    : list
}

export default {
  remove,
}
