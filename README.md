# list-tweaker


CRUD items in an array by id.


## remove

```js
import { remove } from 'list-tweaker'
const list = [
  { id: 'a' },
  { id: 'b' },
  { id: 'c' },
]

// remove by item id
remove(list, 'b')
```

```js
const item = { id: 'b' }
const list = [
  { id: 'a' },
  item,
  { id: 'c' },
]

// remove by passing the item
remove(list, item)
```

## replace

```js
import { replace } from 'list-tweaker'

const list = [
  { id: 'a' },
  { id: 'b' },
  { id: 'c' },
]
const newItem = {
  id: 'b',
  suprise: 'clown!',
}

replace(list, newItem)

// or by id
replace(list, 'b', newItem)
```


## update

```js
const list = [
  { id: 'a' },
  {
    id: 'b',
    oldField: 'Kevin Bacon',
    color: 'green',
  },
  { id: 'c' },
]
const newItem = {
  id: 'b',
  newField: 'Kevin Costner',
  color: 'chartreuse',
}

app.update(list, newItem)
// list[1] changes to
// {
//   id: 'b',
//   oldField: 'Kevin Bacon',
//   color: 'chartreuse',
//   newField: 'Kevin Costner',
// }
```




---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
