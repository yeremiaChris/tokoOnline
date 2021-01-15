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
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#e8ecee",
      borderRadius: 10,
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
                        <a className={styles.link} href="/#">
                          {item.name}
                          <ArrowDropDownIcon
                            fontSize="small"
                            className={styles.icon}
                          />
                        </a>
                      }
                    >
                      <MenuItem>New File</MenuItem>
                      <SubMenu label="Open">
                        <MenuItem>index.html</MenuItem>
                        <MenuItem>example.js</MenuItem>
                        <SubMenu label="Styles">
                          <MenuItem>about.css</MenuItem>
                          <MenuItem>home.css</MenuItem>
                          <MenuItem>index.css</MenuItem>
                        </SubMenu>
                      </SubMenu>
                      <MenuItem>Save</MenuItem>
                    </Menu>
                  ) : (
                    <a className={styles.link} href="/#">
                      {item.name}
                    </a>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </Grid>
  );
}
