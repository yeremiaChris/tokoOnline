import React from "react";
import { makeStyles, useTheme, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  panah: {
    display: "flex",
    justifyContent: "space-between",
    height: 400,
    marginTop: -400,
    backgroundColor: "yellow",
  },
  stepper: {
    backgroundColor: "white",
  },
  arrow: {
    fontSize: 80,
    color: "grey",
    textShadow: "2px 2px red",
  },
  image: {
    height: 400,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: 300,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    backgroundColor: "red",
  },
  button: {
    height: "100%",
    alignItems: "center",
    display: "grid",
    justifyContent: "center",
  },
  view: {
    marginTop: 150,
  },
}));
function Carausel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
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
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className={classes.image}>
                  <Button variant="outlined">View</Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
      {/* <div className={classes.panah}>
        <Button onClick={handleBack}>
          <KeyboardArrowLeft className={classes.arrow} />
        </Button>
        <Button onClick={handleNext}>
          <KeyboardArrowRight className={classes.arrow} />
        </Button>
      </div> */}
    </div>
  );
}

export default Carausel;
