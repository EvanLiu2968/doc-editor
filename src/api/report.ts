import { request } from '@/utils/service'

// 获取学校列表
export function getSchoolList() {
  return request({
    url: '/formatAction/getSchool.do',
    method: 'get'
  })
}
