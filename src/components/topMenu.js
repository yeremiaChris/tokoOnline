import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { menuList } from "../utils/utils";
import { useHistory } from "react-router-dom";
import { sorting } from "../utils/utils";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "white",
    marginTop: 14,
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    "&:hover": {
      backgroundColor: "#e8ecee",
      borderRadius: 10,
      cursor: "pointer",
    },
    padding: 10,
    color: "black",
    display: "flex",
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  containerFull: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    marginTop: 40,
  },
}));

export default function TopMenu({ items, setSort, setData, data, sort }) {
  const styles = useStyles();
  // linking
  const history = useHistory();

  // sorting d content
  const goTo = (nama) => {
    sorting(items, setSort, setData, nama);
    history.push({
      pathname: `/content`,
      state: {
        jenis: nama,
      },
    });
  };
  // define the button depends on the location
  const location = useLocation();
  const sortButton = (jenis) => {
    sorting(items, setSort, setData, jenis);
  };
  return (
    <Grid container className={styles.containerFull}>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {menuList &&
            menuList.map((item) => {
              return (
                <li key={item.key}>
                  {item.icon ? (
                    <Menu
                      menuButton={
                        <p className={styles.link} href="/#">
                          {sort.by === "New Arrivals" ||
                          sort.by === "Highest Price" ||
                          sort.by === "Lowest Price"
                            ? "All Products"
                            : sort.by}
                          <ArrowDropDownIcon
                            fontSize="small"
                            className={styles.icon}
                          />
                        </p>
                      }
                    >
                      {item.menu.map((item) => (
                        <MenuItem
                          onClick={() => {
                            location.pathname === "/"
                              ? goTo(item.jenis)
                              : sortButton(item.jenis);
                          }}
                          key={item.key}
                        >
                          {item.jenis}
                        </MenuItem>
                      ))}
                    </Menu>
                  ) : (
                    <p
                      style={{
                        backgroundColor:
                          sort.by === item.name ? "#dadada" : null,
                        borderRadius: 10,
                      }}
                      onClick={() => {
                        location.pathname === "/"
                          ? goTo("New Arrivals")
                          : sortButton("New Arrivals");
                      }}
                      className={styles.link}
                    >
                      {item.name}
                    </p>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </Grid>
  );
}
