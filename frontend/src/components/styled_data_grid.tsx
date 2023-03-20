import {DataGrid} from "@mui/x-data-grid";
import {styled} from "@mui/material";

const StyledDataGrid = styled(DataGrid)(({theme}) => ({
    backgroundColor: theme.palette.background.primary,
    height: "500px"
}))

export default StyledDataGrid;