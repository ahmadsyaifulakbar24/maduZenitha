import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Hilang = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {},
}));

const Muncul = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

function CheckoutPage() {
  const theme = useTheme();
  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 1000,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              height: 1600,
              width: 900,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 20,
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 17,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                textDecoration: 'underline',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  textDecoration: 'underline',
                },
              }}
            >
              BERANDA
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                mx: 1,
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  mx: 1,
                },
              }}
            >
              /
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  color: 'gray',
                },
              }}
            >
              Keranjang
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                mx: 1,
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  mx: 1,
                },
              }}
            >
              /
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: 'gray',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  color: 'gray',
                },
              }}
            >
              Pembelian
            </Typography>
          </Box>

          <Box
            sx={{
              height: '30%',
              width: '100%',
              mt: 5,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box sx={{ width: '40%' }}>
              <Box sx={{ mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}
                >
                  Lakukan Pembayaran Dalam
                </Typography>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'red',
                    [theme.breakpoints.down('md')]: {
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: 'red',
                      my: 3,
                    },
                  }}
                >
                  23 : 52 : 46
                </Typography>
                <Typography sx={{ fontSize: 20, color: 'gray' }}>
                  Batas Akhir Pembayaran
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                  Minggu, 25 Juli 2021 08:28
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: '60%' }}>
              <Box
                sx={{
                  border: 1,
                  borderColor: 'gray',
                  borderRadius: 2,
                  // height: '60%',
                  height: '90%',
                }}
              >
                <Box
                  sx={{
                    height: '20%',
                    borderBottom: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ ml: 3, fontWeight: 'bold' }}>
                    Bank BRI (Dicek Otomatis)
                  </Typography>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: 'blue',
                      mr: 3,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    height: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 1,
                      mx: 3,
                      //   bgcolor: 'green',
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                      No. Order
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>#DSAF34</Typography>
                  </Box>

                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      //   bgcolor: 'green',
                    }}
                  >
                    <Box sx={{ ml: 3 }}>
                      <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                        Kode Pembayaran
                      </Typography>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        2132143215
                      </Typography>
                    </Box>
                    <Button sx={{ mr: 3, fontWeight: 'bold', color: 'orange' }}>
                      SALIN
                    </Button>
                  </Box>

                  <Box
                    sx={{
                      height: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ ml: 3 }}>
                      <Typography sx={{ fontWeight: 'bold', color: 'gray' }}>
                        Total Pembayaran
                      </Typography>
                      <Typography sx={{ fontWeight: 'bold' }}>
                        Rp 120.980
                      </Typography>
                    </Box>
                    <Button sx={{ mr: 3, fontWeight: 'bold', color: 'orange' }}>
                      Lihat Detail
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    height: '20%',
                    borderTop: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    sx={{
                      width: '30%',
                      height: '60%',
                      border: 1,
                      borderColor: 'orange',
                      bgcolor: 'orange',
                      textTransform: 'capitalize',
                      mr: 3,
                    }}
                  >
                    <Typography
                      sx={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                    >
                      Upload Bukti Transfer
                    </Typography>
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  mt: 3,
                  height: 70,
                }}
              >
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    sx={{
                      width: 300,
                      height: 70,
                      border: 1,
                      borderColor: 'orange',
                      bgcolor: 'white',
                      textTransform: 'capitalize',
                      [theme.breakpoints.down('md')]: {
                        width: 250,
                        height: 70,
                        border: 1,
                        borderColor: 'orange',
                        bgcolor: 'white',
                        textTransform: 'capitalize',
                      },
                    }}
                  >
                    <Typography
                      sx={{ color: 'orange', fontWeight: 'bold', fontSize: 20 }}
                    >
                      Belanja Lagi
                    </Typography>
                  </Button>
                </Link>
                <Button
                  sx={{
                    width: '49%',
                    border: 1,
                    borderColor: 'orange',
                    bgcolor: 'orange',
                    textTransform: 'capitalize',
                  }}
                >
                  <Typography
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
                  >
                    Cek Status Orderan
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              color: 'gray',
              mt: 30,
              [theme.breakpoints.down('md')]: {
                color: 'gray',
                mt: 12,
                fontSize: 20,
              },
            }}
          >
            Catatan
          </Typography>
          <Typography
            sx={{
              color: 'gray',
              ml: 1,
              mt: 2,
              display: 'flex',
              flexDirection: 'row',
              [theme.breakpoints.down('md')]: {
                color: 'gray',
                ml: 1,
                mt: 2,
                display: 'flex',
                flexDirection: 'row',
                fontSize: 20,
              },
            }}
          >
            •
            <Typography
              sx={{
                fontWeight: 'bold',
                mx: 1,
                [theme.breakpoints.down('md')]: {
                  fontWeight: 'bold',
                  mx: 1,
                  fontSize: 20,
                },
              }}
            >
              Simpan bukti pembayaran
            </Typography>
            yang sewaktu-waktu diperlukan jika terjadi kendala transaksi
          </Typography>
          <Hilang>
            <Typography
              sx={{
                color: 'gray',
                ml: 1,
                mt: 2,
                display: 'flex',
                flexDirection: 'row',
                [theme.breakpoints.down('md')]: {
                  color: 'gray',
                  ml: 1,
                  mt: 2,
                  display: 'flex',
                  flexDirection: 'row',
                  fontSize: 20,
                },
              }}
            >
              • Pesanan
              <Typography
                sx={{
                  color: 'red',
                  mx: 1,
                  [theme.breakpoints.down('md')]: {
                    color: 'red',
                    width: 240,
                    fontSize: 20,
                  },
                }}
              >
                otomatis dibatalkan
              </Typography>
              apabila tidak melakukan pembayaran lebih dari 2 hari setelah kode
              pembayaran diberikan
            </Typography>
          </Hilang>

          <Muncul>
            <Box sx={{ display: 'flex', flexDirection: 'row', ml: 1, mt: 1 }}>
              <Typography sx={{ fontSize: 20, color: 'gray', width: 105 }}>
                • Pesanan
              </Typography>
              <Typography
                sx={{
                  color: 'red',
                  fontSize: 20,
                  width: 190,
                }}
              >
                otomatis dibatalkan
              </Typography>
              <Typography
                sx={{
                  color: 'gray',
                  fontSize: 20,
                  width: 600,
                }}
              >
                apabila tidak melakukan pembayaran lebih dari 2 hari setelah
              </Typography>
            </Box>
            <Typography sx={{ color: 'gray', fontSize: 20, ml: 3 }}>
              kode pembayaran diberikan
            </Typography>
          </Muncul>
        </Box>
      </Container>
    </>
  );
}

export default CheckoutPage;
