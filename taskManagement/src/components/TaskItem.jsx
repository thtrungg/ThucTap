import * as React from "react";
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Checkbox } from "antd";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TaskItem() {
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: checked ? red[500] : 'white' }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <Checkbox checked={checked} onChange={toggleCheckbox} />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="edit content">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete content">
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
