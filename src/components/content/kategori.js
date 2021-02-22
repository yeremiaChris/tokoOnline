import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
  Button,
} from "@material-ui/core";
import Image1 from "../../image/black.jpeg";
import Image2 from "../../image/white.jpeg";
import Image3 from "../../image/tan.jpeg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { sorting } from "../../utils/utils";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: 10,
    boxShadow: "0 0 0 gray",
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  media: {
    height: 320,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    marginTop: 50,
  },

  //   card
  cardItem: {
    backgroundColor: "red",
    width: 320,
    height: 320,
    backgroundImage: "url(" + Image1 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  button: {
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    fontWeight: "bold",
  },
}));

// dummy data
const data = [
  {
    nama: "T-Shirt",
    stok: 2,
    image: Image1,
    key: "1",
  },
  {
    nama: "Shirt",
    stok: 2,
    image: Image2,
    key: "2",
  },
  {
    nama: "Shoes",
    stok: 2,
    image: Image3,
    key: "3",
  },
];
export default function Kategori({ items, setSort, setData }) {
  // styles
  const classes = useStyles();

  // ke content
  const history = useHistory();

  const goTo = (nama) => {
    sorting(items, setSort, setData, nama);
    history.push({
      pathname: `/content`,
      state: {
        jenis: nama,
      },
    });
  };
  //
  return (
    <>
      <Grid item xs={12} className={classes.card}>
        {data.map((item) => {
          return (
            <Card className={classes.root} key={item.key}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.nama}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.nama}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Button
                    onClick={() => goTo(item.nama)}
                    className={classes.button}
                    variant="outlined"
                  >
                    Shop Now
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}
