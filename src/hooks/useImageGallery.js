import { useEffect, useState } from "react";

function useImageGallery(id, offset=0, limit=20) {
    const [imageList, setImageList] = useState([])
    
    const downloadImageList = async () => {
        let response, data

        if (id) {
            try {
                response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
                data = await response.json()
            } catch (error) {
                console.log("error in fetching data");
            }

            setImageList({
                id: data.photo.id,
                description: data.photo.description,
                url: data.photo.url,
                title: data.photo.title
            })
            
        }else{
            try {
                response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=${limit}`);
                data = await response.json()
            } catch (error) {
                console.log("error in fetching data");
            }
            const photos = data.photos.map((image) => {
                return {
                    id: image.id,
                    description: image.description,
                    url: image.url,
                    title: image.title,
                }
            })
            setImageList(photos)
        }
    }

    useEffect(() => {
        downloadImageList()
    }, [offset, limit])

    return [imageList, setImageList]
}

export default useImageGallery
