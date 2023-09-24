import { Route, Routes } from "react-router-dom";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import ImageLoader from "../components/ImageLoader/ImageLoader";

function CustomRouter() {
    return(
        <Routes>
            <Route path='/' element={<ImageGallery />}/>
            <Route path='/img/:id' element={<ImageLoader />}/>
        </Routes>
    )
}

export default CustomRouter
