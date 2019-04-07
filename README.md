# ramda_utils

[ramda 函数式编程库](https://adispring.coding.me/2017/10/21/What-Function-Should-I-Use/) use summary persionally,and make it easy to use in diffent project.

### publish

```bash

npm run republish
npm publish

npm version patch # 修改代码和readme.md后,就不用手工改版本号
```

### use

```js
import { ArrayUtils } from 'ramda_util/lib'
const result = ArrayUtils.mergeWith([1, 2, 3], [2, 3, 4])
console.log(` ${JSON.stringify(result, null, 4)}`)
```
