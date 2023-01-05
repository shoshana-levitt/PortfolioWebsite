import React from "react";
import {
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Test = () => {
  return (
    <div>
      <Typography variant="h4" align="center" margin={10}>
        Test
      </Typography>
      <Typography variant="h6" align="left" margin={2}>
        Buttons
      </Typography>
      <Stack direction="row" spacing={2} margin={2}>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <br></br>
      <ButtonGroup variant="contained" spacing={2} margin={2}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br></br>
      <ButtonGroup
        variant="contained"
        spacing={2}
        margin={2}
        orientation="vertical"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Typography variant="h6" align="left" margin={2}>
        Checkbox
      </Typography>
      <Stack direction="row" spacing={2} margin={2}>
        <Checkbox></Checkbox>
        <Checkbox defaultChecked></Checkbox>
        <Checkbox disabled></Checkbox>
        <Checkbox disabled checked></Checkbox>
      </Stack>
      <Stack direction="column" spacing={2} margin={2}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Default Unchecked" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Default Checked"
          />
          <FormControlLabel
            disabled
            control={<Checkbox />}
            label="Disabled Unchecked"
          />
          <FormControlLabel
            disabled
            checked
            control={<Checkbox />}
            label="Disabled Checked"
          />
        </FormGroup>
      </Stack>
      {/* <Typography variant="h6" align="left" margin={2}>
        Checked Icon
      </Typography>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox> */}
      <Typography variant="h6" align="left" margin={2}>
        Paper
      </Typography>
      <Paper elevation={2}>Paper Component</Paper>
    </div>
  );
};

export default Test;
