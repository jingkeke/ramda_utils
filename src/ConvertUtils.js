/**
 * Created by Jzy on 2019/10/14 15
 */
// 用法  getBase64(info.file.originFileObj, imageUrl => {})

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
