/**
 * Created by hp on 2017/11/6.
 */
import Mock from 'mockjs'
import data from './first.json'

// 映射路由
Mock.mock('/api/index', {
  code: 'succeed',
  data: data.datas
})
