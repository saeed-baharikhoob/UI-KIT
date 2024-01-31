import  React from "react";
import { ThemeProvider} from '@emotion/react'

type props = {
    children:  string | JSX.Element | JSX.Element[]
}
const theme  = {
    colors: {
        primary: '#005FA3',
        primaryLight: '#006EBC',
        primaryDark: '#005898',
        error: '#D01137',
        errorLight: '#E2123C',
        errorDark: '#C9183B',
        success: '#4DA86E',
        successLight: '#56B178',
        successDark: '#50A46F',
        warning: '#FFBE33',
        warningLight: '#FFC342',
        warningDark: '#F8BC3A',
        disabled: '#F7F3F6',
        text: '#FFFAFF',
        black:'#000000',
        white:'#ffffff',
        pagination:'#ef394e'
    }
}
const Provider = ({children}: props) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>


);

export default Provider;
