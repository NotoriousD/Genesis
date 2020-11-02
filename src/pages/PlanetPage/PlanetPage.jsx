import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { swapi } from "../../api";
import { Container } from "@material-ui/core";
import { PlanetCard } from "../../components/PlanetCard";
import { ResidentsList } from "../../components/ResidentsList";

const PlanetPage = () => {
  const [info, setInfo] = useState({});
  const [residents, setResidents] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/");

  const fetchData = useCallback(() => {
    swapi
      .getPlanetById(path[2])
      .then(({ data }) => {
        setInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchResidentsList = useCallback(() => {
    if (info.residents && info.residents.length !== 0) {
      swapi
        .getListResidents(info.residents)
        .then((result) => {
          console.log(result);
          setResidents(result);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchResidentsList();
  }, [fetchData, fetchResidentsList]);

  return (
    <Container max-width="md">
      <PlanetCard data={{ ...info }} />
      <ResidentsList residents={[...residents]} />
    </Container>
  );
};

export default PlanetPage;
