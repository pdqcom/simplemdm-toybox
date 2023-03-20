import {createTheme} from '@mui/material/styles';

declare module "@mui/material/styles/createPalette"  {
    interface Palette {
        background: {
            default: React.CSSProperties["color"],
            primary: React.CSSProperties["color"]
        }
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