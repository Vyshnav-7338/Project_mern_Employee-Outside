import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Upload({ profileDetails, addressDetails }) {
  const [image, setImage] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const navigate =useNavigate()
  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append("Photo", image);
    formdata.append("IdProof", image1);
    formdata.append("policeClearCertificate", image2);
    formdata.append("FirstName", profileDetails.FirstName);
    formdata.append("LastName", profileDetails.LastName);
    formdata.append("phone", profileDetails.phone);
    formdata.append("Address", addressDetails.Address);
    formdata.append("AlternativeNumber", addressDetails.AlternativeNumber);
    formdata.append("Aadhaar", addressDetails.Aadhaar);
    
    axios
      .post("http://localhost:3001/upload", formdata)
      .then((res) => {console.log(res)
      navigate("/")
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div>
      <label htmlFor="">Photo: </label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br/>
      <label htmlFor="">IdProof: </label>

      <input type="file" onChange={(e) => setImage1(e.target.files[0])} /><br/>
      <label htmlFor="">PoliceClearCertificate: </label>

      <input type="file" onChange={(e) => setImage2(e.target.files[0])} /><br/>
      <button className="btn-err" onClick={handleUpload}>Upload</button>
      <br />
      
    
  </div>
  );
}

export default Upload;
