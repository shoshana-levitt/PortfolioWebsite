import React from "react";
import {
  Typography,
  Paper,
  Button,
  ButtonGroup,
  Stack,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Switch,
  TextField,
  Avatar,
  AvatarGroup,
  Badge,
  IconButton,
  Card,
} from "@mui/material";
import { purple, yellow, blue, green } from "@mui/material/colors";
import {
  Mail,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";

const Test = () => {
  return (
    <div>
      <Typography variant="h4" align="center" margin={10}>
        Test
      </Typography>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography
          variant="h5"
          align="left"
          margin={2}
          sx={{ fontWeight: "bold" }}
        >
          Buttons
        </Typography>
        <Stack direction="row" sx={{ m: 2 }}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
        <br></br>
        <ButtonGroup variant="contained" sx={{ m: 2 }}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup variant="contained" sx={{ m: 2 }} orientation="vertical">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Checkbox
        </Typography>
        <Stack direction="row" sx={{ m: 2 }}>
          <Checkbox></Checkbox>
          <Checkbox defaultChecked></Checkbox>
          <Checkbox disabled></Checkbox>
          <Checkbox disabled checked></Checkbox>
        </Stack>
        <Stack direction="column" sx={{ m: 2 }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Default Unchecked"
            />
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
      </Card>
      {/* <Typography variant="h5" align="left" margin={2} sx={{fontWeight: 'bold'}}>
        Checked Icon
      </Typography>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox> */}
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Radio Buttons
        </Typography>
        <FormControl sx={{ m: 2 }}>
          <FormLabel>Select One</FormLabel>
          <RadioGroup row defaultValue="1">
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
          </RadioGroup>
        </FormControl>
        <br></br>
        <FormControl sx={{ m: 2 }}>
          <FormLabel>Select One</FormLabel>
          <RadioGroup defaultValue="1">
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
          </RadioGroup>
        </FormControl>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Rating
        </Typography>
        <Stack direction="column" sx={{ m: 2 }}>
          <Rating value={1} readOnly />
          <Rating value={1.5} precision={0.5} readOnly />
          <Rating value={2} readOnly />
          <Rating value={2.5} precision={0.5} readOnly />
          <Rating value={3} readOnly />
          <Rating value={3.5} precision={0.5} readOnly />
          <Rating value={4} readOnly />
          <Rating value={4.5} precision={0.5} readOnly />
          <Rating value={5} readOnly />
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Switches
        </Typography>
        <FormGroup sx={{ m: 2 }}>
          <FormControlLabel control={<Switch />} label="Default Off" />
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Default On"
          />
          <FormControlLabel
            disabled
            control={<Switch />}
            label="Disabled Off"
          />
          <FormControlLabel
            disabled
            control={<Switch defaultChecked />}
            label="Disabled On"
          />
        </FormGroup>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Text Fields
        </Typography>
        <Stack direction="column" sx={{ m: 2, width: 300 }} spacing={1}>
          <TextField required label="Outlined" variant="outlined" />
          <TextField required label="Filled" variant="filled" />
          <TextField required label="Standard" variant="standard" />
          <TextField label="Multiline" multiline maxRows={5} />
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Avatars
        </Typography>
        <Stack direction="row" sx={{ m: 2 }} spacing={1}>
          <Avatar sx={{ bgcolor: purple[500] }}>SL</Avatar>
          <Avatar sx={{ bgcolor: yellow[500] }}>PL</Avatar>
          <Avatar sx={{ bgcolor: blue[500] }}>ML</Avatar>
          <Avatar alt="John Doe" src="/broken-image.jpg"></Avatar>
          <Avatar />
        </Stack>
        <AvatarGroup total={5} max={4} align="left" sx={{ m: 2 }}>
          <Avatar sx={{ bgcolor: purple[500] }}>SL</Avatar>
          <Avatar sx={{ bgcolor: yellow[500] }}>PL</Avatar>
          <Avatar sx={{ bgcolor: blue[500] }}>ML</Avatar>
          <Avatar alt="John Doe" src="/broken-image.jpg"></Avatar>
          <Avatar />
        </AvatarGroup>
      </Card>
      <Card variant="outlined" sx={{ m: 2, width: 500 }}>
        <Typography variant="h5" align="left" sx={{ m: 2, fontWeight: "bold" }}>
          Badges
        </Typography>
        <Stack direction="row" sx={{ m: 2 }}>
          <Badge badgeContent={10} color="primary" sx={{ m: 2 }}>
            <Mail />
          </Badge>
          <Badge badgeContent={101} color="primary" max={100} sx={{ m: 2 }}>
            <Mail />
          </Badge>
          <Badge color="primary" variant="dot" sx={{ m: 2 }}>
            <Mail />
          </Badge>
          <IconButton>
            <Badge badgeContent={10} color="primary" sx={{ m: 2 }}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Stack>
      </Card>
    </div>
  );
};

export default Test;
