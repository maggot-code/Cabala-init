/*
 * @Author: maggot-code
 * @Date: 2020-12-22 21:56:18
 * @LastEditors: maggot-code
 * @LastEditTime: 2020-12-22 23:02:51
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Temp from '@v/template'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'temp',
    component: Temp
  },
]

const router = new VueRouter({
  routes
})

export default router
