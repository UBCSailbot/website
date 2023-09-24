import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function checkboxes() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
      <FormControlLabel
          value="bottom"
          control={<Checkbox defaultChecked/>}
          label="Layer 1"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox defaultChecked/>}
          label="Layer 2"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox defaultChecked/>}
          label="Layer 3"
          labelPlacement="bottom"
        />
      </FormGroup>
    </FormControl>
  );
}

export default checkboxes;
