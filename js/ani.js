/**
 * Created by Administrator on 2019/2/2.
 */
/*扉页*/
var outInner=document.getElementById("outInner");
var outTop=document.getElementById("outTop");
var outHide=document.getElementById("outHide");
var browserW=document.documentElement.clientWidth;
var browserH=document.documentElement.clientHeight;
var outBox=document.getElementById("outBox");
var mainBox=document.getElementById("main");
outInner.onclick=function () {
    outTop.style.transform="rotateX(180deg)";
    outTop.style.zIndex="1";
    var i=0;
    var topTime=setInterval(function () {
        if (i==1){
            outHide.style.transform="translateY(-100%)";
        }
        if (i==3){
            outHide.style.zIndex="9999";
            outHide.style.transform="translateY(0)";
        }
        if (i==8){
            outInner.style.animation="rotateS 3s";
        }
        if (i==14){
            outBox.remove();
            mainBox.style.display="block";
            clearInterval(topTime);
        }
        i++;
    },300)
};
