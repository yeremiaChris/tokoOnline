import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import drawer
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import PeopleIcon from "@material-ui/icons/People";
// akhir drawer
import AddIcon from "@material-ui/icons/Add";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DataUsageOutlinedIcon from "@material-ui/icons/DataUsageOutlined";
import Badge from "@material-ui/core/Badge";
import { useLocation, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { sorting } from "../utils/utils";
const useStyles = makeStyles((theme) => ({
  // style pada topbar
  root: {
    flexGrow: 1,
    marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
    display: "flex",
    padding: 0,
    [theme.breakpoints.down("md")]: {
      marginLeft: 10,
      marginRight: 10,
    },
  },
  logo: {
    fontSize: 30,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  kanan: {
    display: "flex",
    alignItems: "center",
  },
  topBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 1px 0px #888888",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    justifySelf: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  // akhir style pada topbar

  // responsif icon button pada topbar
  respon: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    padding: 0,
    marginRight: 30,
  },
  responDua: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
    },
    padding: 0,
    margin: 0,
  },
  // akhir responsif icon button pada topbar

  // style drawer
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  // akhir style drawer
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

// menu toolbar
const menu = [
  {
    nama: "Login",
    icon: <AccountCircle />,
    key: "1",
  },
  {
    nama: "Register",
    icon: <PeopleIcon />,
    key: "2",
  },
  {
    nama: "Tambah Item",
    icon: <AddIcon />,
    key: "3",
  },
  {
    nama: "Info Keranjang",
    icon: <ShoppingBasketOutlinedIcon />,
    key: "4",
  },
  {
    nama: "Laporan Pendapatan",
    icon: <DataUsageOutlinedIcon />,
    key: "5",
  },
];

export default function ButtonAppBar({ items, setSort, setData }) {
  const location = useLocation();
  const history = useHistory();
  // variabel buat class
  const classes = useStyles();
  // akhir carausel atau slide

  const goTo = () => {
    sorting(items, setSort, setData, "All Products");
    history.push({
      pathname: `/daftar`,
      state: {
        jenis: "All Products",
      },
    });
  };
  // klik menu profile
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      <MenuItem onClick={handleMenuClose}>Register</MenuItem>
    </Menu>
  );
  // akhir klik profile

  // state drawer
  const [state, setState] = React.useState({
    top: false,
  });

  // toggle drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // list drawer
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((text, index) => (
          <ListItem button key={text.key}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.nama} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  // akhir list drawer

  // back
  const back = () => {
    history.goBack();
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.topBar}>
        <Grid container justify="center">
          <Grid item lg={12} xs={12} sm={12} md={12} style={{ maxWidth: 1050 }}>
            <Toolbar className={classes.toolbar}>
              {location.pathname === "/" ? (
                <>
                  <Link className={classes.link} to="/">
                    <Typography className={classes.logo}>MyShop</Typography>
                    <IconButton
                      onClick={toggleDrawer("top", true)}
                      className={classes.responDua}
                    >
                      <MenuIcon style={{ fontSize: 25 }} />
                    </IconButton>
                  </Link>
                </>
              ) : (
                <MenuItem onClick={back} style={{ padding: 0 }}>
                  <ArrowBackIcon
                    style={{
                      color: "black",
                      margin: 0,
                    }}
                    fontSize="large"
                  />
                </MenuItem>
              )}

              <SwipeableDrawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                onOpen={toggleDrawer("top", true)}
              >
                {list("top")}
              </SwipeableDrawer>
              <div className={classes.kanan}>
                <MenuItem onClick={() => goTo()} className={classes.respon}>
                  <DataUsageOutlinedIcon style={{ fontSize: 30 }} />
                </MenuItem>
                <Link to="/addItem">
                  <MenuItem className={classes.respon}>
                    <AddIcon style={{ fontSize: 30, color: "black" }} />
                  </MenuItem>
                </Link>
                <Badge
                  className={classes.respon}
                  badgeContent={4}
                  color="secondary"
                >
                  <ShoppingBasketOutlinedIcon style={{ fontSize: 30 }} />
                </Badge>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <MenuItem
                  onClick={handleProfileMenuOpen}
                  className={classes.respon}
                  style={{ margin: 0 }}
                >
                  <AccountCircle style={{ fontSize: 30 }} />
                </MenuItem>
              </div>
            </Toolbar>
          </Grid>
          {renderMenu}
        </Grid>
      </AppBar>
    </div>
  );
}
