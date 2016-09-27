// 引入fs文件处理模块
var fs = require("fs");

// 测试用的HTML页文件夹地址和文件名称
var src="html" ,build="build";

var fdc_web = {
    uc_url : "http://test.uc.fdc.com.cn",
    img3_domain : "http://img3.fdc.com.cn",
    home : 'http://www.fdc.com.cn',
    house : 'http://house.fdc.com.cn'
  }

// 遍历所有文件
fs.readdir(src,function(err,files){

  files.forEach(function(filename){
     // 因此，我们依葫芦画瓢就可以了：
    fs.readFile(src+"/"+filename, {
      // 需要指定编码方式，否则返回原生buffer
      encoding: 'utf8'
    }, function(err, data) {
     
      if(err) {
        console.log(err);
        return;
      }
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
