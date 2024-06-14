import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useState } from "react";
import { storage } from '../../config/firebase'

export const UploadImg = () => {
  const [img, setImg] = useState<File | null>();
  
  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.files && e.target.files[0]) {
        setImg(e.target.files[0]);
    }
  }

  async function uploadImg() {
    if (!img) return;

    const imgRef = ref(storage, 'images/test1');
    
    try {
        const snapshot = await uploadBytes(imgRef, img);
        const uploadedImgUrl = await getDownloadURL(snapshot.ref);

        console.log(uploadedImgUrl);
        
    } catch (err) {
        console.error(err);
    }
  }

  return ( 
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={uploadImg}>Upload</button>
    </div>
  );
};
