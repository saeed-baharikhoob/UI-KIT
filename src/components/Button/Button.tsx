import styled from '@emotion/styled';
import Provider from "../../Theme/Provider";
import React from 'react';
import {css} from "@emotion/react";
import {colorTypes, buttonTypes} from './utils'
import {Loading} from "../Loading/Loading";

type propsType = {
    children: string | JSX.Element | JSX.Element[],
    variant: 'outlined' | 'contained' | 'text',
    buttonType: 'primary' | 'warning' | 'error' | 'success',
    startLoading: boolean,
    endLoading: boolean,
    loadingType: 'spinner' | 'linear',
    linearBackgroundColor?: string,
    linearProgressColor?: string,
    spinnerColors ?: string[],


}
type ButtonWrapperProps = {
    buttonType: 'primary' | 'warning' | 'error' | 'success',
    variant: 'outlined' | 'contained' | 'text'
}

const getColor = (colorType: colorTypes, props: any) => {
    let color = ''
    if (props.buttonType === buttonTypes.primary) {
        if (colorType === colorTypes.normal) color = props.theme.colors.primary
        if (colorType === colorTypes.light) color = props.theme.colors.primaryLight
        if (colorType === colorTypes.dark) color = props.theme.colors.primaryDark
    }
    if (props.buttonType === buttonTypes.warning) {
        if (colorType === colorTypes.normal) color = props.theme.colors.warning
        if (colorType === colorTypes.light) color = props.theme.colors.warningLight
        if (colorType === colorTypes.dark) color = props.theme.colors.warningDark
    }
    if (props.buttonType === buttonTypes.error) {
        if (colorType === colorTypes.normal) color = props.theme.colors.error
        if (colorType === colorTypes.light) color = props.theme.colors.errorLight
        if (colorType === colorTypes.dark) color = props.theme.colors.errorDark
    }
    if (props.buttonType === buttonTypes.success) {
        if (colorType === colorTypes.normal) color = props.theme.colors.success
        if (colorType === colorTypes.light) color = props.theme.colors.successLight
        if (colorType === colorTypes.dark) color = props.theme.colors.successDark
    }

    return color
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => getColor(colorTypes.normal, props)};
  color: ${props => props.theme.colors.text};
  border-radius: 12px;
 
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => getColor(colorTypes.light, props)};
  }

  &:active {
    background-color: ${(props) => getColor(colorTypes.dark, props)};
  }

  ${(props) => props.variant === 'outlined' && css`
    background-color: transparent;
    border: 1px solid ${props.theme.colors.primary};
    color: ${getColor(colorTypes.normal, props)};

    &:hover {
      color: ${props.theme.colors.text};
    }
  `};
  ${(props) => props.variant === 'text' && css`
    background-color: transparent;
    border: transparent;
    color: ${getColor(colorTypes.normal, props)};

    &:hover {
      background-color: transparent;
      color: ${getColor(colorTypes.light, props)};
    }
  `};
`;
const ColumnRight = styled.div`
  flex: 33.33%;
  display: flex;
  align-items: center;
  justify-content: start;
`
const ColumnLeft = styled.div`
  flex: 33.33%;
  display: flex;
  align-items: center;
  justify-content: end;
`
const ColumnCenter = styled.div`
  flex: 33.33%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`
const LinearWrapper = styled.div`
  padding: 10px;
  
`
const Label = styled.div`
  display: flex;
  font-size: 15px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  user-select: none;


`;

export const Button = ({children, variant, buttonType, startLoading, endLoading, loadingType,spinnerColors,linearProgressColor,   linearBackgroundColor}: propsType) => {
    let content = <></>
    if (loadingType === 'spinner')
        content = <SpinnerWrapper>
            <ColumnRight> {startLoading && (<Loading spinnerColors={spinnerColors}/>)}</ColumnRight>
            <ColumnCenter> <Label> {children}</Label></ColumnCenter>
            <ColumnLeft>   {endLoading && (<Loading spinnerColors={spinnerColors}/>)}</ColumnLeft></SpinnerWrapper>
    if (loadingType === 'linear')
        content=
            <LinearWrapper> <Label> {children}</Label>
          <Loading linearProgressColor={linearProgressColor} linearBackgroundColor={linearBackgroundColor} type={'linear'} linearType={'indeterminate'} linearCornerType={'nonRound'}/></LinearWrapper>


    return (
        <Provider>
            <ButtonWrapper variant={variant} buttonType={buttonType}>
                {content}
            </ButtonWrapper>
        </Provider>
    )
}
Button.defaultProps = {
    variant: 'contained',
    buttonType: 'primary',
    loadingType: 'spinner',
    startLoading: false,
    endLoading: false,
}