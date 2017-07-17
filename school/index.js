var _class = require('./class');
// _class.add('shunzizhan',['张三','李四']);

exports.add = function(_klasss){
  _klasss.forEach(function(item,index){
    var teacher = item.teacherName;
    var students = item.students;
    _class.add(teacher,students);
  })
}