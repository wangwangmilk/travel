let defaultCity = '天津'
// 使用localStorage时，如果浏览器是隐身模式，会查询不到，阻断程序运行
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {

  city: defaultCity

}
