import React from "react";
import ItemContent from "./itemContent";
import { Grid, makeStyles } from "@material-ui/core";
// sortbyprice
import SortbyPrice from "../sortbyPrice";
import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  kiri: {
    backgroundColor: "#ebebeb",
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
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
  kiriKananContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  sideTool: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  content: {
    paddingLeft: 10,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
    },
  },
  kategoriName: {
    marginBottom: 30,
    fontWeight: "normal",
    textAlign: "left",
    margin: 0,
    color: "gray",
  },
}));
function Content({ sideButton, sideButtonDua }) {
  const styles = useStyles();

  // ambil state dari react router ketika link di klik
  const location = useLocation();
  return (
    <>
      <Grid className={styles.sideTool} item xs={12} sm={3} md={3} lg={3}>
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
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            <li
              style={{
                borderRadius: 5,
                padding: 10,
              }}
            >
              Categories
            </li>
            {sideButtonDua &&
              sideButtonDua.map((item) => {
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
        <div className={styles.kiri}>
          <SortbyPrice />
        </div>
      </Grid>
      <Grid className={styles.content} item xs={12} sm={12} md={12} lg={9}>
        <h1 className={styles.kategoriName}
        >
          {location.state !== undefined ? location.state.nama : null}
        </h1>
        <div>
          <ItemContent />
        </div>
      </Grid>
    </>
  );
}

export default Content;
