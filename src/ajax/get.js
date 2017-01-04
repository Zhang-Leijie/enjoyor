import {getFactory as factory} from './const.js'

//基金列表
export const itemList = factory('/getProjectList')
//基金详情
export const itemDetail = factory('/getProject')
//用户列表
export const getUserList = factory('/getUserList')
//基金列表
export const getFoundationList = factory('/getFoundationList')
//获取用户信息
export const getUser = factory('/getUser')