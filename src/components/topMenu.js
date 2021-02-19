import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { menuList } from "../utils/utils";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
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

export default function TopMenu() {
  const styles = useStyles();
  // linking
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const goTo = (nama) => {
    history.push({
      pathname: `/content`,
      state: {
        nama,
      },
    });
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
                          {item.name}
                          <ArrowDropDownIcon
                            fontSize="small"
                            className={styles.icon}
                          />
                        </p>
                      }
                    >
                      {item.menu.map((item) => {
                        return (
                          <MenuItem onClick={() => goTo(item)} key={item}>
                            {item}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  ) : (
                    <p className={styles.link} href="/#">
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
