import { Avatar, Box, Heading,Image,Button } from '@chakra-ui/react'
import cv from "../components/resume/Sonu_Resume.pdf"
import styles from "./About.module.css"
import AllRoutes from "./AllRoutes";
// import Navbar from "./Navbar";
import Navbar from "./Navbar";
import aboutgif from "./images/about.gif"


export default function About({open}){
    return (
<Box bg={open?"gray.700":"white"} height={['33em', '29em', '26em', '28em', '31em', '37em']} id="about" className='about section'>
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
A MERN stack developer, who possesses a strong understanding of the technologies involved in building web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).Skilled in writing clean, maintainable, and scalable code with a strong focus on delivering robust and user-friendly web applications using the MERN stack.</Heading></Box> 
<Heading  color={open?"gray.400":"white"} textAlign="center" mt={"15px"} fontFamily={"sans-serif"} as="h6" fontSize="15px">What I Have</Heading>
<Box borderRadius={"20px"} className={styles.box4} height="100px" margin="auto" width="70%"  mt="10px" >

<Box className={styles.what} textAlign={"center"} 
     border={"1px solid gray"}><Heading color={open?"gray.400":"white"} textAlign="center" mt={['0em', '2em', '2em', '1em', '1.5em', '1.5em']} fontFamily={"sans-serif"} as="h6" fontSize="15px" >1800+ hours  coding  Experience</Heading></Box>

    <Box className={styles.what} textAlign={"center"} 
     border={"1px solid gray"}><Heading color={open?"gray.400":"white"} textAlign="center" mt={['0em', '2em', '2em', '1em', '1em', '1em']} fontFamily={"sans-serif"} as="h6" fontSize="15px" >4+  completed  projects</Heading></Box>


<Box  className={styles.what} textAlign={"center"}  border={"1px solid gray"}>
    <Heading   color={open?"gray.400":"white"} textAlign="center" mt={['0em', '2em', '2em', '1.5em', '2em', '2em']} fontFamily={"sans-serif"} as="h6" fontSize="15px"> Attempted 100+ hours of soft skill sessions</Heading></Box>
{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
{/* <a mt="0px" href={cv} download ><Button  id="resume-button-2" >RESUME</Button></a> */}
</Box>
</Box>

</Box>



</Box>

    )
}