import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function HeroPage() {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{ height: "100vh" }}
        >
            <Grid item>
                <Button variant="contained" color="primary">
                    Create
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary">
                    Join
                </Button>
            </Grid>
        </Grid>
    );
}

export default HeroPage;