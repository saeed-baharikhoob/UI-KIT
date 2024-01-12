import Provider from "../../Theme/Provider";
import React from "react";
import {Spinner} from "./Spinner";
import {Linear} from "./Linear";
type LoadingProps ={
    height?:number,
    width ?: number,
    fontSize ?: number,
    fontColor ?: string,
    type: 'spinner'|'linear',
    spinnerColors ?: string[],
    linearType?: 'determinate' | 'indeterminate',
    linearCornerType: 'round' | 'nonRound',
    linearBackgroundColor?: string,
    linearProgressColor?: string,
    progress ?: number,
    showPercent?:boolean
}
export const Loading = ({height,width,type,spinnerColors,linearType,showPercent,linearCornerType,progress,linearBackgroundColor,linearProgressColor,fontSize,fontColor}:LoadingProps) => {
    let content = <div></div>
    if(type === 'spinner')
        content =   <Spinner colors={spinnerColors} height={height} width={width} />
    if(type === 'linear' && linearType)
        content =   <Linear fontSize={fontSize} fontColor={fontColor} cornerType={linearCornerType} showPercent={showPercent} type={linearType} progress={progress}  height={height} backgroundColor={linearBackgroundColor} progressColor={linearProgressColor}/>
    return (
        <Provider>
            {content}
        </Provider>
    )
}
Loading.defaultProps = {

    type:'spinner',
    linearType:'indeterminate',
    linearCornerType : 'round',
    spinnerColors :['#4285F4','#DE3E35','#F7C223','#1B9A59','#4285F4']
}