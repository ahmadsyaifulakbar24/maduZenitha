import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FBIcon from '@mui/icons-material/Facebook';
import IGIcon from '@mui/icons-material/Instagram';
import YTIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: 400,
          borderTop: 1,
          borderColor: 'black',
          [theme.breakpoints.down('md')]: {
            height: 400,
            width: 935,
            borderTop: 1,
            borderColor: 'black',
          },
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '100%',
            display: 'flex',
            alignSelf: 'center',
            ml: 25,
            flexDirection: 'row',
            [theme.breakpoints.down('md')]: {
              width: '90%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              ml: 6,
              justifyContent: 'space-between',
            },
          }}
        >
          <Box
            sx={{
              width: '33%',
              flexDirection: 'column',
              [theme.breakpoints.down('md')]: {
                width: '22%',
                flexDirection: 'column',
              },
            }}
          >
            <CardMedia
              component="img"
              image="/assets/images/logo 3.png"
              sx={{ width: 180, height: 130, my: 5 }}
            />
            <Typography sx={{ color: 'gray', fontSize: 20 }}>
              Temui Kami di Media Sosial:
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'row', height: 50, my: 5 }}
            >
              <Box
                sx={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <FBIcon sx={{ color: 'gray' }} />
              </Box>
              <Box
                sx={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  borderRight: 1,
                  borderLeft: 1,
                }}
              >
                <IGIcon sx={{ color: 'gray' }} />
              </Box>
              <Box
                sx={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <YTIcon sx={{ color: 'gray' }} />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', height: 50 }}>
              <PhoneIcon sx={{ color: 'gray' }} />
              <Typography sx={{ color: 'gray', ml: 1 }}>+62 2112121</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: '33%',
              flexDirection: 'column',
              [theme.breakpoints.down('md')]: {
                width: '22%',
                flexDirection: 'column',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 30,
                mt: 4,
              }}
            >
              Kategori
            </Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Sale</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Oval</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Zenitha</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Permata</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Adnin</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Madu Azura</Typography>
          </Box>

          <Box
            sx={{
              width: '33%',
              flexDirection: 'column',
              [theme.breakpoints.down('md')]: {
                width: '22%',
                flexDirection: 'column',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 30,
                mt: 4,
              }}
            >
              Informasi
            </Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Tentang</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>Kontak</Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>FAQ</Typography>
          </Box>

          {/* <Box
            sx={{
              width: '30%',
              flexDirection: 'column',
              [theme.breakpoints.down('md')]: {
                width: '22%',
                flexDirection: 'column',
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: 25,
                mt: 4,
              }}
            >
              Daftarkan Email Anda Sekarang
            </Typography>
            <Typography sx={{ color: 'gray', mt: 1 }}>
              Dapatkan penawaran menarik melalui email
            </Typography>
            <Typography sx={{ color: 'gray', m: 5 }}>
              contoh: email@gmail.com
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: 'darkmagenta',
                borderColor: 'darkmagenta',
                textTransform: 'capitalize',
                width: 150,
              }}
            >
              Subscribe
            </Button>
          </Box> */}
        </Box>
      </Box>
    </>
  );
}

export default Footer;
