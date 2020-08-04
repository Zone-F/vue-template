export default (Vue, options = {}) => {
  const defaultImg =
    "https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png";
  //需要进行监听的图片列表，还没有加载过得
  let listenList = []; //已经加载过得图片缓存列表
  //检测图片是否可以加载，如果可以则进行加载
  const isCanShow = item => {
    var ele = item.ele;
    var src = item.src; //图片距离页面顶部的距离
    var top = ele.getBoundingClientRect().top; //页面可视区域的高度
    var windowHeight = window.innerHight; //top + 10 已经进入了可视区域10像素
    if (top + 10 < window.innerHeight) {
      var image = new Image();
      image.src = src;
      image.onload = function() {
        ele.src = src;
        // imageCatcheList.push(src);
        // listenList.remove(item);
      };
      return true;
    } else {
      return false;
    }
  };
  //添加监听事件scroll
  const onListenScroll = () => {
    window.addEventListener("scroll", function() {
      var length = listenList.length;
      for (let i = 0; i < length; i++) {
        isCanShow(listenList[i]);
      }
    });
  };

  //addListener为Vue指令的具体实现功能函数，我们这里为所有使用v-lazyload的指令的元素添加监听
  //ele 是dom元素，binding是绑定的具体值，
  //例如：<img v-lazyload="imageSrc" > ele是img binding是imageSrc
  const addListener = (ele, binding) => {
    var imageSrc = ele.getAttribute("hasLoad") ? defaultImg : binding.value; //如果已经加载过，则无需重新加载，直接将src赋值
    if (ele.getAttribute("hasLoad")) {
      ele.src = imageSrc;
      return false;
    }
    ele.src = imageSrc;
    // listenList.push({
    //   ele,
    //   src: imageSrc
    // }); //然后开始监听页面scroll事件
    
    // onListenScroll();
  };

  Vue.directive("lazyload", {
    inserted: addListener,
    updated: addListener
  });
};
