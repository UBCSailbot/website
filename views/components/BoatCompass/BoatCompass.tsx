import React from "react";
import Image from "next/image";
import { Grid, Paper } from "@mui/material";
import SingleValueLine from "../SingleValueLine/SingleValueLine";

interface BoatCompassProps {
    angle: number;
}

class BoatCompass extends React.Component<BoatCompassProps> {
    render() {
        const { angle } = this.props;

        return (
            <Paper elevation={0}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    width={160}
                    height={160}
                >
                    <Image
                        src="/BoatCompassCircle.png"
                        width={160}
                        height={160}
                        alt="Boat Icon"
                        style={{ transform: this._rotateBoatString(angle) }}
                    />
                </Grid>
            </Paper>
        );
    }

    _rotateBoatString(boatAngle: number) {
        let modifiedAngle = boatAngle + 180
        return `rotate(${modifiedAngle}deg)`;
    }
}

export default BoatCompass;
