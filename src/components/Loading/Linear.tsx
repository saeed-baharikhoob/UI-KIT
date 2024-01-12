import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import Provider from "../../Theme/Provider";

const indeterminateFirstDuration = '1.5s';
const indeterminateSecondDuration = '1.5s';
const indeterminateTimingFunction = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
type LinearActivityProps = {
    height: number,
    cornerType: 'round' | 'nonRound',
    backgroundColor: string
}
const LinearActivity = styled.div<LinearActivityProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => (props.cornerType === 'round') ? 16 : 0}px;
`;

type DeterminateProps = {
    widthPercentage: number,
    progressColor: string
}

const Determinate = styled.div<DeterminateProps>`
  position: relative;
  max-width: 100%;
  height: 100%;
  width: ${(props) => props.widthPercentage}%;
  background-color: ${(props) => props.progressColor};
  transition: width 500ms ease-out 1s;
  -webkit-transition: width 500ms ease-out 1s;
  -moz-transition: width 500ms ease-out 1s;
  -o-transition: width 500ms ease-out 1s;

`;

const indeterminateFirstKeyframes = keyframes`
  0% {
    left: -100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;

const indeterminateSecondKeyframes = keyframes`
  0% {
    left: -150%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 10%;
  }
`;

type IndeterminateProps = {
    progressColor: string
}
const Indeterminate = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const IndeterminateBefore = styled.div<IndeterminateProps>`
  position: absolute;
  content: '';
  height: 100%;
  background-color: ${(props) => props.progressColor};
  animation: ${indeterminateFirstKeyframes} ${indeterminateFirstDuration} infinite ${indeterminateTimingFunction};
`;

const IndeterminateAfter = styled.div<IndeterminateProps>`
  position: absolute;
  content: '';
  height: 100%;
  background-color: ${(props) => props.progressColor};
  opacity: 0.65;
  animation: ${indeterminateSecondKeyframes} ${indeterminateSecondDuration} infinite ${indeterminateTimingFunction};
`;
type PercentSpanProps = {
    fontSize : number
    fontColor : string
}
const PercentSpan = styled.span<PercentSpanProps>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
`

interface ProgressProps {
    height?: number,
    type: 'determinate' | 'indeterminate',
    progress?: number,
    backgroundColor?: string,
    progressColor?: string,
    fontColor?: string,
    cornerType: 'round' | 'nonRound'
    showPercent?: boolean,
    fontSize?: number
}

export const Linear: React.FC<ProgressProps> = ({
                                                    cornerType,
                                                    height = 4,
                                                    type,
                                                    progress = 0,
                                                    backgroundColor = '#B3E5FC',
                                                    progressColor = '#4FC3F7',
                                                    fontColor = '#ffffff',
                                                    showPercent = false,
                                                    fontSize = 14

                                                }) => {

    if (type === 'determinate') {
        return <LinearActivity backgroundColor={backgroundColor} cornerType={cornerType}
                               height={height}> {showPercent && (<PercentSpan fontColor={fontColor} fontSize={fontSize}>{progress}%</PercentSpan>)} <Determinate
            progressColor={progressColor} widthPercentage={progress}/></LinearActivity>;
    } else {
        return (
            <Provider>
                <LinearActivity backgroundColor={backgroundColor} cornerType={cornerType} height={height}>
                    <Indeterminate>
                        <IndeterminateBefore progressColor={progressColor}/>
                        <IndeterminateAfter progressColor={progressColor}/>
                    </Indeterminate>
                </LinearActivity>
            </Provider>
        );
    }
};
