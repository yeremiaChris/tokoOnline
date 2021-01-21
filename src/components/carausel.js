import React from "react";
import { makeStyles, useTheme, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image1 from "../image/test.jpg";
import Image2 from "../image/dua.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// initial state carausel
const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: Image1,
  },
  {
    label: "Bird",
    imgPath: Image2,
  },
];
const useStyles = makeStyles((theme) => ({
  // image dari iklan carausel yang di slide
  image: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 10,
    },
  },

  // img element
  img: {
    objectFit: "cover",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    "&:hover": {
      filter: "brightness(30%)",
    },
    transition: ".2s",
  },
  button: {
    backgroundColor: "red",
  },

  // arah arrow
  panah: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      marginRight: 10,
    },
    height: 400,
    marginTop: -400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
      marginTop: -300,
    },
  },
  iconArrow: {
    color: "gray",
    fontSize: 60,
  },
  buttonView: {
    color: "white",
    borderColor: "white",
    marginTop: 100,
  },
}));
function Carausel() {
  // styles
  const classes = useStyles();

  // carausel atau slide
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  // handle icon arrow
  const handleNext = (prevActiveStep) => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < 1 ? prevActiveStep + 1 : (prevActiveStep = 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < 1 ? (prevActiveStep = 1) : prevActiveStep - 1
    );
  };
  // akhir handle icon arrow

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  // akhir carausel atau slide

  // state button view mouse enter
  const [display, setDisplay] = React.useState("none");
  const mouseEnter = () => {
    setDisplay("flex");
  };
  const mouseLeave = () => {
    setDisplay("none");
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => {
          return (
            <div
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              key={step.label}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <div className={classes.image}>
                  <img
                    alt={step.label}
                    className={classes.img}
                    src={step.imgPath}
                  ></img>
                </div>
              ) : null}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      <div className={classes.panah}>
        <Button onClick={handleBack}>
          <KeyboardArrowLeft className={classes.iconArrow} />
        </Button>
        <Button
          style={{ display: display }}
          className={classes.buttonView}
          variant="outlined"
        >
          View
        </Button>
        <Button onClick={handleNext}>
          <KeyboardArrowRight className={classes.iconArrow} />
        </Button>
      </div>
    </div>
  );
}

export default Carausel;
