// import $ from 'jquery'
import {postFactory as factory} from './const.js'

export const Item = factory('/saveorupdateProject')
//登录
export const Login = factory('/login')
//注销
export const Logout = factory('/logout')
//评级
export const Rate = factory('/saveorupdateEvaluate')
//新建笔记
export const Note = factory('/saveorupdateNote')
//新建项目文件
export const File = factory('/saveorupdateProjectFile')
//新增用户
export const saveUser = factory('/saveorupdateUser')
//删除草稿箱项目
export const deleteProject = factory('/deleteProject')
//修改密码
export const updatePassword = factory('/updatePassword')