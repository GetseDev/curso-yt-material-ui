import React from 'react'
import {AppBar, makeStyles, styled, Toolbar, Typography} from "@mui/material";

const useStyle = styled(theme => ({
    offset: theme.mixins.toolbar
}));

export const Navbar = () => {

    const styles = useStyle();

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    Getsemani
                </Typography>
            </Toolbar>
            <div className={styles.styles}></div>
        </AppBar>
    )
}
