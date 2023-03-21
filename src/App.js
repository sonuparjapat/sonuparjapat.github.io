import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
// import { Button } from "react-scroll";
import { Button  } from "@chakra-ui/button";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import { color } from "framer-motion";
import Navbar from "./components/Navbar";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
    <Navbar/>
    </>
//     <Flex p={5}>
//       <Flex w="100%">
//         <Heading
//           ml="8" size="md" fontWeight='semibold' color="cyan.400">imthepk</Heading>

//         <Spacer></Spacer>
//       <Button size={{sm:"2px",md:"5px",lg:"10px"}}
//  _hover={{ bg:isDark? "teal.300":"teal.200" }} bgColor={isDark?null:"white"} variant="ghost">HOME</Button>
//         <Button  bgColor={isDark?null:"white"} variant="ghost">About Me</Button>
//         <Button bgColor={isDark?null:"white"} variant="ghost">Skills</Button>
//         <Button bgColor={isDark?null:"white"} variant="ghost">Project</Button>
//         <Button bgColor={isDark?null:"white"} variant="ghost">Contact & Resume</Button>
//         <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
//       </Flex>
//       </Flex>
   
   
  );
}

export default App;
   {/* <Header></Header>
      <Social></Social>
      <Profile></Profile> */}