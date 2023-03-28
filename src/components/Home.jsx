import { Avatar, Box,Flex,Heading,Stack} from '@chakra-ui/react'
import { FaGithub, FaHeart, FaLinkedin, FaLinkedinIn, FaRegHeart, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { Image } from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import banner from "./images/banner.jpg"
// import Home from './About'
import styles from "../components/Navbar.module.css"
import helloimage from "../components/images/hii2.gif"
import myimg from "./images/logo.jpg"
import { Link } from '@chakra-ui/react'
import hiiimg from "./images/hiiimg.gif"
// import { color } from 'framer-motion'
export default function Home({open}) {

  console.log(open)

  return (
    <>

<Box 
// border="1px solid red"
// bg="green"
height={['62em', '70em', '70em', '37em', '37em', '37em']}
    id="home" 
    >
    <Box
  
    className={styles.aboutmainbox}
  
    >
 <Box 
// border="1px solid red"
className={styles.box2}

>
<Heading className={styles.name} marginLeft={['1em', '1em', '1.5em', '1.5em', '1.5em', '1.5em']} mt={"65px"} fontFamily={"sans-serif"} as="h6" size="xl">Hi,I AM </Heading>
<Heading id="user-detail-name" color={"royalblue"} marginLeft={['0.7em', '0.7em', '1em', '1em', '1em', '1em']} mt={"15px"} fontFamily={"sans-serif"} as="h6" size="2xl">SONU </Heading>
<Heading color={"royalblue"} marginLeft={['1em', '1em', '2.0em', '2em', '2.0em', '2.0em']} mt={"15px"} fontFamily={"sans-serif"} as="h6" fontSize="25px">A MERN STACK DEVELOPER </Heading>
<Heading   id="user-detail-intro"
 color={"gray.400"} marginLeft={['1.5em', '1.5em', '3.3em', '3.3em', '3.3em', '3.3em']} mt={"15px"} fontFamily={"sans-serif"} as="h6" fontSize="15px"
 >
As a MERN stack developer, I have expertise in building full-stack web <br></br> applications using MongoDB, Express.js, React.js, and Node.js.
My skills in MERN stack development enable me to build responsive user interfaces and implement complex functionalities while ensuring optimal performance and security. </Heading>
<Box mt={['0.5em', '0.5em', '1em', '1em', '2.0em', '2.0em']}  marginLeft={['1.3em', '1.3em', '3em', '3em', '3.0em', '3.0em']}  width={['5em', '8em', '8em', '8em', '8.0em', '8.0em']} justifyContent={"space-between"} display={"flex"}>

<Link href="https://www.linkedin.com/in/sonu-parjapat-a1a466196/"><FaLinkedin size={"20px"}/></Link>
<Link href="https://twitter.com/Sahilsi43803152"><FaTwitter  size="20px"/></Link>
<Link to="https://github.com/sonuparjapat"><FaGithub size="20px"/></Link>


</Box>
</Box> 
<Box className={styles.gif}>
  <Image src={hiiimg}/>
</Box>
 <Box   
className={styles.box1}
rounded="xl"
// border="1px solid red"
// width={["18em", '18em', '18em', '18em', '18em', '18.0em']}
// width="100%"
// marginLeft={['0em', '15em','21em', '0em', '0em', '0em', '0m']}
// height={['20.2em', '20.2em', '20.2em', '26.2em', '26.2em', '26.2em']}
>
<Image
className="home-img"
              rounded={'xl'}
              height={['20.2em', '20.2em', '20.2em', '26.2em', '26.2em', '26.2em']}
              // width={['26.2em', '26.2em', '26.2em', '26.2em', '26.2em', '10.0em']}
              objectFit={'cover'}
              src={myimg}
            />
</Box> 

</Box>

    
    </Box>
    </>
  )
}
