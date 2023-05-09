import { ReactNode } from 'react';
import cv from "../components/resume/Sonu-Resume.pdf"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import Home from './Home';
import Github from './Github';
import About from './About';
// import styles from "../App.css"
import {Link as RCTLINK} from "react-scroll"
import { FaMoon,FaSun } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import { useColorMode } from '@chakra-ui/react/dist';
import { useColorMode } from "@chakra-ui/color-mode";
import image from "./images/logo.jpg"
// import Home from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import styles from "../components/Navbar.module.css"
// console.log(styles)
// 
const Links = [{ id:"home",a:"Home",class:"nav-link home"},{id:"about",a:'About',class:"nav-link about"},
{id:"skills",a:"Skills",class:"nav-link skills"},{id:"projects",a:'Projects',class:"nav-link projects"},
 {id:"contact",a:'Contact',class:"nav-link contact"}];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//   >
//     {children}
//   </Link>


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  // console.log(isOpen)
  const handleclick=()=>{
    window.open("https://drive.google.com/file/d/105fE_qQa520vtTCgPx-qGTd2RmNE5lqL/view?usp=share_link")
  }
  return (
    <>
    {/* <div style={{position:"sticky",top:"2px"}}> */}
      <Box 
    
      color={isDark?"white":"black"}
       position={"sticky"}   top="0.1px"   zIndex={'overlay'} id="nav-menu"
    
      width={"100%"}
       bg={useColorModeValue('#77bbad',"#557A95" )}
        >
        <Flex width="100%" h={16} alignItems={'center'}   justifyContent={'space-between'}>
        <Flex width="10%"  alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                  <Flex>
                <Avatar
                  size={'sm'}
                  src={
                   image
                  }
           
                />
                {/* <Spacer/> */}
                <Box display={{base:"none",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}} ml="10px" mt="5px"><Heading as={"h6"} color="teal.300" display={"inline"}  fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}}>{"<S"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#bd651e">{"O"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#D79922">{"N"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#3FEEE6">{"U>"}</Heading>
               {/* <Heading style={{color:"#D79922",fontSize:"20px"}}>{"N"}</Heading><Heading style={{color:"#3FEEE6",fontSize:"20px"}}>{"U/>"}</Heading> */}
                </Box></Flex>
              </MenuButton>
          
            </Menu>
          </Flex>
      
          <IconButton size={"5px"}  display={{base:"inline",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}}  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            <HStack
            justifyContent={"space-around"}
            className={styles.add}
// width={{sm:"85%",md:"25%",lg:"45%",xl:"35%"}}
          
            // marginRight= "400px"
              as={'nav'}
              spacing={2}
              display="flex">
                  
              {Links.map((link) => (
                <RCTLINK   activeClass="active"
  
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} to={link.id}  className={link.class}  hover={{color:"red"}} key={link.a}><Link fontSize={{base:"12px",md:"15px",lg:"15px",xl:"15px","2xl":"15px"}}_hover={{color:"teal"}}>{link.a}</Link></RCTLINK>
              ))}
             <a className='nav-link resume' paddingTop="2px"  _hover={{bg:"teal"}} href={cv} download> <Button onClick={handleclick} width={["0.1em","2em","4em","4em","4em"]} fontSize={{base:"10px",md:"15px",lg:"15px",xl:"15px","2xl":"15px"}} id="resume-button-1"
>Resume</Button></a>
            </HStack>

         
        </Flex>

      </Box>
      <Home/>
<About open={isDark}/>

<Skills />
<Projects open={isDark}/>

<Github open={isDark}/>
    <Contact open={isDark}/>
    </>
  );
}