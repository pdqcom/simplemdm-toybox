import {DataGrid} from "@mui/x-data-grid";
import {styled} from "@mui/material";

const StyledDataGrid = styled(DataGrid)(({theme}) => ({ 'background-color': theme.palette.background.paper }))

export default StyledDataGrid;