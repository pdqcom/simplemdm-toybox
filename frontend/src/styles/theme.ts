import {createTheme} from '@mui/material/styles';

declare module "@mui/material/styles/createPalette"  {
    interface TypeBackground {
        primary: string
    }    
}

const theme = createTheme({
    palette:  {
        background: {
            default: "#f8fafd",
            primary: "#fff"
        }
    },
})



export default theme