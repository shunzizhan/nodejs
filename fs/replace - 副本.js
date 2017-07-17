// 引入fs文件处理模块
var fs = require("fs");

// 测试用的HTML页文件夹地址和文件名称
var src="html" ,filename = 'replace.html',build="build";

var fdc_web = {
    uc_url : "http://test.uc.fdc.com.cn",
    img3_domain : "http://img3.fdc.com.cn",
    home : 'http://www.fdc.com.cn',
    house : 'http://house.fdc.com.cn'
  }

// var fnImportExample = function(filename) {
//   // 读取HTML页面数据
//   // 使用API文档中的fs.readFile(filename, [options], callback)
//   // 文档中有示例：
//   /*
//   fs.readFile('/etc/passwd', function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   });
//    */
//   // 因此，我们依葫芦画瓢就可以了：
//   fs.readFile( filename, {
//     // 需要指定编码方式，否则返回原生buffer
//     encoding: 'utf8'
//   }, function(err, data) {
   
//     if (err) {
//       console.log(err);
//       return;
//     }
//     // 下面要做的事情就是把
//     // <link rel="import" href="header.html">
//     // 这段HTML替换成href文件中的内容
//     // 可以求助万能的正则
//     // var dataReplace = data.replace(/fdc_web_(\w\_)+/gi, function(matchs, m1) {
//     //   // m1就是匹配的路径地址了
//     //   // 然后就可以读文件了
//     //   var str_url = fdc_web_+"$1";

//     //   return matchs.replace()
//     // });
//     console.log(data);
//     // var dataReplace = data.replace(/[\s\S]{0,}fdc_web_(\w\_)+\/[\s\S]{0,}/gi, fdc_web['$1']);
//     var dataReplace = data;
//     for(var ele in fdc_web){
//       var Reg = new RegExp('fdc_web_'+ele,'g');
//       dataReplace = dataReplace.replace(Reg,fdc_web[ele]);
//     }

//     // 于是生成新的HTML文件
//     // 文档找一找，发现了fs.writeFile(filename, data, [options], callback)
//     fs.writeFile(build+"/"+filename, dataReplace, {
//       encoding: 'utf8'
//     }, function(err) {
//       console.log(filename+">>>>>2222");
//       if (err) throw err;
//       console.log(filename + '生成成功！');
//     });
//   });
// };

// 遍历所有文件
fs.readdir(src,function(err,files){

  files.forEach(function(filename){
     // 因此，我们依葫芦画瓢就可以了：
    fs.readFile(filename, {
      // 需要指定编码方式，否则返回原生buffer
      encoding: 'utf8'
    }, function(err, data) {
     
      if (err) {
        console.log(err);
        return;
      }
      // var dataReplace = data.replace(/[\s\S]{0,}fdc_web_(\w\_)+\/[\s\S]{0,}/gi, fdc_web['$1']);
      var dataReplace = data;
      for(var ele in fdc_web){
        var Reg = new RegExp('fdc_web_'+ele,'g');
        dataReplace = dataReplace.replace(Reg,fdc_web[ele]);
      }
      fs.writeFile(build+"/"+filename, dataReplace, {
        encoding: 'utf8'
      }, function(err) {
        console.log(filename+">>>>>2222");
        if (err) throw err;
        console.log(filename + '生成成功！');
      });
    });
  })
})
