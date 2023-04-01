import { Box, Heading,Image } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {FaInternetExplorer,FaFirefoxBrowser,FaGithub,FaHandPointRight} from "react-icons/fa"
import { BsBrowserChrome } from "react-icons/bs"
import React from 'react'
import styles from "./Project.module.css"
import img1 from "./images/foolocker.jpg"
import img2 from "./images/happshop.jpg"
import img3 from "./images/shineu.jpg"
export default function Projects({open}) {
  return (
   <Box   bg={open?"gray.700":"white"}   id="projects">
   <Box  paddingTop="20px"> <Heading textAlign="center"  as="h6" >PROJECTS</Heading></Box>
   <Box margin="auto" className={styles.box3}  paddingTop="40px" width="80%" border="1px solid red" >
    <Box margin="auto" width="100%"  
    display="flex" 
    justifyContent="space-around"
    // height={['46em', '37em', '26em', '31em', '31em', '37em']} 
   height={"500px"} >
<Box className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} width="40%">
<Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={img1}/>
<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="md">One Destination (Collaborative Project)</Heading>
<Box  mt="20px" className={styles.box3} > <Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"} mt="15px" textAlign={"left"} as="h6" size="md">One Destination is a Replica of a website having name footlocker,
The website offers a wide selection of products from top brands such as Nike, Adidas, and Jordan.</Heading></Box>
<Box margin="auto" width="95%"  gap="20px"  justifyContent={"space-between"} display={"flex"}><Box border="1px solid red" mt="20px"><Heading color="red.200"  textAlign={"center"} as="h6" size="md">TECH STACK</Heading></Box>
<Box mt="20px" border="1px solid green"><Heading  className="project-tech-stack" color="green.200" as="h6" size="md">JavaScript,HTML,CSS</Heading></Box></Box>
<Box  margin="auto" width="95%"  mt="10px"   justifyContent="space-between" display="flex"><Box width="70%"><FaHandPointRight size="25px"/></Box><Box width="20%" justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://gentle-biscochitos-18d259.netlify.app/"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/Footlocker"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>
<Box className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} width="40%">
<Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={img2}/>
<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="md">Happy Shop (Individual Project)</Heading>
<Box mt="20px" className={styles.box3} ><Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"} mt="15px" textAlign={"left"} as="h6" fontSize="18px">Happy Shop is a Replica of a website having
name BestBuy.Best Buy is a leading electronics retailer that offers a wide selection of products and services both in-store and online through its website bestbuy.com</Heading></Box>
<Box  margin="auto" width="95%"  gap="20px"  justifyContent={"space-between"} display={"flex"}><Box border="1px solid red" mt="20px"><Heading color="red.200"  textAlign={"center"} as="h6" size="md">TECH STACK</Heading></Box>
<Box mt="20px" border="1px solid green"><Heading className="project-tech-stack"  color="green.200" as="h6" size="md">JavaScript,HTML,CSS</Heading></Box></Box>
<Box  margin="auto" width="95%"   mt="10px"   justifyContent="space-between" display="flex"><Box width="70%"><FaHandPointRight size="25px"/></Box><Box width="20%" justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://inspiring-meerkat-54075d.netlify.app/english.html"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/nostalgic-shock-8728"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>
<Box></Box>



   </Box>
   </Box>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque vel nemo. Assumenda, id a.</p>
    </Box>
  )
}
