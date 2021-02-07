import React from "react";
import ItemContent from "./itemContent";
import { Grid, makeStyles, Button } from "@material-ui/core";
// sortbyprice
import SortbyPrice from "../sortbyPrice";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
    color: "black",
    width: "100%",
    fontWeight: "normal",
    margin: 0,
    cursor: "pointer",
  },
  list: {
    "&:hover": {
      backgroundColor: "#dadada",
      borderRadius: 5,
    },
    padding: 10,
    cursor: "pointer",
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
  bottom: {
    marginBottom: 20,
    marginTop: 20,
  },
  lihat: {
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
  },
}));
function Content({ sideButton, sideButtonDua }) {
  const styles = useStyles();

  // ambil state dari react router ketika link di klik
  const location = useLocation();
  console.log(location.state);
  // sort
  const [sort, setSort] = React.useState({
    by: "",
    tanda: false,
  });
  // data
  const items = useSelector((state) => state.item);

  const [data, setData] = React.useState(
    location.state === undefined
      ? items
      : items.filter((item) => item.jenis === location.state.nama)
  );
  const sortBy = (value) => {
    setSort({
      by: value,
      tanda: true,
    });
    if (value === "All Products") {
      return setData(items);
    } else if (value === "Featured Products") {
      return setData(items.filter((item) => item.recomendasi === true));
    } else if (value === "lowToHigh") {
      return setData(items.sort((a, b) => a.harga - b.harga));
    } else if (value === "highToLow") {
      return setData(items.sort((a, b) => a.harga + b.harga));
    } else {
      return setData(items.filter((item) => item.jenis === value));
    }
  };
  // state untuk next data
  const [nextPage, setNextPage] = React.useState(12);
  const next = () => {
    setNextPage((prev) => prev + 3);
  };
  // 6 data yang di tampilkan
  const onePage = data.slice(0, nextPage);

  return (
    <>
      <Grid className={styles.sideTool} item xs={12} sm={3} md={3} lg={3}>
        <div className={styles.kiri}>
          <ul className={styles.ul}>
            {sideButton &&
              sideButton.map((item) => {
                return (
                  <li
                    onClick={() => sortBy(item.name)}
                    className={styles.list}
                    key={item.key}
                    style={{
                      backgroundColor: sort.by === item.name ? "#dadada" : null,
                    }}
                  >
                    <p className={styles.sideButton}>{item.name}</p>
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
                  <li
                    style={{
                      backgroundColor: sort.by === item.name ? "#dadada" : null,
                    }}
                    onClick={() => sortBy(item.name)}
                    className={styles.list}
                    key={item.key}
                  >
                    <p className={styles.sideButton}>{item.name}</p>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.kiri}>
          <SortbyPrice sort={sort} sortBy={sortBy} />
        </div>
      </Grid>
      <Grid className={styles.content} item xs={12} sm={12} md={12} lg={9}>
        <h1 className={styles.kategoriName}>
          {location.state !== undefined && sort.tanda === false
            ? location.state.nama
            : sort.by}
        </h1>
        <div>
          <ItemContent data={onePage} />
        </div>
        {onePage.length === data.length ? null : (
          <Grid container justify="center" className={styles.bottom}>
            <Grid item>
              <Button onClick={next} className={styles.lihat}>
                LIHAT LAINNYA
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Content;
