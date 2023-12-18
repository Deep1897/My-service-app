import React from 'react';
import { Grid, Typography,Stack, Button , Box} from '@mui/material'
import close from "../assets/image/close.png"

function Navbar() {
  return (
    <Grid container xs={12}sx={{
        position:'relative',
        width:'100%',
        height:"300px",
        // backgroundImage: `url(${close})`,
        filter:'blur',
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        margin:'auto',
        marginTop:"2px",
        justifyContent:"center",
        background: 'linear-gradient(180deg, rgba(1, 85, 165, 0.8) 0%, rgba(203, 206, 215, 0.8) 44.37%)',
        zIndex:'0',
        
    

      }}>
         <Box sx={{
       

        height:'100%',
        width:'100%',
        opacity:'30%',
        
      }}>
        <img height='100%' width="100%" sx={{
            opacity:"40%"
        }} src={close} />

        </Box>
<Grid container spacing={2} xs={11} md={12} sx={{
        position:'absolute',
        marginTop:"5px",
        width:'99%',
        height:'40px',
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:"5px",
        zIndex:'1',
       
    }}>

        <Grid item xs={2} sx={{
        height:'40px',
        
       
    }}>
           <Typography variant="h6" sx={{
            fontWeight:"bold",
            color:'white',
            textAlign:'center',
            marginTop:'-10px'

           }} >LOGO</Typography>

        </Grid>
        

        <Grid item xs={6} sm={6} md={6} lg={4} direction="row" sx={{
        height:'40px',
        alignItems:'center',
       
    }}>
        <Stack direction="row" spacing={1} sx={{
            justifyContent:"space-between",
            marginTop:{xs:'0px',sm:"-10px"}
        }}>
        <Typography variant="h6" sx={{
            fontSize:{xs:"8px",sm:"15px",md:'20px'},
            fontWeight:"bold",
            color:'white',
            textAlign:'center',
            marginTop:'-10px'

           }} >Home</Typography>

           <Typography variant="h6" sx={{
             fontSize:{xs:"8px",sm:"15px",md:'20px'},
            fontWeight:"bold",
            color:'white',
            textAlign:'center',
            marginTop:'-10px'

           }} >About Us</Typography>

           <Typography variant="h6" sx={{
             fontSize:{xs:"8px",sm:"15px",md:'20px'},
            fontWeight:"bold",
            color:'white',
            textAlign:'center',
            marginTop:'-10px'

           }} >Service</Typography>

           <Typography variant="h6" sx={{
             fontSize:{xs:"8px",sm:"15px",md:'20px'},
            fontWeight:"bold",
            color:'white',
            textAlign:'center',
            marginTop:{xs:"0px",sm:"-10px"}

           }} >Contact Us</Typography>
        
        </Stack>



        </Grid>


        <Grid item xs={2} sx={{
        height:'40px',
       
    }}>
        <Button variant="contained" size="small" sx={{
            backgroundColor:'white',
            color:"blue",
            marginTop:'-20px',
            textDecoration:'none',
            marginLeft:{xs:'-20px',sm:'0px'},
            "&:hover":{
                color:'white'
            }
        }} >
          Login
        </Button>
        </Grid>

      
    </Grid>

    <Typography variant="h3" sx={{
            
            fontWeight:"bold",
            color:'#0155A5',
            textAlign:'center',
            marginTop:'-200px'
            

           }} >Our Services</Typography>
         


        
      </Grid>
  );
}

export default Navbar;


{/* <Grid container spacing={2} sx={{
        marginTop:"5px",
        width:'99%',
        height:'40px',
        justifyContent:"space-between",
        alignItems:"center",
        marginLeft:"5px"
       
    }}>

        <Grid item xs={2} sx={{
        height:'40px',
        
       
    }}>
           <Typography variant="h6" sx={{
            fontWeight:"bold",
            color:'white',

           }} >LOGO</Typography>
        </Grid>
        

        <Grid item xs={4} sx={{
        height:'40px',
       
    }}>
        odcicd
        </Grid>


        <Grid item xs={2} sx={{
        height:'40px',
       
    }}>
        odcicd
        </Grid>





      
    </Grid> */}