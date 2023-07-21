import cv from "../components/resume/Sonu-Resume.pdf"
import Home from './Home';
import Github from './Github';
import About from './About';
// import styles from "../App.css"
import {Link as RCTLINK} from "react-scroll"
import { FaMoon,FaSun } from 'react-icons/fa';

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


import {
    Avatar,
    Box,
    Flex,
    Text,
    Heading,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  const Links = [{ id:"home",a:"Home",class:"nav-link home"},{id:"about",a:'About',class:"nav-link about"},
{id:"skills",a:"Skills",class:"nav-link skills"},{id:"projects",a:'Projects',class:"nav-link projects"},
 {id:"contact",a:'Contact',class:"nav-link contact"}];

  
  export default function Navbar2() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  
    const handleclick=()=>{
        window.open("https://drive.google.com/file/d/14ZYIjSF_WAFUTsK9MFombf4hkJdxySsl/view")
      }
    return (
        <>
      <Box   color={isDark?"white":"black"}
      position={"sticky"}   top="0.1px"   zIndex={'overlay'} id="nav-menu"
   
     width={"100%"}
      bg={useColorModeValue('#77bbad',"#557A95" )}>
        <Flex
          bg={useColorModeValue('#77bbad', "#557A95")}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    <Avatar
                  size={'sm'}
                  src={
                   image
                  }
           
                />
     <Box display={{base:"none",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}} ml="10px" mt="5px"><Heading as={"h6"} color="teal.300" display={"inline"}  fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}}>{"<S"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#bd651e">{"O"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#D79922">{"N"}</Heading>
             <Heading as={"h6"} display={"inline"} fontSize={{sm:"5px",md:"10px",xl:"15px",lg:"15px",xl:"20px"}} color="#3FEEE6">{"U>"}</Heading>
               {/* <Heading style={{color:"#D79922",fontSize:"20px"}}>{"N"}</Heading><Heading style={{color:"#3FEEE6",fontSize:"20px"}}>{"U/>"}</Heading> */}
                </Box>
            
          </Flex>
  
          <Stack
       
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            
            </Flex>
            <IconButton size={"5px"}  display={{base:"inline",md:"inline",lg:"inline",xl:"inline","2xl":"inline"}}  icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
            <a className='nav-link resume' paddingTop="2px"  _hover={{bg:"teal"}} href={cv} download>  <Button
         
            //   display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              id="resume-button-1"
              onClick={handleclick}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
           Resume
            </Button>
          </a>




          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
  
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
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} mt="5px">
        {Links.map((link) => (
          <Box key={link.id}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <RCTLINK
              activeClass="active"
  
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} to={link.id}  className={link.class} 
                  p={2}
                 
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {link.a}
                </RCTLINK>
              </PopoverTrigger>
  
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {Links.map((navItem) => (
          <MobileNavItem key={navItem.id} navItem={navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ navItem }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} >
        <Flex
          py={2}
        
        
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <RCTLINK
            activeClass="active"
  
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} to={navItem.id}  className={navItem.class} 
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {navItem.a}
          </RCTLINK>
         
        </Flex>
  
      </Stack>
    );
  };

  
  