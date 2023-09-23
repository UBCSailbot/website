import React from "react";
import ReactDom from 'react-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Checkboxes() {
    return (
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox 1" />
        <FormControlLabel control={<Checkbox />} label="Checkbox 2" />
        <FormControlLabel control={<Checkbox />} label="Checkbox 3" />
      </FormGroup>
    );
  }

export default Checkboxes;
