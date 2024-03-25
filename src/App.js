import { Box, Container, Stack } from "@mui/material";
import Content from "./assets/Components/Content";
import RightBar from "./assets/Components/RightBar";
import MenuBar from "./assets/Components/MenuBar";
import Navbar from "./assets/Components/Navbar";



function App() {
  return (
    <Box>
    <Navbar/>
    <Container maxWidth="xl">
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <MenuBar/>
      <Content/>
      <RightBar/>
    </Stack>
    </Container>
    </Box>
  );
}

export default App;
