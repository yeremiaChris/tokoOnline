import React from "react";
import ItemContent from "./itemContent";
import { Grid, makeStyles } from "@material-ui/core";
// sortbyprice
import SortbyPrice from "../sortbyPrice";
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
  kiriKanan: {
    backgroundColor: "green",
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
}));

// kiri kanan
const kiriKanan = [
  {
    name: "kiri",
    key: "1",
  },
  {
    name: "Kanan",
    key: "2",
  },
];

function Content({ sideButton, sideButtonDua }) {
  const styles = useStyles();

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
          {/* <ul className={styles.ul}>
            <li
              style={{
                borderRadius: 5,
                padding: 10,
              }}
            >
              Sort by Price
            </li>
            <li style={{ borderRadius: 5, padding: 10 }}>
              <TextField
                label="MIN"
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </li>
            <li style={{ borderRadius: 5, padding: 10 }}>
              <TextField
                label="MAX"
                value={values.numberFormatDua}
                onChange={handleChange}
                name="numberFormatDua"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </li>
          </ul> */}
          <SortbyPrice />
        </div>
      </Grid>
      <Grid className={styles.content} item xs={12} sm={12} md={12} lg={9}>
        <div>
          <ItemContent />
        </div>
      </Grid>
    </>
  );
}

export default Content;
