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
          Stats For parcel Delivery
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

       <Grid container spacing={1} columnSpacing={3} sx={{
         
         width:'80%',
         height:'auto',
         backgroundColor:"#EAF0FF",
         margin:'auto',
         gap:'40px',
         justifyContent:{xs:"space-between",md:"space-between"},
         marginTop:'70px',
      }}>

        <Grid item  xs={12} sm={5} md={2} sx={{
           height:'150px',
           backgroundColor:"#EAF0FF",
           borderRadius:'10px',
           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
           backgroundColor:'white',
           boxSizing:'border-box',
        }}>
            <Stack direction="row" sx={{
                marginTop:"20px"
            }}>
        <Typography variant="h3" color="initial" sx={{
                fontSize:{md:"30px",lg:"40px"}
            }}>95% </Typography>
            <Typography variant="h3" color="initial" sx={{
                color:'#2FB95D',
                fontSize:{md:"30px",lg:"40px"}
            }}>+</Typography>
            </Stack>

            <Typography variant="p" sx={{
                color:"#666666",
                marginTop:'20px'
            }}>on-time delivery rate</Typography>
          
          
          
          
        </Grid>


        <Grid item xs={12} sm={5} md={2} sx={{
          height:'150px',
          backgroundColor:"#EAF0FF",
          borderRadius:'10px',
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor:'white',
          boxSizing:'border-box',

        }}>
            
            <Stack direction="row" sx={{
            marginTop:"20px"
        }}>
        <Typography variant="h3" color="initial" sx={{
                fontSize:{md:"30px",lg:"40px"}
            }}>2600 </Typography>
        <Typography variant="h3" color="initial" sx={{
            color:'#2FB95D',
            fontSize:{md:"30px",lg:"40px"}
        }}>+</Typography>
        </Stack>

        <Typography variant="p" sx={{
            color:"#666666",
            marginTop:'20px'
        }}>on-time delivery rate</Typography>


          
          
          
        </Grid>


        <Grid item  xs={12} sm={5} md={2} sx={{
          height:'150px',
          backgroundColor:"#EAF0FF",
          borderRadius:'10px',
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor:'white',
          boxSizing:'border-box',

        }}>
             <Stack direction="row" sx={{
                marginTop:"20px"
            }}>
            <Typography variant="h3" color="initial" sx={{
                fontSize:{md:"30px",lg:"40px"}
            }}>5-</Typography>
            <Typography variant="h3" color="initial" sx={{
                color:'#2FB95D',
                fontSize:{md:"30px",lg:"40px"}
            }}>Star</Typography>
            </Stack>

            <Typography variant="p" sx={{
                color:"#666666",
                marginTop:'20px'
            }}>on-time delivery rate</Typography>

          
          
          
        </Grid>


        <Grid item  xs={12} sm={5} md={2} sx={{
          height:'150px',
          width:"200px",
          backgroundColor:"#EAF0FF",
          borderRadius:'10px',
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundColor:'white',
          textAlign:'center',
          alignItem:'center',
          boxSizing:'border-box',

        }}>
            <Stack direction="row" sx={{
                marginTop:"20px"
            }}>
            <Typography variant="h3" color="initial" sx={{
                fontSize:{md:"30px",lg:"40px"}
            }}>2M </Typography>
            <Typography variant="h3" color="initial" sx={{
                color:'#2FB95D',
                fontSize:{md:"30px",lg:"40px"}
            }}>+</Typography>
            </Stack>

            <Typography variant="p" sx={{
                color:"#666666",
                marginTop:'20px',
                
            }}>on-time delivery rate</Typography>

          
          
          
        </Grid>


         
       </Grid>










      
    </Grid>
  );
}

export default BpsDelivery;
