# ramda_utils
[ramda函数式编程库](https://adispring.coding.me/2017/10/21/What-Function-Should-I-Use/) use summary persionally,and make it easy to use in diffent project.


### use
``` js
import {ArrayUtils } from 'ramda_util/lib'
const result = ArrayUtils.mergeWith([1,2,3],[2,3,4])
console.log(` ${JSON.stringify(result,null,4)}`)

// 发布文件改成   "files": [ "lib", "src" ],后打包文件包括src,也可以想下面这样引用了.

import {  ArrayUtils} from 'ramda_util'
const aa = [{ name: '1' }, { name: '2' }, { name: '4' }, { name: '4' }]
console.log(`uniqBy: ${JSON.stringify(ArrayUtils.uniqBy('name', aa),null,4)}`)

```
### 自动化测试 
参考 [jest][jesto]
```
yarn test
# 指定文件
yarn test  common.test.js
```
### 发布 
具体写在我的[blog][npmPub] 如果访问不了估计是我做了修改,然后路径变了.....
```bash
#修改代码和readme.md后,执行下面命令就不用手工改版本号了.
npm  version patch
# 发布
npm publish
```

- 技巧

[jesto]:https://jestjs.io/docs/zh-Hans/24.6/getting-started
[npmPub]:https://www.jingzy.top/2019/07/15/npm_publish/

- 支持 "@babel/plugin-proposal-optional-chaining"
 ```
  # 
  yarn add "@babel/plugin-proposal-optional-chaining"

  # .babelrc       
  "plugins": ["@babel/plugin-proposal-optional-chaining"],

 ```
