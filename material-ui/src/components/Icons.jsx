import React from 'react'
import {Delete} from "@mui/icons-material";
import {Button, IconButton} from "@mui/material";


export const Icons = () => {
    return (
        <div>
            <Delete />
            <Button
                variant="contained"
                color="secondary"
                endIcon={<Delete />}
            >
                Delete
            </Button>

            <IconButton
                aria-label="delete"
            >
                <Delete
                    color="primary"
                />
            </IconButton>
        </div>
    )
}
