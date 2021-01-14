import React from "react";
import ItemContent from "./itemContent";
import {
  InputBase,
  fade,
  Grid,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: "#ebebeb",
    height: 500,
    borderRadius: 5,
    paddingTop: 10,
  },
  kanan: {
    paddingLeft: 10,
  },
  ul: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",
  },
  sideButton: {
    textDecoration: "none",
    color: "black",
    width: "100%",
    fontWeight: "normal",
  },
  list: {
    "&:hover": {
      backgroundColor: "#dadada",
      borderRadius: 5,
    },
    padding: 10,
  },
}));

// side button
const sideButton = [
  {
    key: "1",
    name: "All Products",
  },
  {
    key: "2",
    name: "Featured Products",
  },
  {
    key: "3",
    name: "Bundled Products",
  },
];
function Content() {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = React.useState("");
  return (
    <>
      <Grid item xs={2} sm={2} md={2} lg={3}>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            {sideButton &&
              sideButton.map((item) => {
                return (
                  <li className={styles.list}>
                    <a className={styles.sideButton} href="#">
                      {item.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={9}>
        <div className={styles.kanan}>
          <ItemContent />
        </div>
      </Grid>
    </>
  );
}

export default Content;
