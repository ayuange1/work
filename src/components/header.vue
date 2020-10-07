<!--  -->
<template>
<div id='header'>
    <div class="wrap">
        <div class="con clean">
            <img src="../assets/logo.jpg" alt="">
            <div class="des">
                <h3><i>品牌</i>粥品香坊（回龙观）</h3>
                <p>蜂鸟转送/38分钟送达</p>
                <p><b>减</b>在线支付满28减5</p>
          </div>
        </div>
        <button class="more">5个  ></button>
    </div>
    <div class="notice">
        <i>公告</i>
        <p> "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。"</p><span class="jian">></span>
    </div>
    <div class="head">
            <ul>
				<router-link tag="li" to="/goods">
					<p>商品</p>
				</router-link>
				<router-link tag="li" to="/comment">			
					<p>评论</p>
				</router-link>
				<router-link tag="li" to="/merchant">	
					<p>商家</p>
				</router-link>
			</ul>
    </div>
</div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

.con img{
    float: left;
    margin-right: 16px;
}
.des{
    float: left;
}
.con h3 i{
    background: red;
    color: #ffffff;
    font-size: 12px;
    margin-right: 5px;
}
.con h3{
    color: #ffffff;
    font-size: 16px;
    line-height: 23px;
}
.con p{
    color: #f1f8fa;
    font-size: 12px;
    line-height: 21px;

}
.con p b{
    color: red;
    background: #ffffff;
    font-size: 12px;
    line-height: 0;
    margin-right: 5px;
}
.wrap{
    background:#635950;
    padding: 24px 11px 17px 24px;
    position: relative;
}
.notice p{
    width: 100%;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    color:#fff;
    line-height: 28px;
    text-indent: 30px;
}
.notice{
    background: #57524f;
    position: relative;
    padding: 0 10px;
}
.notice i{
    color: #394149;
    background: #fff;
    width: 25px;
    height: 15px;
    font-weight: 800;
    position: absolute;
    top: 7px;
}
.more{
    position: absolute;
    top: 70px;
    right: 20px;
    color: #fff;
    background: #4d4239;
    height: 24px;
    width: 48px;
    border-radius: 12px;
    font-size: 12px;
}
.jian{
    position: absolute;
    top: 5px;
    right: 7px;
    color: #fff;
}
.head{ width:100%; height:25px; background: white; border-top:2px #ebe8e3 solid;}
.head ul{ display: flex; text-align: center; height:25px; align-items:center;}
.head ul li{ flex:1; height:20px;}
.head ul li.active{ color: #f03d37;}
.head ul i{ font-size: 20px;}
.head ul p{ font-size: 12px; line-height: 18px;}

</style>