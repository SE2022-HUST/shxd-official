import React,{useState,useEffect} from "react";
import './SwipeSlide.css'

function useInterval(callback:any,interval:any){//用副作用函数包裹时间间隔函数
  useEffect(()=>{
    const I = setInterval(()=>{
      const start:number = new Date().getTime();
      callback(new Date().getTime() - start)
    },interval);
    //返回intervalID的是一个数字的非零值，用于标识调用创建的计时器setInterval()；可以将此值传递 clearInterval()给以取消间隔。
    return ()=>clearInterval(I);
    //如果你的效果返回一个函数，React 会在需要清理的时候运行它
  },[])
}

function useSlider(N:any,speed=3000){
  const [slider,setSlider] = useState(0);
  useInterval((diff:number)=>{
    setSlider(_ =>Math.floor(diff/speed)%N)
  },300);
  return slider;
}

const images = [
  "swipe1.png",
  "swipe2.png",
  "swipe3.png"
]

export default function SwipeSlide(){
  const slider:number = useSlider(images.length);

  return(
    <div className="stage">
      <div className="pictures" style={
        {
          width:`${images.length * 100}%`,
          transform:`translateX(-${100*slider/images.length}%)`
        }
      }>
        {
          images.map(src=>{
            return<img style={
            {
              width:`${100/images.length}%`
            }
          } key={src} src={require('../../Image/'+src)}/>
          })
        }
      </div>
    </div>
  );
}