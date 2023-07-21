import { Box } from '@chakra-ui/react'
import cv from "../components/resume/Sonu-Resume.pdf"
import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Contact.module.css"
import { Heading,Image,useColorMode,useDisclosure,Button} from '@chakra-ui/react'
import { HiOutlineMail} from 'react-icons/hi'
import {BiPhoneCall} from "react-icons/bi"
import {FaLinkedin} from "react-icons/fa"
import {BsGithub,BsTwitter} from "react-icons/bs"
import sonu from "./images/sonu.png"

export default function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const handleclick=()=>{
    window.open("https://drive.google.com/file/d/14ZYIjSF_WAFUTsK9MFombf4hkJdxySsl/view")
  }
  return (
<Box   mt="30px"  bg={isDark?"#2d3748":"white"} id="contact">
<Box display="flex" margin="auto" width={['95%', '80%', '70%', '50%', '40%', '40%']} textAlign="center"     >
 <Box  mt="50px" width="100%" className={styles.box3}>
 <Box margin="auto"   >
<Heading size="lg" >Contact Me</Heading>
<Box margin="auto" width="80%" gap="20px" display="grid" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']} >
<Box>
<Box mt="50px" display="flex">
<HiOutlineMail style={{color:"pink",fontSize:"30px",display:"inline"}}/><Box><Heading mt="5px"  as="h6" id="contact-email"
 fontSize="15px">sonu992000parjapat@gmail.com</Heading></Box>



</Box>

<Box display="flex">
<BiPhoneCall  style={{color:"pink",fontSize:"30px",display:"inline"}}/><Box><Heading mt="5px" id="contact-phone" as="h6"
 fontSize="15px">+91 9996230902</Heading></Box>


 
</Box>
<Box>
<Box mt="20px" gap="20px" display="flex">

<a id="contact-github" href="https://github.com/sonuparjapat" target='_blank' ><BsGithub style={{color:"pink",fontSize:"30px",display:"inline"}}/></a>
<Link to="https://twitter.com/Sahilsi43803152" target='_blank' ><BsTwitter style={{color:"pink",fontSize:"30px",display:"inline"}}/></Link>
<Link id="contact-linkedin" to="https://www.linkedin.com/in/sonu-parjapat-a1a466196/" target='_blank' ><FaLinkedin style={{color:"pink",fontSize:"30px",display:"inline"}}/></Link>
<a href={cv} download target='_blank' ><Button onClick={handleclick}>RESUME</Button></a>


 
</Box></Box>
</Box>
<Box width={['7em', '7em', '10em', '10em', '8em', '32em']}><Image width="100%"  mt={['0em', '2em', '2em', '3em', '2em', '2em']} src={sonu}/></Box>

</Box>

  </Box>

</Box>
</Box>
<Image  src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg"/>

</Box>
  )
}
