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
import ShareIcon from '@mui/icons-material/Share';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MinIcon from '@mui/icons-material/Remove';
import PlusIcon from '@mui/icons-material/Add';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
          Madu Murni Super (250gr)
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function DetailProduk() {
  const [warna, setWarna] = React.useState('');

  const handleChange = (event) => {
    setWarna(event.target.value);
  };

  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container fixed>
        <Box
          sx={{ height: 800, borderBottom: 1, borderBottomColor: 'lightgrey' }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: 17,
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
                paddingTop: 15,
                width: 900,
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
                textDecoration: 'underline',
                [theme.breakpoints.down('md')]: {
                  fontSize: 18,
                  textDecoration: 'underline',
                },
              }}
            >
              DETAIL PRODUK
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
              UMMI 11
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              height: 550,
              mt: 4,
              [theme.breakpoints.down('md')]: {
                display: 'flex',
                flexDirection: 'row',
                height: 550,
                width: 900,
                mt: 4,
              },
            }}
          >
            <Box
              sx={{
                width: '10%',
                mr: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                [theme.breakpoints.down('md')]: {
                  width: '15%',
                  mr: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                },
              }}
            >
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'orange',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/images/image 8.png"
                  sx={{
                    height: '100%',
                    border: 1,
                    borderColor: 'orange',
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'orange',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/images/image 8.png"
                  sx={{
                    height: '100%',
                    border: 1,
                    borderColor: 'orange',
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'orange',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/images/image 8.png"
                  sx={{
                    height: '100%',
                    border: 1,
                    borderColor: 'orange',
                    borderRadius: 1,
                  }}
                />
              </Box>
              <Box
                sx={{
                  height: '23%',
                  borderRadius: 1,
                  bgcolor: 'white',
                  border: 1,
                  borderColor: 'orange',
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/images/image 8.png"
                  sx={{
                    height: '100%',
                    border: 1,
                    borderColor: 'orange',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                width: '45%',
                mr: 5,
                [theme.breakpoints.down('md')]: {
                  width: '75%',
                  mr: 5,
                },
              }}
            >
              <CardMedia
                component="img"
                image="/assets/images/image 8.png"
                sx={{
                  height: '95%',
                  border: 1,
                  borderColor: 'orange',
                  borderRadius: 1,
                }}
              />
            </Box>

            <Hilang>
              <Box sx={{ width: '100%' }}>
                <Box
                  sx={{
                    height: '30%',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 17,
                      }}
                    >
                      Kode Produk
                    </Typography>
                    <Typography sx={{ fontSize: 17, mx: 1 }}>:</Typography>
                    <Typography
                      sx={{
                        fontSize: 17,
                        fontWeight: 'bold',
                      }}
                    >
                      3393
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold', my: 3 }}>
                    Ummi 11 - Gamis Zenitha
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 15,
                      }}
                    >
                      Stok Tersedia
                    </Typography>
                    <Typography sx={{ fontSize: 15, mr: 1 }}>:</Typography>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: '20%',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                  }}
                >
                  <Typography sx={{ fontSize: 17, my: 3, color: 'gray' }}>
                    Harga:
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        color: 'red',
                        fontWeight: 'bold',
                        mr: 1,
                      }}
                    >
                      Rp112.980
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 20,
                        color: 'gray',
                        fontWeight: 'bold',
                        textDecoration: 'line-through',
                      }}
                    >
                      Rp188.300
                    </Typography>
                  </Box>
                  <IconButton sx={{ mt: -10, ml: 60 }}>
                    <ShareIcon />
                  </IconButton>
                </Box>

                <Box sx={{ height: '50%' }}>
                  <Box
                    sx={{
                      height: '33%',
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Box
                      sx={{
                        width: '50%',
                        mt: 1,
                      }}
                    >
                      <Typography>Quantity</Typography>
                      <Box
                        sx={{
                          width: 200,
                          height: 50,
                          border: 1,
                          borderColor: 'orange',
                          borderRadius: 1,
                          display: 'flex',
                          flexDirection: 'row',
                          [theme.breakpoints.down('md')]: {
                            width: 180,
                            height: 50,
                            border: 1,
                            borderColor: 'orange',
                            borderRadius: 1,
                            display: 'flex',
                            flexDirection: 'row',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: '33.5%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <IconButton>
                            <MinIcon
                              sx={{
                                fontSize: 40,
                                color: 'orange',
                                [theme.breakpoints.down('md')]: {
                                  fontSize: 28,
                                  color: 'orange',
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            width: '33%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bgcolor: 'orange',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 30,
                              color: 'white',
                              fontWeight: 'bold',
                              [theme.breakpoints.down('md')]: {
                                fontSize: 18,
                                color: 'white',
                                fontWeight: 'bold',
                              },
                            }}
                          >
                            1
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: '33.5%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <IconButton>
                            <PlusIcon
                              sx={{
                                fontSize: 40,
                                color: 'orange',
                                [theme.breakpoints.down('md')]: {
                                  fontSize: 28,
                                  color: 'orange',
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ width: '50%', mt: 1 }}>
                      <Typography>Warna</Typography>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={warna}
                            label="Warna"
                            onChange={handleChange}
                          >
                            <MenuItem value={'abuabu'}>Abu-Abu</MenuItem>
                            <MenuItem value={'gold'}>Gold</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ height: '33%' }}>
                    <Typography>Ukuran</Typography>
                    <Box
                      sx={{
                        height: 50,
                        width: '80%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>S</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>M</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>2L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>3L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>XL</Typography>
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      height: '33%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      mt: 2,
                    }}
                  >
                    <Link to="/cart-page" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: 'orange',
                          color: 'white',
                          fontWeight: 'bold',
                          borderColor: 'orange',
                          height: 50,
                          textTransform: 'capitalize',
                          [theme.breakpoints.down('md')]: {
                            backgroundColor: 'orange',
                            color: 'white',
                            fontWeight: 'bold',
                            borderColor: 'orange',
                            width: 180,
                            height: 50,
                            textTransform: 'capitalize',
                          },
                        }}
                      >
                        <CartIcon />
                        <Typography
                          sx={{
                            ml: 1,
                            fontWeight: 'bold',
                            [theme.breakpoints.down('md')]: {
                              ml: 1,
                              fontWeight: 'bold',
                              fontSize: 12,
                            },
                          }}
                        >
                          Tambah Keranjang
                        </Typography>
                      </Button>
                    </Link>
                    <Button
                      sx={{
                        height: 50,
                        border: 1,
                        borderColor: 'orange',
                        width: 50,
                        borderRadius: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox
                        {...label}
                        icon={<FavIcon sx={{ color: 'gray' }} />}
                        checkedIcon={<FavIconFill sx={{ color: 'red' }} />}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: 'orange',
                        color: 'white',
                        fontWeight: 'bold',
                        borderColor: 'orange',
                        height: 50,
                        width: 150,
                        textTransform: 'capitalize',
                      }}
                    >
                      Beli
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Hilang>
          </Box>

          <Muncul>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                height: 550,
                mt: 4,
                [theme.breakpoints.down('md')]: {
                  display: 'flex',
                  flexDirection: 'row',
                  height: 550,
                  width: 900,
                  mt: 2,
                },
              }}
            >
              <Box sx={{ width: 900 }}>
                <Box
                  sx={{
                    height: '30%',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 23,
                      }}
                    >
                      Kode Produk
                    </Typography>
                    <Typography sx={{ fontSize: 23, mx: 1 }}>:</Typography>
                    <Typography
                      sx={{
                        fontSize: 23,
                        fontWeight: 'bold',
                      }}
                    >
                      3393
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: 36, fontWeight: 'bold', my: 3 }}>
                    Ummi 11 - Gamis Zenitha
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 21,
                      }}
                    >
                      Stok Tersedia
                    </Typography>
                    <Typography sx={{ fontSize: 21, mr: 1 }}>:</Typography>
                    <Typography
                      sx={{
                        fontSize: 21,
                        fontWeight: 'bold',
                      }}
                    >
                      3
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    height: '20%',
                    borderBottom: 1,
                    borderBottomColor: 'lightgrey',
                  }}
                >
                  <Typography sx={{ fontSize: 23, my: 3, color: 'gray' }}>
                    Harga:
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 26,
                        color: 'red',
                        fontWeight: 'bold',
                        mr: 5,
                      }}
                    >
                      Rp112.980
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 26,
                        color: 'gray',
                        fontWeight: 'bold',
                        textDecoration: 'line-through',
                      }}
                    >
                      Rp188.300
                    </Typography>
                  </Box>
                  <IconButton sx={{ mt: -10, ml: 60 }}>
                    <ShareIcon sx={{ fontSize: 35 }} />
                  </IconButton>
                </Box>

                <Box sx={{ height: '50%' }}>
                  <Box
                    sx={{
                      height: '33%',
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Box
                      sx={{
                        width: '50%',
                        mt: 1,
                      }}
                    >
                      <Typography>Quantity</Typography>
                      <Box
                        sx={{
                          width: '80%',
                          height: 50,
                          border: 1,
                          borderColor: 'orange',
                          borderRadius: 1,
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >
                        <Box
                          sx={{
                            width: '33.5%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <IconButton>
                            <MinIcon
                              sx={{
                                fontSize: 40,
                                color: 'orange',
                                [theme.breakpoints.down('md')]: {
                                  fontSize: 28,
                                  color: 'orange',
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            width: '33%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bgcolor: 'orange',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 30,
                              color: 'white',
                              fontWeight: 'bold',
                              [theme.breakpoints.down('md')]: {
                                fontSize: 18,
                                color: 'white',
                                fontWeight: 'bold',
                              },
                            }}
                          >
                            1
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: '33.5%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <IconButton>
                            <PlusIcon
                              sx={{
                                fontSize: 40,
                                color: 'orange',
                                [theme.breakpoints.down('md')]: {
                                  fontSize: 28,
                                  color: 'orange',
                                },
                              }}
                            />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ width: '50%', mt: 1 }}>
                      <Typography>Warna</Typography>
                      <Box>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label"></InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={warna}
                            label="Warna"
                            onChange={handleChange}
                          >
                            <MenuItem value={'abuabu'}>Abu-Abu</MenuItem>
                            <MenuItem value={'gold'}>Gold</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ height: '33%', mt: 2 }}>
                    <Typography>Ukuran</Typography>
                    <Box
                      sx={{
                        height: 50,
                        width: '60%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>S</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>M</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>2L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>3L</Typography>
                      </Button>
                      <Button
                        sx={{ width: 25, border: 1, borderColor: 'orange' }}
                      >
                        <Typography sx={{ color: 'orange' }}>XL</Typography>
                      </Button>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      height: '33%',
                      display: 'flex',
                      flexDirection: 'row',
                      mt: 2,
                    }}
                  >
                    <Link to="/cart-page">
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: 'orange',
                          color: 'white',
                          fontWeight: 'bold',
                          borderColor: 'orange',
                          height: 50,
                          textTransform: 'capitalize',
                          mr: 5,
                        }}
                      >
                        <CartIcon />
                        <Typography
                          sx={{
                            ml: 1,
                            fontWeight: 'bold',
                          }}
                        >
                          Tambah Keranjang
                        </Typography>
                      </Button>
                    </Link>
                    <Button
                      sx={{
                        height: 50,
                        border: 1,
                        borderColor: 'orange',
                        width: 50,
                        borderRadius: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: 5,
                      }}
                    >
                      <Checkbox
                        {...label}
                        icon={<FavIcon sx={{ color: 'gray' }} />}
                        checkedIcon={<FavIconFill sx={{ color: 'red' }} />}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: 'orange',
                        color: 'white',
                        fontWeight: 'bold',
                        borderColor: 'orange',
                        height: 50,
                        width: 150,
                        textTransform: 'capitalize',
                      }}
                    >
                      Beli
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Muncul>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 350,
            borderBottom: 1,
            mt: 2,
            borderBottomColor: 'lightgrey',
            // bgcolor: 'green',
            [theme.breakpoints.down('md')]: {
              height: 450,
              width: 900,
              borderBottom: 1,
              mt: 70,
              borderBottomColor: 'gray',
            },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  label="Deskripsi"
                  {...a11yProps(0)}
                  sx={{ textTransform: 'capitalize', mr: 10, fontSize: 20 }}
                />
                <Tab
                  label="Detail"
                  {...a11yProps(1)}
                  sx={{ textTransform: 'capitalize', fontSize: 20 }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Typography sx={{ color: 'blue', fontSize: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi
                maximus quis. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Pellentesque luctus ac
                nunc vitae molestie. Nullam viverra, elit vel lobortis lacinia,
                orci justo imperdiet mauris, facilisis gravida nibh risus ac
                leo. Donec quis nisl a mi venenatis sodales sit amet sed urna.
                Etiam massa tortor, suscipit nec ante feugiat, dapibus vulputate
                tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce in malesuada lorem. Nam iaculis lacinia ligula, ut
                faucibus mi maximus quis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
                Pellentesque luctus ac nunc vitae molestie. Nullam viverra, elit
                vel lobortis lacinia, orci justo imperdiet mauris, facilisis
                gravida nibh risus ac leo. Donec quis nisl a mi venenatis
                sodales sit amet sed urna. Etiam massa tortor, suscipit nec ante
                feugiat, dapibus vulputate tortor.
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography sx={{ color: 'green', fontSize: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi
                maximus quis. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Pellentesque luctus ac
                nunc vitae molestie. Nullam viverra, elit vel lobortis lacinia,
                orci justo imperdiet mauris, facilisis gravida nibh risus ac
                leo. Donec quis nisl a mi venenatis sodales sit amet sed urna.
                Etiam massa tortor, suscipit nec ante feugiat, dapibus vulputate
                tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce in malesuada lorem. Nam iaculis lacinia ligula, ut
                faucibus mi maximus quis. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
                Pellentesque luctus ac nunc vitae molestie. Nullam viverra, elit
                vel lobortis lacinia, orci justo imperdiet mauris, facilisis
                gravida nibh risus ac leo. Donec quis nisl a mi venenatis
                sodales sit amet sed urna. Etiam massa tortor, suscipit nec ante
                feugiat, dapibus vulputate tortor.
              </Typography>
            </TabPanel>
          </Box>
          {/* <Box
            sx={{
              height: 50,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: 150,
                borderBottom: 2,
                borderBottomColor: 'orange',
                display: 'flex',
                alignItems: 'center',
                mr: 10,
              }}
            >
              <Button sx={{ textTransform: 'capitalize' }}>
                <Typography sx={{ fontSize: 20, color: 'orange' }}>
                  Deskripsi
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                width: 150,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button sx={{ textTransform: 'capitalize' }}>
                <Typography sx={{ fontSize: 20, color: 'gray' }}>
                  Detail
                </Typography>
              </Button>
            </Box>
          </Box>
          <Typography sx={{ mt: 3, fontSize: 20, color: 'gray' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
            malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi maximus
            quis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Pellentesque luctus ac nunc vitae
            molestie. Nullam viverra, elit vel lobortis lacinia, orci justo
            imperdiet mauris, facilisis gravida nibh risus ac leo. Donec quis
            nisl a mi venenatis sodales sit amet sed urna. Etiam massa tortor,
            suscipit nec ante feugiat, dapibus vulputate tortor. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fusce in malesuada
            lorem. Nam iaculis lacinia ligula, ut faucibus mi maximus quis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Pellentesque luctus ac nunc vitae molestie.
            Nullam viverra, elit vel lobortis lacinia, orci justo imperdiet
            mauris, facilisis gravida nibh risus ac leo. Donec quis nisl a mi
            venenatis sodales sit amet sed urna. Etiam massa tortor, suscipit
            nec ante feugiat, dapibus vulputate tortor.
          </Typography> */}
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 550,
            mt: 5,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              height: 1150,
              width: 900,
              borderBottom: 1,
              borderBottomColor: 'gray',
            },
          }}
        >
          <Box
            sx={{
              height: 70,

              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}>
              Produk Serupa
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', fontSize: 25, color: 'orange' }}
            >
              Lihat Semua
            </Typography>
          </Box>

          <Box
            sx={{
              height: '90%',
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
            </Grid>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 550,
            mt: 5,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              height: 1150,
              width: 900,
              borderBottom: 1,
              borderBottomColor: 'gray',
            },
          }}
        >
          <Box
            sx={{
              height: 70,

              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: 30 }}>
              Paling Laris
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', fontSize: 25, color: 'orange' }}
            >
              Lihat Semua
            </Typography>
          </Box>

          <Box
            sx={{
              height: '90%',
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
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default DetailProduk;
