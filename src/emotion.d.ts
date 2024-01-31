import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string
            primaryLight: string
            primaryDark: string
            error: string
            success: string
            warning: string
            disabled: string
            text: string
            white: string
            black: string
            pagination: string
        }
    }
}
