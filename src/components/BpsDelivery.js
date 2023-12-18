import React from 'react';
import { Grid, Typography, Stack } from '@mui/material'
import IconStat from "../assets//image/IconStat.png"
import Iconcold from "../assets//image/Iconcold.png"
import Icongoodand from "../assets/image/Icongoodand.png"
import Iconmulti from "../assets/image/Iconmulti.png"

function BpsDelivery() {
  return (
    <Grid container spacing={0} sx={{
        backgroundColor:"#EAF0FF",

    }}>

        <Grid  xs={12} sx={{
           textAlign:'center',
           marginTop:'80px'
        }}>
          <Typography variant="h3" color="initial">
          The BPS delivery service
          </Typography>

         
        </Grid>

        <Grid  xs={10} sx={{
           textAlign:'center',
           
           margin:'auto',
          
        }}>

             <Typography variant="h3" color="initial" sx={{
            fontSize:'15px',
            marginTop:'20px'
           
           
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.
           Vestibulum ligula sapien, cursus sed consectetur nec, tincidunt ac metus.
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

        <Grid item  xs={12} sm={12} md={5} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           borderRadius:'10px',
           backgroundColor:'white',
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>

            <Stack direction="row" spacing={2} sx={{
                marginTop:"20px"
            }}>
                  <Grid >
                    <img width='80px' height='80px' src={IconStat}/>
                  </Grid>

                  <Grid >

                    <Typography sx={{
                        fontWeight:'bold'
                    }} >
                    STAT Deliveries
                    </Typography>

                    <Typography sx={{
                        fontSize:"13px"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam.
                    </Typography>
                    
                  </Grid>

            </Stack>
          
          
          
        </Grid>


        <Grid item xs={12} sm={12} md={5} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
           borderRadius:'10px',
           backgroundColor:'white',
        }}>

           <Stack direction="row" spacing={2} sx={{
                marginTop:"20px"
            }}>
                  <Grid >
                    <img width='80px' height='80px' src={Iconcold}/>
                  </Grid>

                  <Grid >

                    <Typography sx={{
                        fontWeight:'bold'
                    }} >
                    Cold Chain Logistics
                    </Typography>

                    <Typography sx={{
                        fontSize:"13px"
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam.
                    </Typography>
                    
                  </Grid>

            </Stack>
          
          
          
        </Grid>


        <Grid item  xs={12} sm={12} md={5} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
           borderRadius:'10px',
           backgroundColor:'white',
        }}>

<Stack direction="row" spacing={2} sx={{
                marginTop:"20px"
            }}>
                  <Grid >
                    <img width='80px' height='80px' src={Icongoodand}/>
                  </Grid>

                  <Grid >

                    <Typography sx={{
                        fontWeight:'bold'
                    }} >
                    Good and on-time service
                    </Typography>

                    <Typography sx={{
                        fontSize:"13px"
                    }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam.
                    </Typography>
                    
                  </Grid>

            </Stack>
          
          
          
        </Grid>


        <Grid item  xs={12} sm={12} md={5} sx={{
           height:'170px',
           backgroundColor:"#EAF0FF",
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
           borderRadius:'10px',
           backgroundColor:'white',
        }}>

<Stack direction="row" spacing={2} sx={{
                marginTop:"20px"
            }}>
                  <Grid >
                    <img width='80px' height='80px' src={Iconmulti}/>
                  </Grid>

                  <Grid >

                    <Typography sx={{
                        fontWeight:'bold'
                    }} >
                    Multi-State Solutions
                    </Typography>

                    <Typography sx={{
                        fontSize:"13px"
                    }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam.
                    </Typography>
                    
                  </Grid>

            </Stack>
          
          
          
        </Grid>


         
       </Grid>










      
    </Grid>
  );
}

export default BpsDelivery;
