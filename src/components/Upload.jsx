import React,{useState}from 'react';
import { storage,db} from '../firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { setDoc,doc,addDoc,collection} from 'firebase/firestore';
import './Upload.css';
const handleUpload =async(setLoader,e)=>{
    e.preventDefault();
    setLoader(true);
    const formData = e.target;
    const {file_description } = formData.elements;
    const DownloadURL ={
      timestamp :new Date(),
      description:file_description.value
    };
    const allFileInput= formData.querySelectorAll("input[type=file]");

    for (let i = 0; i < allFileInput.length; i++) {
        const {name,type} = allFileInput[i].files[0];
        const fileType = type?type?.split('/')[0]:'zip';
        const storageRef = ref(storage, `${fileType}/${name}`);
        const downloadDetails= await uploadBytes(storageRef, allFileInput[i].files[0] , { contentType:type });
       await getDownloadURL(downloadDetails.ref).then(resp => DownloadURL[fileType]={name,url:resp});
    }
          addDoc(collection(db,'project'),DownloadURL);
     formData.reset();
     


  setLoader(false);


}
function Upload() {
    const [loader, setLoader] = useState(false);


  return (

    <>
    <div className='text-white container'>
        {/* <h1 className='text-center mt-4 mt-custom-button'>Backend Upload Gallery</h1> */}
        <div className='mb-3 mt-5'>
            <div className='row'>
                <div className='col-md-6 mx-auto'>
                  <form onSubmit={handleUpload.bind(this, setLoader)}>
                  <label for="formFileSm" className="form-label mt-4">Choose an image File</label>
                <input name='img_file' className="form-control form-control-sm" id="formFileSm" type="file"/>
                <label for="formFileSm" className="form-label mt-4">Choose a Zip File</label>
              <input name='zip_file' className="form-control form-control-sm" id="formFileSm" type="file"/>
              <input type="text" name="file_description" className="mt-4 form-control form-control-sm"
                placeholder="Enter the title of your project"/>
              <button type="submit" className="btn btn-primary mt-3" disabled={loader}>
              {!loader? 'Upload Docs':  'Processing...'}
              
              </button>
                  </form>
                
            </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Upload