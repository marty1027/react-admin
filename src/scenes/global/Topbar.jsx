import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorsMode = useContext(colorModeContext);

    return ( 
        <Box display="flex" justifyContent="space-between" p={2}>
         {/* Search Bar*/}

         <Box display="flex" backgroundColor={colors.primary[400]}></Box>
         <IconeButton></IconeButton>
        </Box>
    )
}

export default Topbar;