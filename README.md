# vite构建 pet 项目
- 主分支： master




### 解决 env 配置读取的问题
1.添加 `vite-env.d.ts` 文件
```bash
/// <reference types="vite/client" />
```

2.在 `tsconfig.json` 文件内的 `include` 数组内添加 `vite-env.d.ts`

3.env 配置书写前缀: `VITE-`
```bash
VITE-APP-TITLE = XXXX
```

4.env 配置读取方式:
```
const title = import.meta.env.VITE-APP-TITLE
```

5.注意 `vite.config.ts` 内不能直接 访问`env` 的配置信息， 需要使用 vite 提供的 `loadEnv`
```bash
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const CWD = process.cwd()
const root: string = CWD

// 环境变量
const BASE_ENV_CONFIG = loadEnv('', CWD)
const DEV_ENV_CONFIG = loadEnv('development', CWD)
const PROD_ENV_CONFIG = loadEnv('production', CWD)

export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 取到-配置的环境变量
  const { VITE_BASE_URL, VITE_DROP_CONSOLE, VITE_LEGACY} = loadEnv(mode, CWD)

  const isBuild = command === 'build';

  return {
    base: ".",
    ...
  }
}
```

6.关于vite.config的配置信息通过 `script指令` 传入会合理些, 如: `--mode developent/production`、 `--host`、 `--port`





### 样式穿透新写法
@vue-compiler-sfc 样式穿透 `>>>`、`/deep/`、`::v-deep` 换成了 `:depp(<要穿透的样式>)`
```bash
// 修改下 element的样式,其中 .title 是指定的某些class的 .el-form-item__label
.form:deep(.title .el-form-item__label) {
  color: green;
}
```






### 其他
