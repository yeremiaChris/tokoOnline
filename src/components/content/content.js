import React from "react";
import ItemContent from "./itemContent";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: "#ebebeb",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 20,
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
  return (
    <>
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            {sideButton &&
              sideButton.map((item) => {
                return (
                  <li className={styles.list} key={item.key}>
                    <a className={styles.sideButton} href="/#">
                      {item.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <div className={styles.kanan}>
          <ItemContent />
        </div>
      </Grid>
    </>
  );
}

export default Content;
