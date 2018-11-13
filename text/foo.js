// var msg = "你好";

var people = function(name, sex, age){
    this.name = name;
    this.sex = sex;
    this.age = age;
}

people.prototype = {
    sayhello: function(){
        console.log(this.name + this.sex + this.age);
    }
}

// 在引用文件中直接引用
// exports.msg = msg;

// 这种方式暴露可直接在引用文件中 new 出来
module.exports = people;