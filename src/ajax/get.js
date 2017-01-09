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
//项目评级值总和列表
export const getRateList = factory('/getEvaluateAvgList')
//获取项目评级列表
export const getRatePList = factory('/getEvaluateList')
//获取笔记列表
export const getNoteList = factory('/getNoteList')
//获取项目文件
export const getProjectFile = factory('/getProjectFile')
//获取角色列表
export const getRoleList = factory('/getRoleList')
//评级所有历史记录
export const getEvaluateRecordList = factory('/getEvaluateRecordList')
