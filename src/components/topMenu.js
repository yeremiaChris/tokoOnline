import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Menu, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {},
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
    marginTop: 60,
  },
}));

export default function TopMenu({ menuList }) {
  const styles = useStyles();
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
                        return <MenuItem key={item}>{item}</MenuItem>;
                      })}
                      {/* <SubMenu label="Open">
                        <MenuItem>index.html</MenuItem>
                        <MenuItem>example.js</MenuItem>
                        <SubMenu label="Styles">
                          <MenuItem>about.css</MenuItem>
                          <MenuItem>home.css</MenuItem>
                          <MenuItem>index.css</MenuItem>
                        </SubMenu>
                      </SubMenu> */}
                      {/* <MenuItem>Save</MenuItem> */}
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
