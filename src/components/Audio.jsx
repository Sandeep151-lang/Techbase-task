import React,{useState,useEffect} from 'react'

const Audio = () => {
  
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);

    const img = JSON.parse(localStorage.getItem('images')) || []
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
       
        localStorage.setItem('audio',JSON.stringify([newImageUrls]))
        setImageURLs(newImageUrls);
      }, [images]);

    function onImageChange(e) {
        console.log(e)
        setImages([...e.target.files]);
      }

    
  return (
    <>
      {/* <input type="file" multiple accept="audio/*" onChange={(e)=>console.log(e)} /> */}
      <input type='file' className="form-control" accept="video/*" onChange={onImageChange} />
      {/* <input class="someClass" type="file" name="UploadAudio" multiple accept="audio/mp3" onChange={(e)=>addFile(e)}/> */}
        {
            
            img[0]?.images.map((item)=> {
                <>
                <audio controls autoplay muted>
                    <source src={item} type="audio/ogg"/>
                </audio>
                </>
            })
        }
  
    </>
  )
}

export default Audio