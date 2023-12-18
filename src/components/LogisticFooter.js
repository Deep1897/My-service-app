import React from 'react';

import { Grid, Typography, Stack, Box ,Avatar, TextField,Button } from '@mui/material'
import tubeyoutube from "../assets/image/tubeyoutube.png"
import Twittertwitter from "../assets/image/Twittertwitter.png"
import Iginsta from "../assets/image/Iginsta.png"
import FBfacebook from "../assets/image/FBfacebook.png"
import Vectormail from "../assets/image/Vectormail.png"
import Vectorlocation from "../assets/image/Vectorlocation.png"
import Vectorphone from "../assets/image/Vectorphone.png"

function LogisticFooter() {
  return (
    <Grid container sx={{
        width:'100%',
        
        height:"auto",
        justifyContent:'space-around',
        backgroundColor:"#0155A5",
        gap:'20px',

    }}>

        <Grid item direction="column" xs={10} sm={5} md={2} sx={{
            height:"300px",
            
            padding:'20px',


        }}>
            <Stack direction='column'>
                <Typography variant="h4"sx={{
                    color:'white',
                    fontWeight:'bold',
                }}>Logo</Typography>

                <Typography variant="p"sx={{
                    color:'white',
                    marginTop:'20px',
                    
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet neque tortor.</Typography>


            </Stack>

            <Stack direction='row' spacing={2} sx={{
                marginTop:'20px'
            }}>

                <Box sx={{
                    width:'40px',
                    height:'40px',
                }}>
                    <img  width='100%' height='100%' src={tubeyoutube} />
                </Box>

                <Box sx={{
                    width:'40px',
                    height:'40px',
                }}>
                    <img  width='100%' height='100%' src={Twittertwitter} />
                </Box>

                <Box sx={{
                    width:'40px',
                    height:'40px',
                }}>
                    <img  width='100%' height='100%' src={Iginsta} />
                </Box>

                <Box sx={{
                    width:'40px',
                    height:'40px',
                }}>
                    <img  width='100%' height='100%' src={FBfacebook} />
                </Box>
            </Stack>
          
        </Grid>

        <Grid item direction="column" xs={10} sm={5} md={2}sx={{
            height:"300px",
            
            padding:'20px',


        }}>
               <Typography variant="h6"sx={{
                    color:'white',
                    fontWeight:'bold',
                }}>Quick Links</Typography>
            

            <Stack>
            <Typography variant="p"sx={{
                    color:'white',
                    fontWeight:'bold',
                    marginTop:'30px',
                }}>About Us</Typography>

                <Typography variant="p"sx={{
                    color:'white',
                    fontWeight:'bold',
                    marginTop:'20px',
                }}>Service</Typography>


                <Typography variant="p"sx={{
                    color:'white',
                    fontWeight:'bold',
                    marginTop:'20px',
                }}>How to Track</Typography>


                <Typography variant="p"sx={{
                    color:'white',
                    fontWeight:'bold',
                    marginTop:'20px',
                }}>Testimonial</Typography>

            </Stack>
            
          
        </Grid>

        <Grid item direction="column" xs={10} sm={5} md={3}sx={{
            height:"300px",
            
            padding:'20px',

        }}>

             <Typography variant="h6"sx={{
                    color:'white',
                    fontWeight:'bold',
                }}>Contact Us </Typography>

                 <Stack direction='row' spacing={2} sx={{
                    marginTop:'20px'
                 }}>
                <Box sx={{
                    width:"20px",
                    height:'20px',

                }}>
                <img width='100%' height="100%" src={Vectormail} />
                </Box>

                <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                    color:'white',
                    
                }}>caarun@rediffmail.com</Typography>
                   
            </Stack>

            <Stack direction='row' spacing={2} sx={{
                    marginTop:'20px'
                 }}>
                <Box sx={{
                    width:"20px",
                    height:'20px',

                }}>
                <img width='100%' height="100%" src={Vectorlocation} />
                </Box>

                <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                    color:'white',
                    
                }}>332, KUCHA GHASI RAM, FATEH PURI, CHANDNI CHOWK DELHI DL 11000</Typography>
                   
            </Stack>

            <Stack direction='row' spacing={2} sx={{
                    marginTop:'20px'
                 }}>
                <Box sx={{
                    width:"20px",
                    height:'20px',

                }}>
                <img width='100%' height="100%" src={Vectorphone} />
                </Box>

                <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                    color:'white',
                    
                }}>+91 7017866149</Typography>
                   
            </Stack>
            
          
        </Grid>


        <Grid item direction="column" xs={10} sm={5} md={4}sx={{
            height:"300px",
            
            margin:'auto',
            alignItem:'center',

        }}>

            <Grid sx={{
                margin:'auto',
                width:{xs:'100%',lg:'60%'},
                height:'60%',
                
                marginTop:'60px',

            }}>

            <Typography variant="h6"sx={{
                    color:'white',
                    fontWeight:'bold',
                    
                }}>Newsletter </Typography>

               <Stack direction='row' sx={{
                marginTop:'50px',
               }}>
                <TextField variant="outlined" placeholder="Enter Your Email" sx={{
                    backgroundColor:'white',
                    borderTopLeftRadius:'10px',
                    borderBottomLeftRadius:'10px'
                }}></TextField>
                <Button sx={{
                    backgroundColor:'#2FB95D',
                    borderTopRightRadius:'10px',
                    borderBottomRightRadius:'10px',
                    borderTopLeftRadius:'0px',
                    borderBottomLeftRadius:'0px',
                    marginLeft:'-5px',
                    color:'white',
                    fontSize:"13px",
                    '&:hover':{
                        backgroundColor:'#2FB95D',
                        color:'white',
                    }
                }}>
                Subscribe
                </Button>


              </Stack>
            </Grid>
            
          
        </Grid>


      
    </Grid>
  );
}

export default LogisticFooter;
