// pages/index.tsx
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <Box sx={{ margin: -1 }}>
      <Hero/>
      <Footer/>
    </Box>
  );
}
