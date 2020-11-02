import React from "react";
import { PlanetList } from "../../components/PlanetList";
import { Container, Typography } from "@material-ui/core";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home__page">
      <Typography gutterBottom variant="h2" component="h2">
        Planet List
      </Typography>
      <Container max-width="md">
        <PlanetList />
      </Container>
    </div>
  );
};

export default HomePage;
