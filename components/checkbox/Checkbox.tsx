import React from "react";
import ReactDom from 'react-dom';

import Checkbox from '@mui/material/Checkbox';

function Checkboxes() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
    );
};

export default Checkboxes;
