import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({pageControll}) {

    const handleChange = (e,p)=>{
        pageControll(p)
    }


  return (
    <Stack spacing={2}>
      <Pagination 
        count={3} 
        variant="outlined" 
        shape="rounded" 
        onChange={handleChange}
        />
    </Stack>
  );
}