//index.js
//获取应用实例
const app = getApp()

Page({
  
data:{
message:'Hello MINA!',
id:0,
condition:true,
a:1,
b:2,
c:3,
zero: 0,
aa:111,
bb:222,
name:'小贾',
object:{
  key:'Hello'
},
array:['MINA']
},
  
  obj1: {
    a: 1,
    b: 2
  },
  obj2: {
    b: 3,
    c: 4
  },
  a: 5,


  clickMe(){
  this.setData({msg:"你好，世界"})

  },
})



