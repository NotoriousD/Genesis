import React, { useState, useEffect, useCallback } from "react";
import { PlanetItem } from "../PlanetItem";
import { swapi } from "../../api";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import "./PlanetList.css";

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPlanets, setTotalPlanets] = useState(0);

  const fetchData = useCallback(() => {
    setLoading(true);
    swapi
      .getPlanetList(page)
      .then(({ data: { count, results } }) => {
        setPlanets((prevState) => {
          if (prevState.length > 0) {
            return [...prevState, ...results];
          } else {
            return [...results];
          }
        });
        setTotalPlanets(count);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChangePage = () => {
    if (planets.length < totalPlanets) {
      setPage(page + 1);
    }
  };

  return (
    <div className="planet__container">
      <div className="planet__list">
        {error && (
          <Typography gutterBottom variant="h3" component="h3">
            Something was wrong!
          </Typography>
        )}
        {planets.length && !error
          ? planets.map((planet) => (
              <PlanetItem key={planet.name} data={planet} />
            ))
          : null}
      </div>
      <div className="load-more">
        {isLoading && <CircularProgress />}
        {planets.length < totalPlanets && !isLoading ? (
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleChangePage}
          >
            Load more
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default PlanetList;
