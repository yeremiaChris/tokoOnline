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
    cursor: "pointer",
  },
  sideButton: {
    textDecoration: "none",
    color: "black",
    width: "100%",
    fontWeight: "normal",
    margin: 0,
    cursor: "pointer",
  },
}));
function SortbyPrice({ sortBy, sort }) {
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
        <li
          style={{
            backgroundColor: sort.by === "highToLow" ? "#dadada" : null,
          }}
          onClick={() => sortBy("highToLow")}
          className={styles.list}
        >
          <p className={styles.sideButton}>High to low</p>
        </li>
        <li
          style={{
            backgroundColor: sort.by === "lowToHigh" ? "#dadada" : null,
          }}
          onClick={() => sortBy("lowToHigh")}
          className={styles.list}
        >
          <p className={styles.sideButton}>Low to high</p>
        </li>
      </ul>
    </>
  );
}

export default SortbyPrice;
