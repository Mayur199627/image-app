import React ,{useEffect, useState} from 'react'


function ImageContainer() {
    const [imageUrl, setImageUrl] = useState('')
    const [imgName, setImageName] = useState("")
    const [imageContainer, setImageContainer] = useState([])
    const [list, setList] = useState(false);

    const addImage = () =>{
        if(imageUrl === ''){
            return
        }else{
            let newImageObj = {
                id : Date.now(),
                name : imgName,
                imgUrl : imageUrl
            };
            setImageContainer(imageContainer =>[...imageContainer, newImageObj])
        }
    }

    const removeImage = (index) =>{
        imageContainer.splice(index,1)
        setImageContainer(imageContainer=>[...imageContainer])
    }

  return (
    <div className='image-cont'>
        <div className="add-cont">
            <input type="url" name="image"  accept='image' id='imageURL' placeholder='Enter image url...' onChange={(e)=>{setImageUrl(e.target.value)}} />
            <input type="text" name="img-name" id='img-name' placeholder='Enter image name...'  onChange={(e)=>{setImageName(e.target.value)}}/>
            <button onClick={addImage}>Add Image</button>
        </div>
        <div className="image-render-cont">
            {imageContainer.map((img,idx)=>{
                return (
                    <div key={idx}>
                    <img src={img.imgUrl} alt="img" height={250} width={200}/>
                    <p style={{textAlign:'center', fontSize:'1.2rem', fontWeight:'500'}}>{img.name}</p>
                    <p style={{textAlign:'center', fontSize:'1.5rem',color:'red', cursor:'pointer'}} onClick={()=>removeImage(idx)}><i class="fa-solid fa-trash"></i></p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ImageContainer