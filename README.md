# ramda_utils
[ramda函数式编程库](https://adispring.coding.me/2017/10/21/What-Function-Should-I-Use/) use summary persionally,and make it easy to use in diffent project.


### use
``` js
import {ArrayUtils } from 'ramda_util/lib'
const result = ArrayUtils.mergeWith([1,2,3],[2,3,4])
console.log(` ${JSON.stringify(result,null,4)}`)
```
### 自动化测试 
参考 [jest][jesto]

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
[npmPub]:https://www.jingzy.top/2019/06/25/npm_publish/
