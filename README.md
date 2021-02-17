# ramda_utils

[ramda 函数式编程库](https://adispring.coding.me/2017/10/21/What-Function-Should-I-Use/) use summary persionally,and make it easy to use in diffent project.

### add info learn

- learn
  my learn another git rep before ,but i move here - functional-javscript
  frontendmasters courses

### use

```js
import { ArrayUtils } from "ramda_util/lib";
const result = ArrayUtils.mergeWith([1, 2, 3], [2, 3, 4]);
console.log(` ${JSON.stringify(result, null, 4)}`);

// 发布文件改成   "files": [ "lib", "src" ],后打包文件包括src,也可以想下面这样引用了.

import { ArrayUtils } from "ramda_util";
const aa = [{ name: "1" }, { name: "2" }, { name: "4" }, { name: "4" }];
console.log(
  `uniqBy: ${JSON.stringify(ArrayUtils.uniqBy("name", aa), null, 4)}`
);
```

### 自动化测试

参考 [jest][jesto]
换了 webos 和 fatherjs 后 jest 有问题 _Cannot use import statement outside a module_
然后现在改成 引用打包之后的 lib 里面的文件测试 ..... 2021 年 2 月 15 日

```
yarn test
# 指定文件
yarn test  common.test.js
```

### 发布

具体写在我的[blog][npmpub] 如果访问不了估计是我做了修改,然后路径变了.....

```bash
#修改代码和readme.md后,执行下面命令就不用手工改版本号了.
npm  version patch
# 预先看要发布哪些文件
npm pack
# 发布
npm publish
```

- 技巧

[jesto]: https://jestjs.io/docs/zh-Hans/24.6/getting-started
[npmpub]: https://www.jingzy.top/2019/07/15/npm_publish/

- 支持 "@babel/plugin-proposal-optional-chaining"

```
 #
 yarn add "@babel/plugin-proposal-optional-chaining"

 # .babelrc
 "plugins": ["@babel/plugin-proposal-optional-chaining"],

```

#### 打包 使用 [fatherjsV2](https://github.com/umijs/father/tree/2.x)

```
yarn add father  -D
npx father build  --esm --cjs
```

#### eslint config

ref [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

- typescript config https://github.com/wesbos/eslint-config-wesbos/issues/68
  npx install-peerdeps --dev eslint-config-wesbos@2.0.0-beta.3
