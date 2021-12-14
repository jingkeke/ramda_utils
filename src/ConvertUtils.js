/**
 * Created by Jzy on 2019/10/14 15
 */
// 用法  getBase64(info.file.originFileObj, imageUrl => {})

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}




//https://stackoverflow.com/questions/14525178/is-there-any-native-function-to-convert-json-to-url-parameters
/**
 * json转get 请求参数
 * @param jsonObj {'foo': 'hi there', 'bar': '???'};
 */
export function json2URLSearchParams(jsonObj) {
  // const url = Object.keys(jsonObj).map(function(k) {
  //   return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  // }).join('&')

  // 2019 update: there's now a built-in object URLSearchParams for this type of thing:

  const u = new URLSearchParams(jsonObj).toString();
  return u
}

