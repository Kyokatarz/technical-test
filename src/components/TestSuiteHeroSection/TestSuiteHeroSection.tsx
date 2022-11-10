import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import TestSuiteHeroImg from './assets/hero_image.jpg'
import RerunButton from './components/RerunButton'

const TestSuiteHeroSection = () => {
  return (
    <Paper
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 300,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          border: 'red',
          backgroundImage: `url(${TestSuiteHeroImg})`,
          backgroundSize: 'cover',
          filter: 'blur(0.5px)',
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            fontSize: '2rem',
            background:
              'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Time Spy Extreme Suite
        </Box>

        <RerunButton />
      </Box>
    </Paper>
  )
}

export default TestSuiteHeroSection
