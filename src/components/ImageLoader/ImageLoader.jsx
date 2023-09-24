import { useParams } from 'react-router-dom'
import useImageGallery from '../../hooks/useImageGallery'

function ImageLoader() {
    const {id} = useParams()
    const [imageList, setImageList] = useImageGallery(id)

    return(
        <div className='max-w-full h-screen flex flex-wrap bg-slate-200 justify-center items-center'>
            <div className='max-w-7xl sm:flex justify-around items-center mx-2'>
                <div className=' mb-4 sm:mr-5'>
                    <img 
                    src={imageList.url} width={900}
                    className='rounded-lg cursor-pointer'
                    />
                </div>
                <div>
                    <h1 className='text-2xl sm:text-4xl  font-bold mb-5'>{(imageList.title)}</h1>
                    <p className='sm:text-xl text-md '>{imageList.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageLoader
