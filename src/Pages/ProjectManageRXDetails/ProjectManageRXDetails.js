import React, { useState, useCallback, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../../Components/AppBar/AppBar";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function ProjectManageRXDetails(props) {
  const { fullVideo } = props;
  const history = useHistory();

  return (
    <React.Fragment>
      <AppBar />
      <Grid container>
        test
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={fullVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Button
          onClick={() => {
            history.push({
              pathname: "/",
              state: { fromDetails: true },
            });
          }}
        >
          back
        </Button>
      </Grid>
    </React.Fragment>
  );
}
