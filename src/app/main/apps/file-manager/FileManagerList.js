import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { lighten } from '@mui/material/styles';
import { selectFiles, selectFolders } from './store/itemsSlice';
import FolderItem from './FolderItem';
import FileItem from './FileItem';
import { Grid } from '@mui/material';
import MapGoogle from './MapGoogle';
// import { GoogleMap, LeadScript } from '@react-google-maps/api';

function FileManagerList() {
  const folders = useSelector(selectFolders);
  const files = useSelector(selectFiles);

  // function MapComponent() {
  //   const mapContainer = {
  //     width: 100%,
  //     height:200%
  //   }
  // }

  return (
    <div className="p-32">
    <Grid container >
    <Grid item md={4} >
    <Typography  variant="h5" sx={{fontWeight:"800"}} >
        Summary
        </Typography>
        <Typography color="text.secondary" sx={{mb:"1rem"}}>
         Jan 18,2023 12:00 AM - Jan 20,2023 11:59 PM
        </Typography>
        <Typography  variant="h6" sx={{fontWeight:"700"}} >
        Assets
        </Typography>
        <Typography variant="h6" sx={{mb:"1rem",fontWeight:"600"}}>
        14
        </Typography>
        <Typography  variant="h6" sx={{fontWeight:"700"}} >
        Visits
        </Typography>
        <Typography variant="h6" sx={{mb:"1rem",fontWeight:"600"}}>
        29
        </Typography>
        <Typography  variant="h6" sx={{fontWeight:"700"}} >
        Average time per visit
        </Typography>
        <Typography variant="h6" sx={{mb:"1rem",fontWeight:"600"}}>
        14hr 4m
        </Typography>
    </Grid>
    <Grid item md={8} sx={{marginRight:"1rem"}} >
    <MapGoogle />
    </Grid>
    <hr/>
    <Typography  variant="h5" sx={{fontWeight:"800"}} >
        Visits
        </Typography>
    </Grid>
    </div>
  );
}

export default FileManagerList;
