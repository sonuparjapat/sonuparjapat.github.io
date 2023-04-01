import { Box, Heading,Image } from '@chakra-ui/react'
import React from 'react'
import styles from "./Skill.module.css"
import { useDisclosure,useColorMode } from '@chakra-ui/react';
export default function Skills() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box bg={isDark&&"gray.800"} height={"550px"}  id="skills">
<Heading mt="20px" as="h6" textAlign={"center"} >SKILLS</Heading>
<Box margin="auto" mt="50px" height="400px" className={styles.box3} width="80%" >
<Box  ml={['2em', '3em', '4em', '4em', '4em', '4em']} width="98%" height="100%"  paddingTop="60px"    display={"grid"}  gridTemplateColumns={{base:"repeat(3,1fr)",md:"repeat(3,1fr)",lg:"repeat(3,1fr)",xl:"repeat(4,1fr)"}}>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/><Box  className="skills-card-name"></Box></Box>
<Box  className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/><Box  className="skills-card-name"></Box></Box>
<Box  className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img"  id={styles.box4} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
{/* <Heading as="h6" fontWeight={"light"} fontSize="6px">Javascript</Heading */}
<Box  className="skills-card-name"></Box>
</Box>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4} 
src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png"/><Box  className="skills-card-name"></Box></Box>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img"  id={styles.box4}
 src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png"/><Box  className="skills-card-name"></Box></Box>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4} src="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"/><Box  className="skills-card-name"></Box></Box>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4}  src="https://cdn-icons-png.flaticon.com/512/919/919825.png"/><Box  className="skills-card-name"></Box></Box>
<Box className="skills-card" width={['2em', '3em', '4em', '4em', '4em', '4em']} ><Image className="skills-card-img" id={styles.box4} src="https://images.opencollective.com/chakra-ui/eb43264/logo/256.png"/><Box  className="skills-card-name"></Box></Box>



</Box>

</Box>




    </Box>
  )
}
