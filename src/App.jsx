import { BrowserRouter } from "react-router-dom"
import CustomRouter from "./root/customRouter"

function App() {

  return (
    <BrowserRouter> 
      <CustomRouter />
    </BrowserRouter>
  )
}

export default App
