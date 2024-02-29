import React from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@mui/material";
import SingleValueLine from "../SingleValueLine/SingleValueLine";
import styles from "./boatcompass.module.css"

interface BoatCompassProps {
    angle: number;
}

class BoatCompass extends React.Component<BoatCompassProps> {
    render() {
        const { angle } = this.props;

        return (
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                width={100}
                height={100}
            >
                <Grid
                    className={styles.top}
                >
                    <Typography
                        align="center"
                        variant="subtitle2"
                    >
                        {angle + 180}
                    </Typography>
                </Grid>
                <Image
                    src="/BoatIconFinal.png"
                    width={80}
                    height={80}
                    alt="Boat Icon"
                    style={{ transform: this._rotateBoatString(angle) }}
                    className={styles.middle}
                />
                <Image
                    src="/NSEWCompass.png"
                    width={110}
                    height={110}
                    alt="Compass Background"
                    className={styles.bottom}
                />
            </Grid>
        );
    }

    _rotateBoatString(boatAngle: number) {
        let modifiedAngle = boatAngle + 180
        return `rotate(${modifiedAngle}deg)`;
    }
}

export default BoatCompass;
