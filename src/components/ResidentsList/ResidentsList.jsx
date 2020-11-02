import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import "./ResidentsList.css";

const ResidentsList = ({ residents }) => (
  <div className="residents__list">
    {residents.length !== 0
      ? residents.map((resident) => (
          <Typography
            key={resident.name}
            gutterBottom
            variant="body2"
            component="p"
          >
            {resident.name}
          </Typography>
        ))
      : "Residents not found"}
  </div>
);

ResidentsList.propTypes = {
  residents: PropTypes.arrayOf(PropTypes.object.isRequired),
};

ResidentsList.defaultProps = {
  residents: [{}],
};

export default ResidentsList;
