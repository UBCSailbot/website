import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';

function Checkboxes() {
  function checkChecked(status, checkboxNumber){
    if(!status){
      console.log("hello, i am layer " + checkboxNumber + "!");
    }
  }

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(event.target.checked);
    checkChecked(checked1, 1);
  }
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(event.target.checked);
    checkChecked(checked2, 2);
  }
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked3(event.target.checked);
    checkChecked(checked3, 3);
  }

  return (
    <Paper elevation={0}>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            control={<Checkbox
              checked={checked1}
              onChange={handleChange1} />}
            label="Layer 1"
            labelPlacement="bottom"
          />
          <FormControlLabel
            control={<Checkbox
              checked={checked2}
              onChange={handleChange2} />}
            label="Layer 2"
            labelPlacement="bottom"
          />
          <FormControlLabel
            control={<Checkbox
              checked={checked3}
              onChange={handleChange3} />}
            label="Layer 3"
            labelPlacement="bottom"
          />
        </FormGroup>
      </FormControl>
    </Paper>
  );
}

export default Checkboxes;
