import React from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function SelectBox(props) {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="select-box-container">

      <FormControl>
        <InputLabel id="demo-simple-select-label">{props.placeHolder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={props.labelName}
          onChange={handleChange}
        >
          <MenuItem value={10}>{props.menu1}</MenuItem>
          <MenuItem value={20}>{props.menu2}</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}