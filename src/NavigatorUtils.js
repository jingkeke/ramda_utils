/**
 * Created by jingzy on 2017/8/26.
 *
 * 使用
*/

 // 判断是否IE浏览器
 export function isIE() {
  if (!!window.ActiveXObject || 'ActiveXObject' in window) { return true; } else { return false; }
}
