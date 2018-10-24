import fs from 'fs'
import path from 'path'

/**
 * 读取文件路径
 * @param  {String} filePath 文件绝对路径
 * @param  {RegExp} RE 需要匹配的文件正则
 * @param  {Function} fn 匹配到的正则的回调
 * @param  {Boolean} deep 是否深度匹配
 * @param  {Function} customFilter 自定义过滤器
 */

/* 判断一个路径是不是一个文件 */
const isDirectory = (currentPath) => fs.lstatSync(currentPath).isDirectory();

function readFilePath(options = {}){
  const { filePath, RE, fn, deep = false, customFilter } = options;
  fs.readdirSync(filePath)
    .filter(name => {
      let currentPath = path.join(filePath,name);
      let check = isDirectory(currentPath) // 文件夹目录 不需要进行测验
                  ? true
                  : RE ? RE.test(name) : true;
      return check  // 进行自定义文件过滤
             ? customFilter && customFilter(currentPath,name)
             : false;
    })
    .forEach((tagetPath) => {
      let currentPath = path.join(filePath,tagetPath),
          isDir = isDirectory(currentPath);
      if(isDir && deep){
        readFilePath({filePath : currentPath,RE,fn,deep,customFilter});
      }else if(!isDir) {
        fn && fn(currentPath);
      }
    })
}


export { readFilePath }
