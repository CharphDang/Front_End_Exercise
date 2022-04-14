// 实现一个 post 方法，当我们请求地址 url 为 /user/add 时，
// 请求参数 params 中必传字段为名字 name 和年龄 age，性别 sex 为选填字段，
// 其中除了 age 字段类型为 number，其余字段类型都为 string。
import axios from 'axios'
;(() => {
  interface API {
    '/user/add': {
      name: string
      age: number
      sex?: string
    }
  }
  function post<T extends keyof API>(url: T, params: API[T]) {
    return axios.post(url, params)
  }

  post('/user/del', { name: 'jack Ma', age: 17 })
  // 报错, url 传参错误

  post('/user/add', { name: 'jack Ma' })
  // 报错, 缺少请求参数 age 字段

  post('/user/add', { name: 'jack Ma', age: 17 })
  // 请求成功

  post('/user/add', { name: 'jack Ma', age: 17, sex: 'male' })
  // 请求成功
})()
