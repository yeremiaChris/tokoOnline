import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
const useStyles = makeStyles((theme) => ({
  footer: {
    width: 1280,
    color: "white",
    fontSize: 15,
  },
  container: {
    backgroundColor: "grey",
    padding: 20,
  },
  satu: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  dua: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  tiga: {
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
  list: {
    fontSize: 20,
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  icon: {
    justifyContent: "space-between",
    display: "flex",
  },
}));
function Footer() {
  const styles = useStyles();
  return (
    <Grid container justify="center" className={styles.container}>
      <Grid item className={styles.footer}>
        <Grid container>
          <Grid item lg={4} md={4} sm={12} xs={12} className={styles.satu}>
            <h2>Informasi Toko</h2>
            <div className={styles.list}>
              <ul className={styles.ul}>
                <li>Tentang Kami</li>
                <li>FAQ</li>
                <li>News</li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className={styles.dua}>
            <h2>Informasi Pelanggan</h2>
            <div className={styles.list}>
              <ul className={styles.ul}>
                <li>Kontak Kami</li>
                <li>Cara Pemesanan</li>
                <li>Konfirmasi Pembayaran</li>
              </ul>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className={styles.tiga}>
            <div>
              <h2>Join Us</h2>
              <div className={styles.list}>
                <ul className={styles.ul}>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Whatsapp</li>
                </ul>
              </div>
            </div>
            <div>
              <h2>MY SHOP</h2>
              <div className={styles.icon}>
                <InstagramIcon />
                <FacebookIcon />
                <GitHubIcon />
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Footer;
