import React, { useState, useCallback, useEffect } from "react";
import styles from "./ProjectDisplay.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { useHistory } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import Grow from "@material-ui/core/Grow";

export default function ProjectDisplay(props) {
  const {
    title,
    subtitle,
    gif,
    gifImage,
    techList,
    video,
    preview,
    fullVideo,
    detailsPage,
    fullDescription,
  } = props;
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const visSet = (e) => {
    setVisible(e);
  };

  const pageHandler = (page) => {
    history.push({
      pathname: page,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <VisibilitySensor
        onChange={(e) => visSet(e)}
        offset={{ top: 0, sbottom: 0 }}
      >
        <Grid
          container
          style={{
            position: "relative",
            marginTop: "10em",
            marginBottom: "10em",
          }}
          className={styles.container}
          justify="center"
        >
          <Grid item style={{ width: "100%" }}>
            <Card
              style={{ borderRadius: "0px" }}
              elevation={0}
              className={styles.card}
            >
              <CardContent>
                <Grid
                  container
                  item
                  justify="flex-start"
                  style={{ marginLeft: "10vw" }}
                >
                  <Grid item>
                    <img
                      src={preview}
                      alt="previewImg"
                      style={{ width: "25vw" }}
                      className={!visible ? styles.static : styles.inactive}
                    />
                  </Grid>
                  <Grid item style={{ width: "25vw" }}>
                    {/* <img
                    src={gif}
                    alt="gif"
                    style={{ width: "30vw" }}
                    className={visible ? styles.active : ""}
                  /> */}

                    <video
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted
                      className={visible ? styles.active : ""}
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Grid>
                  <Grid
                    item
                    className={
                      visible ? styles.fontForwards : styles.fontBackwards
                    }
                    style={{ paddingLeft: "8em" }}
                  >
                    <Grid item className={styles.projectTitle}>
                      {title}
                    </Grid>

                    <Grid
                      className={styles.subTitle}
                      style={{ paddingBottom: "2em" }}
                    >
                      {subtitle}
                    </Grid>
                    <Grid item>
                      <Grid className={styles.techListTitle}>{techList}</Grid>
                      <Grid style={{ paddingTop: "2em", paddingLeft: "1em" }}>
                        <Button
                          variant="outlined"
                          className={styles.detailsButton}
                          onClick={handleClickOpen}
                        >
                          Details
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Grid className={styles.description}>{title}</Grid>
            <Grid className={styles.projectTitle}>{title}</Grid> */}
              </CardContent>
              {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
            </Card>
          </Grid>
          <Grid item style={{ position: "relative" }}></Grid>
          <ProjectDetails
            open={open}
            handleClose={handleClose}
            fullVideo={fullVideo}
            fullDescription={fullDescription}
            title={title}
          />
        </Grid>
      </VisibilitySensor>
    </React.Fragment>
  );
}
