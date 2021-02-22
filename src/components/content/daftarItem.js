import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { deleteItem } from "./action";

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
  },
}));
export default function DaftarItem({ data }) {
  const styles = useStyles();
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();
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
      {onePage &&
        onePage.map((item, index) => {
          return (
            <Grid key={item._id} item className={styles.wraper}>
              <div className={styles.kotak}>
                <div>
                  <img
                    className={styles.img}
                    alt={item.name}
                    width={100}
                    src={`/uploads/${item.images[0].fileName}`}
                  />
                </div>
                <div>
                  <h2 style={{ padding: 0, margin: 0, fontWeight: "normal" }}>
                    {item.name}
                  </h2>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      textAlign: "left",
                      marginTop: 10,
                    }}
                  >
                    {formatRupiah(item.harga)}
                  </p>
                </div>
              </div>
              <div className={styles.kotak2}>
                <Link
                  style={{ color: "black" }}
                  to={{
                    pathname: `/editItem/${item.key}`,
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
                    className={styles.menuButton}
                    aria-label="menu"
                  >
                    <EditOutlinedIcon fontSize="inherit" />
                  </IconButton>
                </Link>
                <IconButton
                  edge="start"
                  className={styles.menuButton}
                  onClick={() => deleteItem(item.nama, item.key, dispatch)}
                  aria-label="menu"
                >
                  <DeleteOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
              </div>
            </Grid>
          );
        })}
      {onePage.length <= 3 ? null : (
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
