import React from 'react';
import { Grid, Typography, Stack, Box ,Avatar } from '@mui/material'
import radialbackblur from "../assets/image/radialbackblur.png"
import VectorQuestionmark from "../assets/image/VectorQuestionmark.png"

function AnyQuestion() {
  return (
   
   <Grid container sx={{
    width:'100%',
    
    backgroundColor:'#EAF0FF',
    height:'auto',
    justifyContent:'center',
    
   }}>

      
      <Grid item xs={10} sm={10} md={6} sx={{
        height:'350px',
        
        marginTop:'80px',
        backgroundImage: `url(${radialbackblur})`,
        backgroundPosition: `left bottom`,
        backgroundRepeat: "no-repeat",
        padding:{xs:'20px',md:'40px'},
        paddingLeft:{md:'150px'},
           
      }}>
        {/* <img height="100%" width="60%" src={radialbackblur} /> */}
        <Stack direction="column">
            <Typography variant="h3" color="initial"sx={{
                width:{xs:'200px',md:'400px'},
                fontSize:{xs:'40px',md:'50px'},
                fontWeight:'bold',
                
            }}>Have Any Questions?</Typography>

            <Typography variant="p" color="initial" sx={{
                width:{xs:'200px',md:'300px'},
                marginTop:'20px',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed facilisis eleifend quam, non efficitur nisi mattis quis.</Typography>

        </Stack>
      </Grid>

      <Grid item xs={10} sm={10} md={6} sx={{
        height:'350px',
        
        marginTop:{xs:'20px',md:"80px"},
        alignItem:"center",
      }}>
       <Grid item sx={{
        margin:"auto",
        marginTop:'50px',
        width:"70%",
        height:'80%',
        
        borderRadius:'10px',
        backgroundColor:'white',
        padding:'20px',

       }}>
        <Stack direction='column' spacing={3}>

            <Stack direction='row' spacing={2}>
                <Box sx={{
                    width:"30px",
                    height:'30px',

                }}>
                <img width='100%' height="100%" src={VectorQuestionmark} />
                </Box>

                <Typography variant="h6" color="initial" sx={{
                    fontWeight:'bold',
                    fontSize:{xs:"10px",sm:"15px",md:"15px",lg:'17px'}
                }}>How can i become a partner with BPS?</Typography>
                   
            </Stack>


            <Stack direction='row' spacing={2}>
                <Box sx={{
                    width:"30px",
                    height:'30px',

                }}>
                <img width='100%' height="100%" src={VectorQuestionmark} />
                </Box>

                <Typography variant="h6" color="initial" sx={{
                    fontWeight:'bold',
                    fontSize:{xs:"10px",sm:"15px",md:"15px",lg:'17px'}
                }}>How can i become a partner with BPS?</Typography>
                   
            </Stack>

            <Stack direction='row' spacing={2}>
                <Box sx={{
                    width:"30px",
                    height:'30px',

                }}>
                <img width='100%' height="100%" src={VectorQuestionmark} />
                </Box>

                <Typography variant="h6" color="initial" sx={{
                    fontWeight:'bold',
                    fontSize:{xs:"10px",sm:"15px",md:"15px",lg:'17px'}


                }}>How can i become a partner with BPS?</Typography>
                   
            </Stack>

            <Stack direction='row' spacing={2}>
                <Box sx={{
                    width:"30px",
                    height:'30px',

                }}>
                <img width='100%' height="100%" src={VectorQuestionmark} />
                </Box>

                <Typography variant="h6" color="initial" sx={{
                    fontWeight:'bold',
                    fontSize:{xs:"10px",sm:"15px",md:"15px",lg:'17px'}
                }}>How can i become a partner with BPS?</Typography>
                   
            </Stack>

        </Stack>


         
       </Grid>
          


      </Grid>
     
   </Grid>
  );
}

export default AnyQuestion;
