<!--  -->
<template>
<div class='goods'>
    <div class="con">
        <div class="left" ref="left">
            <ul>
                <li v-for="item in goods" :key='item.name'>{{item.name}}</li>
               
            </ul>
        </div>
        <div class="right" ref="right">
            <ul>
                <li v-for="item in goods" :key="item.name">
                    <h3>{{item.name}}</h3>
                    <ul class="goodsshow">
                        <li v-for="items in item.foods" :key="items.name">
                        <div class="goodstop">
                            <div class="pic">
                                <img src="../../assets/pdsr.jpg" alt="">
                            </div>
                            <div class="condes">
                                <h4>{{items.name}}</h4>
                                <p>{{items.description}}</p>
                                <p>月售{{items.sellCount}}  好评率{{items.rating}}%</p>
                                <div class="priceNum">
                                    <i>￥{{items.price}}</i>
                                    <div class="addnum">
                                        <div class="reduce"><img src="../../assets/jian.jpg" alt=""></div>
                                        <span>1</span>
                                        <div class="add"><img src="../../assets/add.jpg" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                            
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import BScroll from 'better-scroll'

import axios from 'axios'
export default {
name:'Goods',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
   
goods:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {


},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    axios.get('./js/data.json').then(res=>{
        console.log(res)
        this.goods=res.data.goods
        console.log(this.goods)
 
    })

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    
      
      
   
},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {
    this.scroll=new BScroll(this.$refs.left);  
    this.scroll=new BScroll(this.$refs.right)
    console.log(this.scroll)
}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
html,body{
  height: 100%;
}
#app{
  display: flex;
  height: 100%;
  flex-direction: column;
}
#header{
    height: 163px;
}
.goods{
    display: flex;
    flex: 1;
    overflow-y: auto;
}
.con{
    display: flex;
    width: 100%;
}
.left{
    width: 21%;
    height: 570px;
    overflow-y: auto;
    padding: 0 11px;
    background: #f3f5f7;
    
    
}

.left ul li{
    font-size: 11px;
    height: 55px;
    line-height: 16px;
    border-bottom: 1px solid #e7eaeb;
    display: flex;  
    align-items: center;
}
.right{
    width: 79%;
    height: 590px;  
    overflow-y:auto;
    position: relative;
}
.right ul li h3{
    font-size: 11px;
    color: #93999f;
    background: #f3f5f7;
    line-height: 27px;
    border-left: solid 2px #d9dde1;
}
.goodsshow{
    padding: 0 18px;
}
.goodsshow li{
    padding: 18px 0;
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #f2f3f3;
}
.goodstop{
    display: flex;
}
.condes{
    margin-left: 10px;
    flex: 1;
}
.condes h4{
    font-size: 13px;
    line-height: 19px;
}
.condes p{
    font-size: 11px;
    color: #93999f;
    line-height: 18px;
}
.priceNum {
    display: flex;
    justify-content:space-between;
}
.priceNum i{
    color: red;
    line-height: 20px;
    font-size: 14px;
}
.addnum{
    width: 84px;
    height: 26px;
    position: relative;
}

.addnum .reduce{
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.addnum .add{
    position: absolute;
    top: 0;
    right: 0;   
}
.addnum span{
    width: 33px;
    height: 26px;
    display: block;
    position: absolute;
    left: 26px;
    text-align: center;
    line-height: 26px;
    color: #9fa4a9;
    font-size: 10px;
    display: none;
}



</style>