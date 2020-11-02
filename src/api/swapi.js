import axios from "axios";

const getPlanetList = async (page) => {
  try {
    const response = await axios
      .get(`https://swapi.dev/api/planets/?page=${page}`)
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return { error };
  }
};

const getPlanetById = async (id) => {
  try {
    const response = await axios
      .get(`https://swapi.dev/api/planetss/${id}`)
      .catch((e) => {
        throw e.message;
      });
    return response;
  } catch (error) {
    return {
      error,
    };
  }
};

const getListResidents = async (residents) => {
  const result = [];

  residents.map((resident) => {
    try {
      axios
        .get(resident)
        .then(({ data }) => {
          result.push(data);
        })
        .catch((e) => {
          throw e.message;
        });
    } catch (error) {
      return {
        error,
      };
    }
  });
  return result;
};

export default { getPlanetList, getPlanetById, getListResidents };
