import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavIcon from '@mui/icons-material/FavoriteBorder';
import FavIconFill from '@mui/icons-material/Favorite';
import { useTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const settings2 = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

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
              color: 'purple',
              fontSize: 13,
              [theme.breakpoints.down('md')]: {
                paddingX: 1,
                fontWeight: 'bold',
                color: 'purple',
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

function Body() {
  const theme = useTheme();
  return (
    <>
      <Box
        position="inherit"
        sx={{
          flexGrow: 1,
          [theme.breakpoints.down('md')]: {
            width: 935,
          },
        }}
      >
        <CardMedia
          component="img"
          image="/assets/images/banner.jpg"
          alt="home banner"
          sx={{
            paddingTop: 14,
            [theme.breakpoints.down('md')]: {
              paddingTop: 9,
            },
          }}
        />
      </Box>

      <Container fixed>
        <Box
          sx={{
            height: 300,
            mt: 10,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              width: 900,
              height: 300,
              borderBottom: 1,
              borderBottomColor: 'grey',
            },
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Kategori Produk
          </Typography>

          <div>
            <Slider {...settings}>
              <div>
                <Box
                  sx={{
                    width: 100,
                    height: 30,
                    mt: 2,
                    ml: 10,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/kategoriimg/madu2.png"
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      mt: 2,
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Madu Murni
                  </Typography>
                </Box>
              </div>
              <div>
                <Box
                  sx={{
                    width: 150,
                    height: 30,
                    mt: 2,
                    ml: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/kategoriimg/madu5.png"
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 14,
                      mt: 2,
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Herbal & Multivitamin
                  </Typography>
                </Box>
              </div>
              <div>
                <Box
                  sx={{
                    width: 200,
                    height: 30,
                    mt: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/kategoriimg/madu1.png"
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      mt: 2,
                      ml: 7,
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Madu Sarang
                  </Typography>
                </Box>
              </div>
              <div>
                <Box
                  sx={{
                    width: 120,
                    height: 30,
                    mt: 1,
                    ml: 6,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/kategoriimg/madu4.png"
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      mt: 2,
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Madu Hitam
                  </Typography>
                </Box>
              </div>
              <div>
                <Box
                  sx={{
                    width: 120,
                    height: 30,
                    mt: 1,
                    ml: 6,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/assets/images/kategoriimg/madu3.png"
                  />
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      mt: 2,
                      [theme.breakpoints.down('md')]: {
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    Madu Ekstraksi
                  </Typography>
                </Box>
              </div>
            </Slider>
          </div>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 500,
            mt: 10,
            borderBottom: 1,
            borderBottomColor: 'lightgrey',
            [theme.breakpoints.down('md')]: {
              width: 900,
              height: 500,
              borderBottom: 1,
              borderBottomColor: 'grey',
            },
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>
            Lagi Promo
          </Typography>
          <Box
            sx={{
              height: 400,
              borderRadius: 2,
              mt: 3,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: '20%',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                zIndex: '990',
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image="/assets/images/logo-madu-promo.jpg"
                sx={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
              />
            </Box>

            <Box
              sx={{
                width: '80%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <div>
                <Slider {...settings2}>
                  <div>
                    <Box
                      sx={{
                        width: '60%',
                        // height: 400,
                        ml: 15,
                      }}
                    >
                      <CardMedia
                        component="img"
                        // height="50%"
                        image="/assets/images/image 8.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Madu Murni Super Nectar (350gr)
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            paddingX: 2,
                            fontWeight: 'bold',
                            color: 'purple',
                            fontSize: 13,
                          }}
                        >
                          40%
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 13,
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
                          paddingLeft: 1,
                        }}
                      >
                        Rp.122.980
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                          ml: 1,
                          mt: 1,
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
                          }}
                        >
                          <CartIcon sx={{ color: 'orange' }} />
                        </Button>
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
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '60%',
                        // height: 400,
                        ml: 12,
                      }}
                    >
                      <CardMedia
                        component="img"
                        // height="50%"
                        image="/assets/images/image 16.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Madu Odeng Banteng (450gr)
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            paddingX: 2,
                            fontWeight: 'bold',
                            color: 'purple',
                            fontSize: 13,
                          }}
                        >
                          40%
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 13,
                          }}
                        >
                          Rp.159.300
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          color: 'red',
                          fontSize: 20,
                          paddingLeft: 1,
                        }}
                      >
                        Rp.64.980
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                          ml: 1,
                          mt: 1,
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
                          }}
                        >
                          <CartIcon sx={{ color: 'orange' }} />
                        </Button>
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
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '60%',
                        // height: 400,
                        ml: 10,
                      }}
                    >
                      <CardMedia
                        component="img"
                        // height="50%"
                        image="/assets/images/image 12.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Madu Sarang Azura (250gr)
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            paddingX: 2,
                            fontWeight: 'bold',
                            color: 'purple',
                            fontSize: 13,
                          }}
                        >
                          40%
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 13,
                          }}
                        >
                          Rp.259.300
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          color: 'red',
                          fontSize: 20,
                          paddingLeft: 1,
                        }}
                      >
                        Rp.134.980
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                          ml: 1,
                          mt: 1,
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
                          }}
                        >
                          <CartIcon sx={{ color: 'orange' }} />
                        </Button>
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
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>

                  <div>
                    <Box
                      sx={{
                        width: '60%',
                        // height: 400,
                        // ml: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        // height="50%"
                        image="/assets/images/image 13.png"
                        sx={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                      />
                      <Typography sx={{ fontWeight: 'bold', padding: 1 }}>
                        Madu Azuten (280gr)
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            paddingX: 2,
                            fontWeight: 'bold',
                            color: 'purple',
                            fontSize: 13,
                          }}
                        >
                          40%
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: 13,
                          }}
                        >
                          Rp.159.300
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontWeight: 'bold',
                          color: 'red',
                          fontSize: 20,
                          paddingLeft: 1,
                        }}
                      >
                        Rp.64.980
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: 40,
                          alignItems: 'center',
                          ml: 1,
                          mt: 1,
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
                          }}
                        >
                          <CartIcon sx={{ color: 'orange' }} />
                        </Button>
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
                          }}
                        >
                          Beli
                        </Button>
                      </Box>
                    </Box>
                  </div>
                </Slider>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>

      <Container fixed>
        <Box
          sx={{
            height: 600,
            mt: 10,
            [theme.breakpoints.down('md')]: {
              width: 900,
              height: 600,
            },
          }}
        >
          <Typography sx={{ fontWeight: 'bold', fontSize: 20, mb: 3 }}>
            Produk terbaru
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

      <Container
        fixed
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 900,
          },
        }}
      >
        <Button
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            borderColor: 'black',
            textTransform: 'capitalize',
            alignSelf: 'center',
            mt: 50,
            mb: 10,
            width: 300,
            height: 50,
            fontSize: 20,
            [theme.breakpoints.down('md')]: {
              backgroundColor: 'white',
              color: 'black',
              fontWeight: 'bold',
              borderColor: 'black',
              textTransform: 'capitalize',
              alignSelf: 'center',
              mt: 200,
              mb: 10,
              width: 300,
              height: 50,
              fontSize: 20,
            },
          }}
        >
          Lihat Semua
        </Button>
      </Container>

      <Box
        sx={{
          height: 400,
          display: 'flex',
          flexDirection: 'row',
          [theme.breakpoints.down('md')]: {
            height: 400,
            display: 'flex',
            flexDirection: 'row',
            width: 450,
          },
        }}
      >
        <CardMedia
          component="img"
          image="/assets/images/bottombanner.jpg"
          sx={{
            mr: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            width: '50%',
            [theme.breakpoints.down('md')]: {
              mr: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              width: '100%',
            },
          }}
        />
        <CardMedia
          component="img"
          image="/assets/images/bottombanner2.jpg"
          sx={{
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            width: '50%',
            [theme.breakpoints.down('md')]: {
              mr: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              width: '100%',
            },
          }}
        />
      </Box>

      <Container fixed>
        <Box
          sx={{
            height: 400,
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('md')]: {
              height: 400,
              width: 900,
              display: 'flex',
              flexDirection: 'row',
              my: 5,
            },
          }}
        >
          <Box
            sx={{
              width: '50%',
              mr: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 30,
                mb: 1,
                textTransform: 'uppercase',
              }}
            >
              Mencari Busana Muslim? Yuk, Cek Brand Kami Lainnya
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              malesuada lorem. Nam iaculis lacinia ligula, ut faucibus mi
              maximus quis. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Pellentesque luctus ac nunc
              vitae molestie. Nullam viverra, elit vel lobortis lacinia, orci
              justo imperdiet mauris, facilisis gravida nibh risus ac leo. Donec
              quis nisl a mi venenatis sodales sit amet sed urna. Etiam massa
              tortor, suscipit nec ante feugiat, dapibus vulputate tortor.
            </Typography>
          </Box>

          <Box
            sx={{
              width: '50%',
              [theme.breakpoints.down('md')]: {
                width: '50%',
              },
            }}
          >
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo1.png"
              sx={{
                width: 120,
                height: 50,
                ml: 2,
                mt: 10,
                [theme.breakpoints.down('md')]: {
                  width: 120,
                  height: 50,
                  ml: 2,
                  mt: 5,
                },
              }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo3.png"
              sx={{
                width: 125,
                height: 60,
                ml: 40,
                mt: -6,
                [theme.breakpoints.down('md')]: {
                  width: 125,
                  height: 60,
                  ml: 35,
                  mt: -6,
                },
              }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo4.png"
              sx={{
                width: 150,
                height: 60,
                ml: 2,
                mt: 15,
                [theme.breakpoints.down('md')]: {
                  width: 150,
                  height: 60,
                  ml: 2,
                  mt: 20,
                },
              }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo5.png"
              sx={{
                width: 135,
                height: 140,
                ml: 25,
                mt: -25,
                borderRadius: 10,
                [theme.breakpoints.down('md')]: {
                  width: 135,
                  height: 140,
                  ml: 18,
                  mt: -27,
                  borderRadius: 2,
                },
              }}
            />
            <CardMedia
              component="img"
              image="/assets/images/brandicon/logo2.png"
              sx={{
                width: 145,
                height: 145,
                ml: 50,
                mt: -10,
                borderRadius: 10,
                [theme.breakpoints.down('md')]: {
                  width: 145,
                  height: 145,
                  ml: 35,
                  mt: -4,
                  borderRadius: 10,
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Body;
