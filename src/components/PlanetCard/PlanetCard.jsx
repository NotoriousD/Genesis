import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const PlanetCard = ({ data }) => {
  const {
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    population,
  } = data;

  return (
    <>
      <Typography gutterBottom variant="h1" component="h1">
        {name}
      </Typography>
      <Typography gutterBottom variant="body1" component="p">
        Rotation period: {rotation_period} <br />
        Diameter: {diameter} <br />
        Climate: {climate} <br />
        Gravity: {gravity}
        <br />
        Terrain: {terrain} <br />
        Population: {population}
      </Typography>
    </>
  );
};

PlanetCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};

PlanetCard.defaultProps = {
  data: {
    name: "",
    rotation_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    population: "",
  },
};

export default PlanetCard;
