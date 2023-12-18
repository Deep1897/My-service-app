import React from 'react';
import { Grid, Typography,Box, Button } from '@mui/material'
import Iconseatrans from "../assets/image/Iconseatrans.png"
import IconWarehousing from "../assets/image/IconWarehousing.png"
import Iconairflite from "../assets/image/Iconairflite.png"
import IconProject from "../assets//image/IconProject.png"
import Iconlocal from "../assets//image/Iconlocal.png"
import IconCustomer from "../assets/image/IconCustomer.png"

function LogisticService() {
  return (
  <Grid container xs={12} sx={{
    backgroundColor:"#EAF0FF"
  }}>
    <Grid xs={12} sx={{
        justifyContent:'center',
        backgroundColor:"#EAF0FF",
        marginTop:'40px'
     }}>
       <Typography variant="h6" color="initial" sx={{
        textAlign:'center',
        fontWeight:'bold',
        font:'Rubik'

       }}>
       Our Logistics Services
       </Typography>
     </Grid>

    
      <Grid container spacing={3} columnSpacing={3} sx={{
         
         width:'80%',
         height:'auto',
         backgroundColor:"#EAF0FF",
         margin:'auto',
         gap:'40px',
         justifyContent:{xs:"space-between",md:"space-between"},
         marginTop:'70px',
      }}>
        <Grid item direction="column" xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
          <img width="40px" height="40px" src={Iconseatrans}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Sea Transport Services</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
          
        </Grid>

        <Grid item xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",        }}>
          <img width="40px" height="40px" src={IconWarehousing}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Warehousing Services</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
        </Grid>

        <Grid item  xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",        }}>
          <img width="40px" height="40px" src={Iconairflite}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Air Fright Services</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
        </Grid>

        <Grid item  xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",        }}>
          <img width="40px" height="40px" src={IconProject}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Project & Exhibition</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
        </Grid>

        <Grid item  xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",        }}>
          <img width="40px" height="40px" src={Iconlocal}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Local Shipping Services</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
        </Grid>

        <Grid item  xs={12} sm={5} md={3} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",        }}>
          <img width="40px" height="40px" src={IconCustomer}/>
          <Typography sx={{
            fontWeight:'bold',
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:"10px"
          }}>Customer Clearance</Typography>
          <Typography sx={{
            fontSize:{xs:"10px",lg:"12px"},
            marginTop:'10px'
          }}>Following the quality of our service thus having gained trust of our many clients.</Typography>
        </Grid>

      </Grid>


      <Grid xs={12} sx={{
        
        backgroundColor:"#EAF0FF",
        marginTop:'40px',
      
        textAlign:'center',
        
     }}>
      <Button variant="contained" sx={{
       font:"Krub",
       borderRadius:'15px',
       height:'50px',
       

      }}>
        More Works
      </Button>
     </Grid>

      
   


    </Grid>
  );
}

export default LogisticService;
