import React from "react";
import {Button, ThemeProvider, Typography} from "@mui/material";
import theme from "../themeConfig.js";
import {Navbar} from "./Navbar.jsx";

export const Global = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <Button variant="contained" color="primary">
                Boton
            </Button>

            <Button variant="contained" color="secondary">
                Boton
            </Button>
            <Typography variant="h1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi assumenda esse inventore nam quis quod, reiciendis? Animi beatae delectus earum est fuga, hic inventore minus nemo omnis temporibus, unde?
            </Typography>
        </ThemeProvider>
    );
}
