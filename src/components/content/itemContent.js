import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { deleteItem } from "./action";
import { formatRupiah } from "../../redux/formatRupiah";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 0 gray",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: 259,
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 245,
    },
  },
  media: {
    height: 250,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  buttonCard: {
    position: "relative",
    top: 160,
    zIndex: 9999,
  },
  available: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    padding: 1,
    width: "25%",
    marginTop: 0,
    marginBottom: 5,
  },
}));
export default function ItemContent({ data, filter }) {
  const dispatch = useDispatch();
  // styles
  const classes = useStyles();
  // filter
  return (
    <>
      <Grid item xs={12} className={classes.card}>
        {data &&
          data.map((item) => {
            return (
              <Card key={item.key} className={classes.root}>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    textAlign: "left",
                  }}
                  to={{
                    pathname: `/detail/${item.nama}`,
                    state: {
                      nama: item.nama,
                      harga: item.harga,
                      gambar: item.image,
                      gambarBanyak: item.images,
                      key: item.key,
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.image}
                      title={item.nama}
                    />
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <p className={classes.available}>Available</p>
                    </div>
                  </CardActionArea>
                </Link>
                <CardContent
                  style={{
                    padding: 0,
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.nama}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {formatRupiah(item.harga)}
                    </Typography>
                  </div>

                  {/* <div>
                    <Link
                      style={{ color: "black" }}
                      to={{
                        pathname: "/addItem",
                        state: {
                          nama: item.nama,
                          harga: item.harga,
                          deskripsi: item.deskripsi,
                          jenis: item.jenis,
                          images: item.images,
                        },
                      }}
                    >
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                      >
                        <EditOutlinedIcon fontSize="inherit" />
                      </IconButton>
                    </Link>
                    <IconButton
                      onClick={() => deleteItem(item.nama, item.key, dispatch)}
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="menu"
                    >
                      <DeleteOutlineOutlinedIcon fontSize="inherit" />
                    </IconButton>
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
      </Grid>
    </>
  );
}
