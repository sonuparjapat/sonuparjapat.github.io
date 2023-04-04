import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import styles from "./Github.module.css"
import { Box, Heading,Image } from '@chakra-ui/react'
export default function Github() {
  return (
    <>
    <Box   mt="20px" ><Heading  textAlign="center">MY GITHUB JOURNEY</Heading>
    <Box>
<Box >
  <Box  margin="auto" width="80%"  mt="30px" className={styles.box3} >
  <Box margin="auto" width="80%" >
    <Box textAlign={"center"}>
    <span style={{textAlign:"center",fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{textAlign:"center",fontWeight:"light",color:"rgb(0,255,162)"}}> Calender</span></span></Box>
      <GitHubCalendar responsive={true}
          fullYear={true}
           username="sonuparjapat" />
      

  </Box></Box></Box>
 
  <Box textAlign="center" gridGap="45px" display="grid" gridTemplateColumns={['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(3,1fr)', 'repeat(3,1fr)']}   margin="auto" width="80%"  mt="30px" className={styles.box3} >
  <Box mt="5px"  width="100%"  id="github-stats-card" >
 <span  style={{marginLeft:"10px",fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{fontWeight:"light",color:"rgb(0,255,162)"}}> Stats</span></span>
  <Box marginTop="0px"  height={{sm:"200px",md:'200px',lg:"200px",xl:"150px"}} ><Image width="100%" height={{sm:"100%",md:'100%',lg:"100%px",xl:"100%"}}  src="https://github-readme-stats.vercel.app/api?username=sonuparjapat&theme=dark&hide_border=false&include_all_commits=false&count_private=false"/>
  </Box></Box>
  <Box mt="5px"  width="100%"  id="github-streak-stats" >
 <span  style={{marginLeft:"10px",fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{fontWeight:"light",color:"rgb(0,255,162)"}}>Streaks</span></span>
  <Box  marginTop="0px" height={{sm:"200px",md:'200px',lg:"200px",xl:"150px"}} ><Image width="100%" height={{sm:"100%",md:'100%',lg:"100%px",xl:"100%"}} src="https://github-readme-streak-stats.herokuapp.com/?user=sonuparjapat&theme=dark&hide_border=false"/>
  </Box></Box>
  <Box mt="5px" width="100%"   id="github-top-langs" >
 <span  style={{fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{fontWeight:"light",color:"rgb(0,255,162)"}}>Languages</span></span>
  <Box  marginTop="0px" height={{sm:"200px",md:'200px',lg:"200px",xl:"150px"}}>
    
    
    <Image width="100%" height={{sm:"100%",md:'100%',lg:"100%px",xl:"100%"}}  src="https://github-readme-stats.vercel.app/api/top-langs/?username=sonuparjapat&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"/>
  </Box></Box>
  
  
  </Box>
  </Box>
  {/* <Box ml="20px" width="100%"  >
    <Box textAlign="center">
    <span style={{fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{fontWeight:"light",color:"rgb(0,255,162)"}}> Streaks</span></span></Box>
    <Box > <Image  width="100%" height="160px" margin="auto" src="https://github-readme-streak-stats.herokuapp.com/?user=sonuparjapat&theme=dark&hide_border=false"/>
    </Box> 
  
  </Box>
  
  <Box ml="20px"  width="100%"  >
    <Box textAlign="center">
    <span style={{fontWeight:"light",fontSize:"20px"}}>
      Github <span style={{fontWeight:"light",color:"rgb(0,255,162)"}}> Languages</span></span></Box>
    <Box  height="95%"  > <Image  height="160px" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sonuparjapat&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"/>
    </Box> 
  
  </Box>
  
  </Box>
</Box>
 */}




  
</Box>


 
    </>
  )
}
