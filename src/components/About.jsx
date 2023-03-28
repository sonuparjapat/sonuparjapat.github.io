import { Avatar, Box, Heading,Image } from '@chakra-ui/react'

import styles from "./About.module.css"
import AllRoutes from "./AllRoutes";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import aboutgif from "./images/about.gif"


export default function About({open}){
    return (
<Box bg={open?"gray.700":"white"} height={['46em', '37em', '26em', '31em', '31em', '37em']} id="about" className='about section'>
    <Heading paddingTop={{base:"20px",md:"20px",lg:"20px",xl:"30px","2xl":"30px"}} textAlign={"center"} fontFamily={"sans-serif"}  fontSize="30px">About Me</Heading>
<Box paddingTop={"30px"} width="80%"  margin="auto" justifyContent={"space-between"} display={"flex"} flexDirection={{sm:"column",md:"column",lg:"row",xl:"row","2xl":"row"}}>

<Box
className={styles.box1}
display={{base:"none",md:"none",lg:"inline",xl:"inline","2xl":"inline"}}
width="40%"
borderRadius={"20px"}
 bg="red" >
    <Image height={"100%"} width="100%" src={aboutgif} borderRadius={"20px"}/>


</Box>
<Box 
borderRadius={"20px"}
className={styles.box2}

  bg={open?"gray.600":"#77bbad"} 
width={{sm:"100%",md:"100%",lg:"55%",xl:"55%","2xl":"55%"}}
>
  <Box width="90%" margin={"auto"}><Heading   id="user-detail-intro"
 color={open?"gray.400":"white"} textAlign="center" mt={"15px"} fontFamily={"sans-serif"} as="h6" fontSize="15px"
 >
Hi, I'm a MERN stack developer who has been interested in coding since class 10. In fact, my passion for coding led me to create my first application, a calculator, when I was in class 12. 

When I sit down to code, I often lose track of time and keep going well into the night. I've worked on many projects, which you can see in the project section of my portfolio. I've found that collaborating with others on projects has been a great way to improve my skills and learn new things. Overall, I'm very passionate about coding and excited to continue exploring this field.</Heading></Box> 
<p  style={{color:open?"gray.400":"white",marginTop:"10px",textAlign:"center"}}>What I Have</p>
<Box borderRadius={"20px"} className={styles.box4} height="100px" margin="auto" width="70%"  mt="10px" >

<Box className={styles.box3} textAlign={"center"} 
     border={"1px solid gray"}><Heading mt="25px" fontWeight={"light"} style={{marginTop:"13px" ,fontSize:"13px",color:open?"gray.400":"white" }} >1800+ hours <br></br> coding <br></br> Experience</Heading></Box>

    <Box className={styles.box3} textAlign={"center"} 
     border={"1px solid gray"}><Heading fontWeight={"light"} style={{marginTop:"13px" ,fontSize:"13px",color:open?"gray.400":"white" }} >4+ <br></br> completed <br></br> projects</Heading></Box>


<Box  className={styles.box5} textAlign={"center"}  border={"1px solid gray"}><Heading fontWeight={"light"}
style={{marginTop:"16px" ,fontSize:"13px",color:open?"gray.400":"white"}}> Attempted 100+ <br></br>hours of soft <br></br>skill sessions</Heading></Box>
</Box>
</Box>

</Box>



</Box>

    )
}