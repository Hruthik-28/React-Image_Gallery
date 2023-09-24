import { Link } from "react-router-dom"
import useImageGallery from "../../hooks/useImageGallery"
import { useState } from "react"

function ImageGallery() {
    const [offset, setOffset] = useState(0)
    const [limit ] = useState(20)
    const [imageList ] = useImageGallery(null, offset, limit)
    // console.log(imageList);

    //pagenation
    const nextPage = () => setOffset(offset + limit)
    const prevpage = () => {
        if (offset - limit >= 0) {
            setOffset(offset - limit)
        }
    }

    return( 
        <div className="font-mono bg-slate-200">
            <h1 className="sm:text-4xl text-2xl text-center py-5 bg-slate-200">React Image Gallery</h1>
            <div className="flex flex-wrap justify-center gap-4 pt-2 pb-4">
                {
                    imageList.map(
                        (image, idx) => 
                            <Link to={`/img/${image.id}`} key={idx}>
                                <img 
                                src={image.url} 
                                width={300} 
                                className="rounded-lg cursor-pointer hover:scale-90 transition-all"
                                />
                            </Link>
                    )
                }
            </div>
            <div className="flex justify-center gap-2 pb-5">
                <button
                className="text-xl border-1 border-gray-200 px-5 py-3 bg-slate-300 rounded-lg hover:bg-slate-400"
                disabled={offset == 0}
                onClick={prevpage}
                >
                    Prev
                </button>
                <button
                className="text-xl border-1 border-gray-200 px-5 py-3 bg-slate-300 rounded-lg hover:bg-slate-400"
                disabled={offset == 120}
                onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default ImageGallery
