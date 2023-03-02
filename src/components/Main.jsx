import React,{useEffect,useState} from 'react'
import Form from './form.css';
import Navbar from './Navbar';
import Search from './Search';
import { getDocs,collection} from 'firebase/firestore';
import { db } from '../firebase';


function Main() {
  const [allProduct, setAllProduct] = useState({});

  useEffect(() => {
    let dataProduct ={}
     getDocs(collection(db, "project")).then(snapshot =>{
      snapshot.forEach(doc=>dataProduct[doc.id]=doc.data());
      setAllProduct(dataProduct)
      console.log(dataProduct);
   })
 },[]);


  
  return (<>
          <Navbar/>
         <div className='text-white'>
        <p className='container lead mb-4'>Get access to every computer science project  
        <span className='badge bg-primary ml-custom p-2'>Just Search</span></p>
        </div>
        <Search/>
        <div className='text-white container text-center h1 mt-4 p-4'>
        <div className='row'>
        { Object.entries(allProduct).map(SingleProduct =>{
                  const { image,description,timestamp }=  SingleProduct[1]
                  return(
                    <div className='col-md-6'>
                    <div className='card style={{width:120px;}}'>
                    <img src={image?.url}
                    className='card-img-top'
                    />
                     <div className='card-body'>
                      <h5 className="card-title text-black">{description}</h5>
                       <a href="#" className="btn btn-primary">Download code</a>
                     </div>
                    </div>
                    </div>
                  )
        })}

        </div>
        </div>
          


        {/* <Card />  */}
       </>
    
  )
}

export default Main;