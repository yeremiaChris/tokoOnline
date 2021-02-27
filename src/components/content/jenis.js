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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
import { convertBufferToImage } from "../../utils/utils";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: 10,
    boxShadow: "0 0 0 gray",
    width: 320,
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
  },
  terbaru: {
    textAlign: "center",
    width: "100%",
    padding: 0,
    marginBottom: 30,
  },
  buttonCard: {
    position: "relative",
    top: 160,
    zIndex: 9999,
  },
  bottom: {
    marginBottom: 20,
  },
  lihat: {
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
  },
  terbaruText: {
    fontWeight: "normal",
  },
}));
export default function Jenis() {
  // styles
  const classes = useStyles();
  // ambil data dari reducer
  const items = useSelector((state) => state.item);

  const [nextPage, setNextPage] = React.useState(12);
  const next = () => {
    setNextPage((prev) => prev + 3);
  };

  // 6 data yang di tampilkan
  const onePage = items.slice(0, nextPage);

  return (
    <>
      <Grid item xs={12} className={classes.card}>
        <div className={classes.terbaru}>
          <h1 className={classes.terbaruText}>REKOMENDASI</h1>
        </div>
        {onePage.map((item) => {
          const array = [];
          convertBufferToImage(item, array);

          return (
            <Card key={item._id} className={classes.root}>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  textAlign: "left",
                }}
                to={{
                  pathname: `/detail/${item.name}`,
                  state: {
                    nama: item.name,
                    harga: item.harga,
                    images: item.images.map((item, index) => {
                      return {
                        _id: item._id,
                        srcImage: `data:${array[index].contentType};base64,${array[index].img}`,
                      };
                    }),
                    key: item._id,
                    detail: true,
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`data:${array[0].contentType};base64,${array[0].img}`}
                    title={item.nama}
                  />
                </CardActionArea>
              </Link>
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  padding: 0,
                }}
              >
                <div>
                  <Typography
                    style={{ marginTop: 20 }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      textAlign: "left",
                      fontSize: 20,
                    }}
                  >
                    {formatRupiah(item.harga)}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      {onePage.length <= 6 ? null : (
        <Grid container justify="center" className={classes.bottom}>
          <Grid item>
            <Button onClick={next} className={classes.lihat}>
              LIHAT LAINNYA
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}
