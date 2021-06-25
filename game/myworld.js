var createGame =require('voxel-engine');//引入包
var Highlight = require('voxel-highlight')//引入包
var game=createGame(       //以该函数为基础创造世界 
    { 
    generate: function(x,y,z) {   //generate里面的函数为初始的地图创建函数  
    if (y==0){  
        return x*x+z*z <=55*55? 1:0 
        }else if(y==8&&x==0&&z==0){ 
        return 1    
        } 
    },
    // texturePath:'textures/',      //引入纹理包。纹理包里面的图片都可以在voxel-engine包里面找到     
    materials: ['#fff', '#000'],   //添加初始纹理（都是纹理包里面的）
    materialFlatColor: true,
      }
 );
console.log("game" + game);
var createPlayer=require('voxel-player')(game);   //引入包

game.appendTo(document.body);       //获得全屏

var substack=createPlayer('skin/shama.png');  //创建你的小人

substack.possess();      //小人获得移动视角

substack.yaw.position.set(3,30,0);    //小人初始位置
