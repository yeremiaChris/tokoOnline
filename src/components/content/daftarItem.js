import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { deleteItem, updateItem } from "./action";
import { sorting } from "../../utils/utils";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {},
  wraper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  kotak: {
    display: "flex",
    width: "100%",
  },
  kotak2: {
    width: "100%",
  },
  img: {
    objectFit: "cover",
    marginRight: 20,
    width: "100%",
    height: "100%",
  },
  formatRupiah: {
    padding: 0,
    margin: 0,
    textAlign: "left",
    marginTop: 10,
  },
}));
export default function DaftarItem({ data, setSort, setData }) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [nextPage, setNextPage] = React.useState(12);
  const next = () => {
    setNextPage((prev) => prev + 3);
  };
  // 6 data yang di tampilkan
  const onePage = data.slice(0, nextPage);
  return (
    <Grid container className={styles.container}>
      <Grid
        style={{ fontSize: 30, marginBottom: 50 }}
        item
        className={styles.wraper}
      >
        Daftar Barang
      </Grid>
      {onePage.length === 0 ? (
        <p>Item tidak tersedia</p>
      ) : (
        onePage &&
        onePage.map((item, index) => {
          return (
            <Grid key={item._id} item className={styles.wraper}>
              <div className={styles.kotak}>
                <div style={{ width: 100, height: 100 }}>
                  <img
                    className={styles.img}
                    alt={item.name}
                    src={`/uploads/${item.images[0].fileName}`}
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <h2 style={{ padding: 0, margin: 0, fontWeight: "normal" }}>
                    {item.name}
                  </h2>
                  <p className={styles.formatRupiah}>
                    {formatRupiah(item.harga)}
                  </p>
                </div>
              </div>
              <div className={styles.kotak2}>
                <Link
                  style={{ color: "black" }}
                  to={{
                    pathname: `/editItem/${item.name}`,
                    state: {
                      _id: item._id,
                      nama: item.name,
                      harga: item.harga,
                      deskripsi: item.deskripsi,
                      jenis: item.jenis,
                      images: item.images.map((item) => {
                        return {
                          key: item._id,
                          name: item.name,
                          src: item.tempat,
                          srcImage: `/uploads/${item.fileName}`,
                        };
                      }),
                    },
                  }}
                >
                  <IconButton
                    edge="start"
                    className={styles.menuButton}
                    aria-label="menu"
                  >
                    <EditOutlinedIcon fontSize="inherit" />
                  </IconButton>
                </Link>
                <IconButton
                  edge="start"
                  className={styles.menuButton}
                  onClick={() =>
                    deleteItem(
                      item.name,
                      item._id,
                      axios,
                      dispatch,
                      sorting,
                      history,
                      setSort,
                      setData,
                      location
                    )
                  }
                  aria-label="menu"
                >
                  <DeleteOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
              </div>
            </Grid>
          );
        })
      )}
      {onePage.length <= 6 ? null : (
        <Grid container justify="center" className={styles.bottom}>
          <Grid item>
            <Button onClick={next} className={styles.lihat}>
              LIHAT LAINNYA
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
