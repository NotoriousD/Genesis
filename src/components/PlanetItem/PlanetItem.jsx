import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  CardActions,
  CardContent,
  Typography,
  Button,
  Card,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const PlanetItem = (planet) => {
  const classes = useStyles();

  const getPlanetId = (url) => {
    const result = url.split("/");
    return result[result.length - 2];
  };

  const {
    data: { name, climate, population, url },
  } = planet;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Climate: {climate} <br />
            Population: {population === "unknown" ? "Not known" : population}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          <Link to={`/planet/${getPlanetId(url)}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlanetItem;
