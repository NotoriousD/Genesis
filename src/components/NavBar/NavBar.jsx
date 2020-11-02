import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  container: {
    justifyContent: "space-between",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Typography variant="h6" className={classes.title}>
            Genesis React test
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} to="/">
              Planet List
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
