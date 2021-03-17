import React, { useState, useCallback, useEffect } from "react";
import styles from "./AppBar.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import InsertDriveFileSharpIcon from "@material-ui/icons/InsertDriveFileSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedinIcon from "../../Assets/linkedinIcon.png";
import resume from "../../Assets/resume.pdf";

export default function AppBar(props) {
  const link = (goTo) => {
    if (goTo === "resume") {
      window.open(resume, "_blank");
    } else if (goTo === "linkedin") {
      window.open("https://www.linkedin.com/in/kenny-fung/");
    } else if (goTo === "github") {
      window.open("https://github.com/fung7890");
    }
  };
  return (
    <Grid container className={styles.sticky} spacing={2}>
      <Grid
        item
        style={{ paddingLeft: "1.5em" }}
        onClick={() => link("resume")}
      >
        <InsertDriveFileSharpIcon className={styles.icon} />{" "}
      </Grid>

      <Grid item onClick={() => link("github")}>
        <GitHubIcon className={styles.icon} />
      </Grid>
      <Grid item onClick={() => link("linkedin")}>
        <img src={LinkedinIcon} className={styles.linkedinIcon} />
      </Grid>
    </Grid>
  );
}

{
  /* <a href="./KinPongFungResume.pdf" class="link"><i class="far fa-file"></i>&nbsp;Resume</a> */
}
