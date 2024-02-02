import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { Grid } from '@mui/material'
import { CircularProgress } from '@mui/material';
import DashboardContainer from '@/views/DashboardContainer';

const MapsContainer = dynamic(() => import('@/views/MapsContainer'), {
  loading: () => (
    <CircularProgress
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        height: '100px',
        width: '100px',
      }}
    />
  ),
  ssr: false,
});

// export default function Home() {
//   return (
//     <Box display="flex">
//       <MapsContainer />
//       <DashboardContainer />
//     </Box>
//   );
// }

export default function Home() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}>
        <DashboardContainer />
      </Grid>
      <Grid item xs={0}>
        <MapsContainer />
      </Grid>
    </Grid>
  );
}

// export default function Home() {
//   return <MapsContainer />;
// }
