import { Box, Heading,Image } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import smart from "./images/smartcart.jpg"
import {FaInternetExplorer,FaFirefoxBrowser,FaGithub,FaHandPointRight} from "react-icons/fa"
import { BsBrowserChrome } from "react-icons/bs"
import React from 'react'
import styles from "./Project.module.css"
import happy2 from "./images/happy2.JPG"
import shine2 from "./images/shine2.JPG"
import img1 from "./images/foolocker.jpg"
import foot2 from "./images/footlocker/2.JPG"
import smartcart2 from "./images/smartcart2.JPG"
import foot3 from "./images/footlocker/3.JPG"
import foot4 from "./images/footlocker/4.JPG"
import img2 from "./images/happshop.jpg"
import img3 from "./images/shineu.jpg"
export default function Projects({open}) {
  return (
   <Box bg={open?"gray.700":"white"}   id="projects">
   <Box  paddingTop="20px"> <Heading textAlign="center"  as="h6" >PROJECTS</Heading></Box>
   <Box margin="auto" mt="20px"  width="80%"  >
    <Box margin="auto" width="100%"  
    display="grid" 
    gap="50px"
    
    // height={"500px"}
gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)']}
    justifyContent="space-around"
    // height={['46em', '37em', '26em', '31em', '31em', '37em']} 
    >

{/* height={['10.9em', '8.8em', '9.5em', '10.6em', '9.3em', '9.3em']} */}
<Box  id={styles.box5}    className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} >
  1.
  <Box display="grid" gap="20px" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']}>
<Box><Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={img2}/></Box>
<Box> <Image display={['none', 'none', 'inline', 'inline', 'inline', 'inline']}  transition= "transform 0.3s ease-in-out"  className={styles.box4} src={happy2}/></Box></Box>


<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="18px">REGSTUFF </Heading><Box textAlign="center"><span>(Collaborative Project)</span></Box>
<Box  mt="5px"  ><Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"}
 textAlign={"center"} as="h6" 
 fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>Regstuff is a Replica of a website having
name Dailyobjects.com.Dailyobjects.com is an online retailer of mobile phone cases, covers, and accessories in India. They offer a wide range of designs and brands to choose from, and their products are known for their quality and durability.</Heading></Box>
<Box  margin="auto" width="95%"  gap="20px"  justifyContent={"space-between"} display={"flex"}><Box mt="20px"><Heading color="red.200"  textAlign={"center"} as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>TECH <br></br>STACK</Heading></Box>
<Box mt="20px" ><Heading className="project-tech-stack"  color="green.200" as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>React,Redux,Mongodb,Express<br></br>,Node.js,ChakraUi,MaterialUI</Heading></Box></Box>
<Box  margin="auto" width="95%"   mt="10px"   justifyContent="space-between" display="flex"><Box width="70%"><FaHandPointRight size="25px"/></Box><Box width={['25%', '14%', '10%', '10%', '10%', '10%']} justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://regstuff.vercel.app/" target="_blank"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/dailyobjects-clone-" target="_blank"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>
<Box  id={styles.box5} className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} 
>2.
<Box gap="20px" display="grid" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']}>
<Box><Image  transition= "transform 0.3s ease-in-out"  className={styles.box4} src={foot2}/></Box>
  <Box><Image display={['none', 'none', 'inline', 'inline', 'inline', 'inline']}  transition= "transform 0.3s ease-in-out"  className={styles.box4} src={img1}/></Box>

  {/* <Box><Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={foot3}/></Box>
  <Box><Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={foot4}/></Box> */}
  
  </Box>
<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="18px">One Destination </Heading><Box textAlign="center"><span>(Collaborative Project)</span></Box>
<Box  mt="5px" > <Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"}  textAlign={"center"} as="h6"
 fontSize={['0.8em', '0.8em', '0.8em', '1em', '1em', '4em']} >One Destination is a Replica of a website having name footlocker,
The website offers a wide selection of products from top brands such as Nike, Adidas, and Jordan.</Heading></Box>
<Box margin="auto" width="95%"  gap="10px"  justifyContent={"space-between"} display={"flex"}><Box  mt="20px"><Heading color="red.200"  textAlign={"center"} as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>TECH STACK</Heading></Box>
<Box mt="20px"><Heading  className="project-tech-stack" color="green.200" as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>JavaScript,HTML,CSS</Heading></Box></Box>
<Box  margin="auto" width="95%"  mt="10px"   justifyContent="space-between" display="flex"><Box width="50%"><FaHandPointRight size="25px"/></Box><Box width={['25%', '14%', '10%', '10%', '10%', '10%']} justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://onedestination.netlify.app/" target="_blank"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/Footlocker" target="_blank"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>

<Box  id={styles.box5}   className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} >
  3.
  <Box display="grid" gap="20px" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']}>
  
  <Box><Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={smart}/></Box>
  <Box><Image  display={['none', 'none', 'inline', 'inline', 'inline', 'inline']}   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={smartcart2}/></Box></Box>
<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="18px">Smart Cart </Heading><Box textAlign="center"><span>(Collaborative Project)</span></Box>
<Box  mt="5px"  ><Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"}
 textAlign={"center"} as="h6"
 fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>SmartCart is a Replica of a website having
name ebay.com.It's a online marketplace that allows individuals and businesses to buy and sell a wide variety of goods and services.</Heading></Box>
<Box  margin="auto" width="95%"  gap="20px"  justifyContent={"space-between"} display={"flex"}><Box mt="20px"><Heading color="red.200"  mt="7px" textAlign={"center"} as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>TECH <br></br>STACK</Heading></Box>
<Box  mt="20px" ><Heading className="project-tech-stack"  color="green.200" as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>React,Redux,ChakraUI,<br></br>JavaScript,HTML,CSS</Heading></Box></Box>
<Box  margin="auto" width="95%"   mt="10px"   justifyContent="space-between" display="flex"><Box width="70%"><FaHandPointRight size="25px"/></Box><Box width={['25%', '14%', '10%', '10%', '10%', '10%']} justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://smart-mycart.netlify.app/" target="_blank"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/smartcart-ebay.com-" target="_blank"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>
<Box  id={styles.box5}   className="project-card" transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.04)"}} >
  4.
  <Box display="grid" gap="20px" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)']}>
<Box><Image   transition= "transform 0.3s ease-in-out"  className={styles.box4} src={img3}/></Box>
<Box><Image  display={['none', 'none', 'inline', 'inline', 'inline', 'inline']}    transition= "transform 0.3s ease-in-out"  className={styles.box4} src={shine2}/> </Box></Box>
<Heading className="project-title" mt="15px" textAlign={"center"} as="h6" size="18px">ShineU </Heading><Box textAlign="center"><span>(Individual Project)</span></Box>
<Box  mt="5px" ><Box margin="auto" width="95%" pt="1px" ><Heading className="project-description" fontWeight={"light"}
 textAlign={"center"} as="h6"
 fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>ShineU is a Replica of a website having
name Purple.com.It's a beauty and cosmatics website that provides the products which are related to the beauty and makeup.</Heading></Box>
<Box  margin="auto" width="95%"  gap="20px"  justifyContent={"space-between"} display={"flex"}><Box mt="20px"><Heading color="red.200"  textAlign={"center"} as="h6"  mt="7px"   fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>TECH <br></br>STACK</Heading></Box>
<Box mt="20px" ><Heading className="project-tech-stack"  color="green.200" as="h6" fontSize={['0.8em', '0.8em', '0.8em', '1em', '0.9em', '0.9em']}>React,ChakraUI,HTML,<br></br>CSS,JavaScript</Heading></Box></Box>
<Box  margin="auto" width="95%"   mt="10px"   justifyContent="space-between" display="flex"><Box width="70%"><FaHandPointRight size="25px"/></Box><Box width={['25%', '14%', '10%', '10%', '10%', '10%']} justifyContent="space-between" display="flex">
<Box transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}><Link className="project-deployed-link" to="https://shineu.netlify.app/" target="_blank"><BsBrowserChrome  size="25px" /></Link></Box>
<Box  transition= "transform 0.3s ease-in-out" _hover={{transform:"scale(1.3)"}}>
<Link className="project-github-link" to="https://github.com/sonuparjapat/salty-face-9626" target="_blank"><FaGithub size="25px"/></Link>
</Box>
</Box>

</Box>

</Box>

</Box>

<Box></Box>



   </Box>
   </Box>

    </Box>
  )
}
