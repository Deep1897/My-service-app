import React from 'react';
import { Grid, Typography, Stack, Box ,Avatar } from '@mui/material'
import imagegary from "../assets/image/imagegary.png"
import vicki from "../assets//image/vicki.png"
import imagemajori from "../assets//image/imagemajori.png"

function ThreeCards() {
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

     <Grid container  sx={{
      width:"100%",
      height:"auto",
      
      margin:"auto",
      marginTop:'80px',
     }}>
       
      <Grid sx={{
        position:'relative',
        backgroundColor:"#0155A5",
        width:{xs:"100%",md:"70%"},
        height:{xs:'700px',md:'300px'},
        
        margin:'auto',
        borderRadius:'10px',
        
       
         //{xs:"120%",sm:"60%",md:"auto"}
      }}>
        
      </Grid>

      <Grid container sx={{
        position:'absolute',
       left:"10%",
        width:'80%',
        height:'auto',
        
        margin:'auto',
        marginTop:"50px",
        gap:"20px",
        zIndex:'9',
        justifyContent:{xs:"center",sm:"center",md:'space-between'},

      }}>

        <Grid xs={10} sm={10} md={3} sx={{
          
          height:'200px',
          borderRadius:'10px',
          backgroundColor:"white",
          padding:'10px',
        }}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={imagegary} />
                <Stack direction="column" >
                  <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                  }}>Gary Pollich</Typography>
                  <Typography variant="p" color="initial">Future Group Facilitator</Typography>
                  
                </Stack>
             </Stack>

             <Stack>
              <Typography variant="p" color="initial" sx={{
                marginTop:"15px",
                fontSize:{xs:"13px",md:'10px',lg:"14px"}
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam,
               non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.

              </Typography>
             </Stack>
          
        </Grid>


        <Grid xs={10} sm={10} md={3} sx={{
          
          height:'200px',
          borderRadius:'10px',
          backgroundColor:"white",
          padding:'10px',
        }}>

               <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={vicki} />
                <Stack direction="column" >
                  <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                  }}>Vicki Rohan</Typography>
                  <Typography variant="p" color="initial">Dynamic Usability Specialist</Typography>
                  
                </Stack>
             </Stack>

             <Stack>
              <Typography variant="p" color="initial" sx={{
                marginTop:"15px",
                fontSize:{xs:"13px",md:'10px',lg:"14px"}
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam,
               non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.

              </Typography>
             </Stack>

          
        
          
        </Grid>


        <Grid xs={10} sm={10} md={3} sx={{
          
          height:'200px',
          borderRadius:'10px',
          backgroundColor:"white",
          padding:'10px',
        }}>

           <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={imagemajori} />
                <Stack direction="column" >
                  <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                  }}>Marjorie Schinner</Typography>
                  <Typography variant="p" color="initial">Corporate Markets Consultant</Typography>
                  
                </Stack>
             </Stack>

             <Stack>
              <Typography variant="p" color="initial" sx={{
                marginTop:"15px",
                fontSize:{xs:"13px",md:'10px',lg:"14px"}
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam,
               non efficitur nisi mattis quis. Vivamus scelerisque orci nec erat cursus, sed facilisis velit porttitor.

              </Typography>
             </Stack>
        
          
        </Grid>






        
      </Grid>
       
     </Grid>
















     
       
     </Grid>
        


  );
}

export default ThreeCards;
