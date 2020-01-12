/**
 * 计时类
 */
function Measure(title){
     this.beginTime=null;
     this.endTime=null;
     this.title=title;
}

Measure.prototype.start = function () {
    if(!Measure.enableFlag){
        console.log("禁用")
        return
    }
    this.endTime=null;
    this.beginTime=new Date().getTime();
};

Measure.prototype.stop=function(){
    if(!Measure.enableFlag){
        return
    }
    if(!this.beginTime){
        console.log("还没开始")
        return null;
    }
    this.endTime=new Date().getTime();
    let timeStamp=this.endTime-this.beginTime;
    console.log(this.title+":"+timeStamp+"毫秒");
}
Measure.enableFlag=false;
