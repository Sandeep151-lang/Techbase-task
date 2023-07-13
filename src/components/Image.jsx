import React, { useState ,useEffect } from 'react'

const Image = () => {
    const [images, setImages] = useState([]);

    const img = JSON.parse(localStorage.getItem('images')) || []
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        localStorage.setItem('images',JSON.stringify([{images:newImageUrls}]))
      }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
      }

  return (
    <>
    
    <div className="mb-3 container  ">
        <input type="file" className="form-control" multiple accept="image/*" onChange={onImageChange} />
        
        <div className='row  m-auto ' > 
        {

          img[0]?.images.map((item)=> {
            return <>
            <div className='col-12 mt-3 col-md-4 col-sm-6 col-xs-12 m-auto d-flex'>

                  <img  src={item} alt="not fount" className='m-auto align-item-center'/>
            </div>
                
                </>
            })
          }
          </div>
       
        </div>
    </>
  )
}

export default Image