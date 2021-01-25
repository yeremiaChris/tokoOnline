import React from "react";
import { makeStyles } from "@material-ui/core";

// number
const useStyles = makeStyles((theme) => ({
  ul: {
    margin: 0,
    listStyle: "none",
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "left",
  },
  list: {
    "&:hover": {
      backgroundColor: "#dadada",
      borderRadius: 5,
    },
    padding: 10,
  },
  sideButton: {
    textDecoration: "none",
    color: "black",
    width: "100%",
    fontWeight: "normal",
  },
}));
function SortbyPrice() {
  const styles = useStyles();
  return (
    <>
      <ul className={styles.ul}>
        <li
          style={{
            borderRadius: 5,
            padding: 10,
          }}
        >
          Sort by Price
        </li>
        <li className={styles.list}>
          <a className={styles.sideButton} href="/#">
            High to low
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.sideButton} href="/#">
            Low to high
          </a>
        </li>
      </ul>
    </>
  );
}

export default SortbyPrice;
