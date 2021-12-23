import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, IconButton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/FavoriteBorder';
import FavIconFill from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import MinIcon from '@mui/icons-material/Remove';
import PlusIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { orange } from '@mui/material/colors';

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

const ProdukItem = () => {
  const theme = useTheme();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card sx={{ boxShadow: 5 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          bgcolor: 'gray',
          opacity: 0.5,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          ml: 27,
          mt: 1,

          [theme.breakpoints.down('md')]: {
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
            bgcolor: 'gray',
            opacity: 0.5,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            ml: 45,
            mt: 1,
          },
        }}
      >
        <Checkbox
          {...label}
          icon={<FavIcon sx={{ color: 'white' }} />}
          checkedIcon={<FavIconFill sx={{ color: 'red' }} />}
        />
      </Box>
      <CardMedia
        component="img"
        height="250"
        image="/assets/images/image 8.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={{
            fontWeight: 'bold',
            [theme.breakpoints.down('md')]: {
              fontWeight: 'bold',
              fontSize: 30,
            },
          }}
        >
          UMMI 11
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 20,
            alignItems: 'center',
            my: 1,
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              flexDirection: 'row',
              height: 50,
              alignItems: 'center',
              my: 1,
            },
          }}
        >
          <Typography
            sx={{
              paddingX: 1,
              fontWeight: 'bold',
              color: 'orange',
              fontSize: 13,
              [theme.breakpoints.down('md')]: {
                paddingX: 1,
                fontWeight: 'bold',
                color: 'orange',
                fontSize: 20,
              },
            }}
          >
            40%
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: 'gray',
              fontSize: 13,
              [theme.breakpoints.down('md')]: {
                fontWeight: 'bold',
                color: 'gray',
                ml: 1,
                fontSize: 20,
              },
            }}
          >
            Rp.188.300
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: 'bold',
            color: 'red',
            fontSize: 20,
            [theme.breakpoints.down('md')]: {
              fontWeight: 'bold',
              color: 'red',
              fontSize: 30,
            },
          }}
        >
          Rp.188.300
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 40,
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              borderColor: 'orange',
              mr: 3,
              [theme.breakpoints.down('md')]: {
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                borderColor: 'orange',
                height: 50,
                width: 100,
                mr: 3,
              },
            }}
          >
            <CartIcon sx={{ color: 'orange' }} />
          </Button>
          <Link to="/detail-produk" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'orange',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'orange',
                flexDirection: 'column-reverse',
                textTransform: 'capitalize',
                width: 150,
                [theme.breakpoints.down('md')]: {
                  backgroundColor: 'orange',
                  color: 'white',
                  fontWeight: 'bold',
                  borderColor: 'orange',
                  flexDirection: 'column-reverse',
                  textTransform: 'capitalize',
                  height: 50,
                  width: 250,
                },
              }}
            >
              Beli
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 10,
  width: 600,
  height: 550,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

function CartPage() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container fixed>
        <Box
          sx={{
            height: 600,
            [theme.breakpoints.down('md')]: {
              height: 600,
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
                paddingTop: 16,
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
          </Box>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 30,
              mt: 5,
              [theme.breakpoints.down('md')]: {
                fontWeight: 'bold',
                fontSize: 50,
                mt: 5,
              },
            }}
          >
            Keranjang
          </Typography>

          <Box
            sx={{
              height: 250,
              display: 'flex',
              flexDirection: 'row',
              mt: 5,
              [theme.breakpoints.down('md')]: {
                height: 500,
                display: 'flex',
                flexDirection: 'column',
                mt: 5,
              },
            }}
          >
            <Box
              sx={{
                width: '60%',
                [theme.breakpoints.down('md')]: {
                  width: '95%',
                },
              }}
            >
              <Box
                sx={{
                  height: 50,
                  display: 'flex',
                  flexDirection: 'row',
                  borderBottom: 2,
                  borderBottomColor: 'gray',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  ml: 4,
                  [theme.breakpoints.down('md')]: {
                    height: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottom: 2,
                    borderBottomColor: 'gray',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <FormGroup
                  sx={{
                    [theme.breakpoints.down('md')]: {
                      transform: 'scale(1.5)',
                      ml: 4,
                    },
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: orange[800],
                          '&.Mui-checked': {
                            color: orange[800],
                          },
                        }}
                      />
                    }
                    label="Pilih Semua"
                  />
                </FormGroup>
                <Typography
                  sx={{ fontWeight: 'bold', fontSize: 20, color: 'orange' }}
                >
                  Hapus
                </Typography>
              </Box>
              <Box
                sx={{
                  height: 100,
                  ml: 4,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  [theme.breakpoints.down('md')]: {
                    height: 150,
                    ml: 4,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  },
                }}
              >
                <Checkbox
                  defaultChecked
                  color="secondary"
                  sx={{
                    ml: -1,
                    color: orange[800],
                    '&.Mui-checked': {
                      color: orange[800],
                    },
                    [theme.breakpoints.down('md')]: {
                      transform: 'scale(1.5)',
                      color: orange[800],
                      '&.Mui-checked': {
                        color: orange[800],
                      },
                    },
                  }}
                />
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: 1,
                    bgcolor: 'white',
                    border: 1,
                    borderColor: 'orange',
                    mr: 3,
                    ml: 2,
                    [theme.breakpoints.down('md')]: {
                      width: 120,
                      height: 120,
                      borderRadius: 1,
                      bgcolor: 'white',
                      border: 1,
                      borderColor: 'orange',
                      mr: 3,
                      ml: 2,
                      mt: 2,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/image 8.png"
                    sx={{ height: '100%', borderRadius: 1 }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 300,
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        color: 'gray',
                        fontSize: 25,
                      },
                    }}
                  >
                    UMMI 11 - Gamis Zenitha
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      [theme.breakpoints.down('md')]: {
                        display: 'flex',
                        flexDirection: 'row',
                        width: 500,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        mr: 3,
                        color: 'orange',
                        [theme.breakpoints.down('md')]: {
                          mr: 3,
                          color: 'orange',
                          fontSize: 25,
                        },
                      }}
                    >
                      Warna: Abu - Abu
                    </Typography>
                    <Typography
                      sx={{
                        color: 'orange',
                        [theme.breakpoints.down('md')]: {
                          color: 'orange',
                          fontSize: 25,
                        },
                      }}
                    >
                      Ukuran: L
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 25,
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  height: 30,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  ml: 4,
                  [theme.breakpoints.down('md')]: {
                    height: 60,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    ml: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    mr: 2,
                    width: 150,
                    [theme.breakpoints.down('md')]: {
                      mr: 2,
                      width: 200,
                      fontSize: 20,
                    },
                  }}
                >
                  Pindah ke Wishlist
                </Typography>
                <Checkbox
                  {...label}
                  icon={
                    <FavIconFill
                      sx={{
                        [theme.breakpoints.down('md')]: {
                          fontSize: 30,
                        },
                      }}
                    />
                  }
                  checkedIcon={
                    <FavIconFill
                      sx={{
                        color: 'red',
                        [theme.breakpoints.down('md')]: {
                          fontSize: 30,
                          color: 'red',
                        },
                      }}
                    />
                  }
                />
                <Box
                  sx={{
                    height: 1,
                    border: 1,
                    borderColor: 'gray',
                    mx: 2,
                    [theme.breakpoints.down('md')]: {
                      height: '50%',
                      border: 1,
                      borderColor: 'gray',
                      mx: 2,
                    },
                  }}
                />
                <IconButton>
                  <DeleteIcon
                    sx={{
                      [theme.breakpoints.down('md')]: {
                        fontSize: 30,
                        mr: 10,
                      },
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    width: 150,
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    ml: 30,
                  }}
                >
                  <Box
                    sx={{
                      width: '31%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: 1,
                      borderColor: 'orange',
                    }}
                  >
                    <IconButton>
                      <MinIcon sx={{ color: 'orange' }} />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      width: '34%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: 3,
                      mx: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      1
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: '31%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: 1,
                      borderColor: 'orange',
                    }}
                  >
                    <IconButton>
                      <PlusIcon sx={{ color: 'orange' }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Muncul>
              <Box sx={{ width: '95%', ml: 2, mt: 5 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    [theme.breakpoints.down('md')]: {
                      fontWeight: 'bold',
                      fontSize: 30,
                    },
                  }}
                >
                  Total Belanja
                </Typography>
                <Box
                  sx={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderBottomStyle: 'dashed',
                    borderBottomColor: 'gray',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        color: 'gray',
                        fontSize: 20,
                      },
                    }}
                  >
                    Total Harga (1 Produk)
                  </Typography>
                  <Typography
                    sx={{
                      color: 'gray',
                      [theme.breakpoints.down('md')]: {
                        color: 'gray',
                        fontSize: 20,
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    }}
                  >
                    Total Harga
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                        fontSize: 20,
                      },
                    }}
                  >
                    Rp 112.980
                  </Typography>
                </Box>

                <Button
                  onClick={handleOpen}
                  sx={{
                    width: '100%',
                    border: 1,
                    borderColor: 'orange',
                    bgcolor: 'orange',
                    mt: 3,
                    [theme.breakpoints.down('md')]: {
                      width: '80%',
                      height: 80,
                      border: 1,
                      borderColor: 'orange',
                      bgcolor: 'orange',
                      mt: 5,
                      ml: 11,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      [theme.breakpoints.down('md')]: {
                        color: 'white',
                        fontSize: 25,
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Beli (1)
                  </Typography>
                </Button>
              </Box>
            </Muncul>

            <Hilang>
              <Box sx={{ width: '100%', ml: 5 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
                  Total Belanja
                </Typography>
                <Box
                  sx={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: 1,
                    borderBottomStyle: 'dashed',
                    borderBottomColor: 'gray',
                  }}
                >
                  <Typography sx={{ color: 'gray' }}>
                    Total Harga (1 Produk)
                  </Typography>
                  <Typography sx={{ color: 'gray' }}>Rp 112.980</Typography>
                </Box>
                <Box
                  sx={{
                    height: 50,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Total Harga
                  </Typography>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Rp 112.980
                  </Typography>
                </Box>
                <Button
                  onClick={handleOpen}
                  sx={{
                    width: '100%',
                    border: 1,
                    borderColor: 'orange',
                    bgcolor: 'orange',
                    mt: 3,
                  }}
                >
                  <Typography sx={{ color: 'white' }}>Beli (1)</Typography>
                </Button>
              </Box>
            </Hilang>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 850,
            mt: 5,
            mb: 20,
            [theme.breakpoints.down('md')]: {
              height: 2050,
              width: 900,
              mt: 40,
              mb: 20,
            },
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Rekomendasi Untukmu
          </Typography>
          <Box
            sx={{
              height: '50%',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
              <Grid item xs={6} md={3}>
                {ProdukItem()}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop="true"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              mb: 2,
              ml: 70,
              mt: -2,
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, ml: 27 }}>
            Tambah Alamat
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
            <Box sx={{ width: '50%', mr: 2 }}>
              <Typography>Nama Penerima</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: '100%', mt: 1 }}
              />
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography>Nomor Telepon</Typography>
              <TextField
                placeholder="Contoh: 08222222"
                id="outlined-basic"
                variant="outlined"
                sx={{ width: '100%', mt: 1 }}
              />
            </Box>
          </Box>

          <Typography sx={{ mt: 4 }}>Alamat</Typography>
          <TextField
            placeholder="Lorem Ipsum"
            id="outlined-basic"
            variant="outlined"
            sx={{ width: '100%', mt: 1 }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4 }}>
            <Box sx={{ width: '50%', mr: 2 }}>
              <Typography>Kota/Kecamatan</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: '100%', mt: 1 }}
              />
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography>Kode Pos</Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{ width: '100%', mt: 1 }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 5,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 100,
              borderTop: 1,
              borderTopColor: 'black',
            }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                borderColor: 'orange',

                borderRadius: 2,
                width: 250,
                height: 50,
                textTransform: 'capitalize',
                fontSize: 20,
              }}
            >
              Batal
            </Button>
            <Link to="/tagihan-page" style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'orange',
                  color: 'white',
                  fontWeight: 'bold',
                  borderColor: 'orange',

                  borderRadius: 2,
                  width: 250,
                  height: 50,
                  textTransform: 'capitalize',
                  fontSize: 20,
                }}
              >
                Simpan
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default CartPage;
