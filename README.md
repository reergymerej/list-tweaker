# list-tweaker


Easily modify items in an array.


## remove

```js
import { remove } from 'list-tweaker'
const list = [
  { id: 'a' },
  { id: 'b' },
  { id: 'c' },
]

remove(list, { id: 'b' })

// [
//   { id: 'a' },
//   { id: 'c' },
// ]
```


## replace

```js
import { replace } from 'list-tweaker'

const list = [
  { id: 'a' },
  { id: 'b' },
  { id: 'c' },
]

replace(list, {
  id: 'b',
  suprise: 'clown!',
})

// [
//   { id: 'a' },
//   { id: 'b', suprise: 'clown!' },
//   { id: 'c' },
// ]
```


## update

```js
import { update } from 'list-tweaker'

const list = [{
  id: 'a',
  oldField: 'Kevin Bacon',
  color: 'green',
}]

update(list, {
  id: 'a',
  newField: 'Kevin Costner',
  color: 'chartreuse',
})

// [{
//   id: 'a',
//   oldField: 'Kevin Bacon',
//   color: 'chartreuse',
//   newField: 'Kevin Costner',
// }]
```




---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
