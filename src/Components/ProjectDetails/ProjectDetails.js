import React, { useState, useCallback, useEffect, forwardRef } from "react";
import styles from "./ProjectDetails.module.css";
import Grid from "@material-ui/core/Grid";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import { CSSTransition } from "react-transition-group";
import cloud1 from "../../Assets/cloud1.png";
import Divider from "@material-ui/core/Divider";
import Gif1 from "../../Assets/testGif1.gif";
import Gif1Image from "../../Assets/testGifImage1.PNG";
import DeloitteLogo from "../../Assets/deloitte_logo.png";
import projectTUGVid from "../../Assets/projectTUGVid.mp4";
import projectTUGPreview from "../../Assets/projectTUGPreview.PNG";
import projectLightPlayVid from "../../Assets/projectLightPlayVid.mp4";
import projectLightPlayPreview from "../../Assets/projectLightPlayPreview.PNG";
import projectManageRXVid from "../../Assets/projectManageRXVid.mp4";
import projectManageRXPreview from "../../Assets/projectManageRXPreview.PNG";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

const Transition = forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});
export default function ProjectDetails(props) {
  const {
    handleClose,
    open,
    fullVideo,
    fullDescription,
    title,
    lightPlayVid,
  } = props;

  return (
    <Dialog
      onClose={() => handleClose()}
      open={open}
      maxWidth={false}
      // transition={(props) => <Fade in={true} timeout={120000} {...props} />}
      // TransitionComponent={(props) => <Grow {...props} timeout={1200} />}
      TransitionComponent={Transition}
      TransitionProps={{ timeout: { appear: 1000, enter: 1400, exit: 700 } }}
      className={styles.dialog}
      PaperProps={{ style: { height: "80vh" } }}
    >
      <CloseIcon className={styles.closeIcon} onClick={() => handleClose()} />
      <DialogTitle className={styles.title}>{title}</DialogTitle>

      {/* <Grid
        container
        style={{ height: "60vh", width: "80vw" }}
        alignItems="center"
      >
        <Grid
          container
          // justify="flex-end"
          item
          style={{ width: "100%" }}
          justify="flex-start"
          alignItems="center"
        > */}

      <Grid container style={{ padding: "2em" }} alignItems="center">
        <Grid
          item
          md={7}
          container
          justify="center"
          alignItems="center"
          style={{ width: "100%", paddingLeft: "2em" }}
        >
          <video
            autoPlay
            loop
            muted
            controls
            className={styles.vid}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              height: "60vh",
              width: "auto",
            }}
          >
            <source src={fullVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid>
        <Grid
          item
          md={5}
          style={{ paddingLeft: "1em" }}
          className={styles.fullDescription}
        >
          {fullDescription}
          {/* </Grid>
        </Grid> */}
        </Grid>
      </Grid>

      {/* <Grid item>
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={fullVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Grid> */}
    </Dialog>
  );
}
