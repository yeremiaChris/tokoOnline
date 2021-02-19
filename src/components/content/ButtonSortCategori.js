import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";

// dialog
import { blue } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import { menuList, sideButton, sideButtonDua } from "../../utils/utils";
// sortbyprice
import SortbyPrice from "../sortbyPrice";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    marginTop: -60,
  },
  button: {
    backgroundColor: "#ebebeb",
    width: "98%",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderWidth: 0,
  },
  buttonKiriKanan: {
    width: "100%",
    display: "flex",
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
    width: 400,
  },
}));

// dialog func
function SimpleDialog(props) {
  const classes = useStyles();
  const { sortPrice, menuList, onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle style={{ paddingLeft: 15 }} id="simple-dialog-title">
        {selectedValue}
      </DialogTitle>
      <List className={classes.dialog}>
        {sortPrice ? <SortbyPrice /> : null}

        {menuList.map((item) => (
          <ListItem
            button
            onClick={() => handleListItemClick(item.name)}
            key={item.name}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

function ButtonSortCategori() {
  const styles = useStyles();

  // dialog state
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = (name) => {
    setOpen(true);
    setSelectedValue(name);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // button categories dan sort
  const buttonSide = [
    {
      name: "Categories",
      key: "1",
      justify: "start",
      icon: false,
    },
    {
      name: "Sort by",
      key: "2",
      justify: "flex-end",
      icon: true,
    },
  ];

  // state data untuk dialog
  const [data, setData] = React.useState([]);

  // cek sort atau categories
  const [priceWarn, setPriceWarn] = React.useState(false);
  return (
    <Grid container>
      <div className={styles.container}>
        {buttonSide.map((item) => {
          return (
            <div
              key={item.key}
              style={{ justifyContent: item.justify }}
              className={styles.buttonKiriKanan}
            >
              <Button
                onClick={() => {
                  handleClickOpen(item.name);
                  item.icon ? setData(menuList) : setData(sideButtonDua);
                  item.icon ? setPriceWarn(true) : setPriceWarn(false);
                }}
                className={styles.button}
                variant="outlined"
              >
                <div
                  style={{
                    justifySelf: "center",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon ? <ListIcon /> : null}
                  <p
                    style={{
                      justifySelf: "center",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              </Button>
            </div>
          );
        })}
      </div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        menuList={data}
        sortPrice={priceWarn}
      />
    </Grid>
  );
}

export default ButtonSortCategori;
