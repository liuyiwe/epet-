/**
 * Created by Administrator on 2017/9/9.
 */
import Mock from 'mockjs'
//品牌
import brandData from './brand.json'


//分类
import sortsData from './sorts.json'
import recommend from './为您推荐.json'
import mainFoods from './狗狗主粮.json'
import snacks from './狗狗零食.json'
import dailyUse from './狗狗生活.json'
import toy from './狗狗玩具.json'
import care from './狗狗保健.json'
import medical from './狗狗医疗.json'
import traction from './狗狗牵引.json'
import hairdressing from './狗狗美容.json'
import clean from './狗狗清洁.json'
import shampoo from './狗狗香波.json'
import rim from './狗狗周边.json'
import customization from './狗狗服饰.json'




//分类的路由
Mock.mock('/api2/sortsData', {code: 0, sortsData: sortsData})
Mock.mock('/api2/brandData', {code: 0, brandData: brandData})

Mock.mock('/api2/recommend', {code: 0, recommend: recommend})
Mock.mock('/api2/mainFoods', {code: 0, mainFoods: mainFoods})
Mock.mock('/api2/snacks', {code: 0, snacks: snacks})
Mock.mock('/api2/dailyUse', {code: 0, dailyUse: dailyUse})
Mock.mock('/api2/toy', {code: 0, toy: toy})
Mock.mock('/api2/care', {code: 0, care: care})
Mock.mock('/api2/medical', {code: 0, medical: medical})
Mock.mock('/api2/traction', {code: 0, traction: traction})
Mock.mock('/api2/hairdressing', {code: 0, hairdressing: hairdressing})
Mock.mock('/api2/clean', {code: 0, clean: clean})
Mock.mock('/api2/shampoo', {code: 0, shampoo: shampoo})
Mock.mock('/api2/rim', {code: 0, rim: rim})
Mock.mock('/api2/customization', {code: 0, customization: customization})


