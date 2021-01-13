import React from "react";
import { makeStyles, useTheme, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// initial state carausel
const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const useStyles = makeStyles((theme) => ({
  // image dari iklan carausel yang di slide
  image: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    backgroundColor: "green",
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
  },
  button: {
    backgroundColor: "red",
  },

  // arah arrow
  panah: {
    justifyContent: "space-between",
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
}));
function Carausel() {
  // styles
  const classes = useStyles();

  // carausel atau slide
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

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

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  // akhir carausel atau slide

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
            <div key={step.label}>
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
        <Button onClick={handleNext}>
          <KeyboardArrowRight className={classes.iconArrow} />
        </Button>
      </div>
    </div>
  );
}

export default Carausel;
