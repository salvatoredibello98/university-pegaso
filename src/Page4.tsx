// @ts-nocheck

import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './utils/url';
function UploadImage({filename, setFilename}) {
  const [uploadMessage, setUploadMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [checkboxChange, setCheckboxFile] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      const newFilename = checkboxChange+'.png'; // Set your desired new filename here
      formData.append('image', selectedFile, newFilename);
      setFilename(newFilename);
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadMessage(response.data); // Display the success message
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadMessage('Error uploading image'); // Display an error message
    }
  };
  const handleCheckboxChange = (event) => {
    setCheckboxFile(event.target.value);
    console.log('evento', event.target.value);

  };

  return (
    
    <div>
         <h1>Seleziona Opzioni</h1>
      <label>
        <input
          type="checkbox"
          value="Comunicazione"
         
          onClick={handleCheckboxChange}
        />
       Comunicazione e Multimedialità
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="EducazionePrimaria"
        /*   checked={selectedOptions.includes('Ingegneria')}
          onChange={handleCheckboxChange} */
          onClick={handleCheckboxChange}
        />
        Scienza dell'educazione primaria
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Economia"
         /*  checked={selectedOptions.includes('Economia')} */
          onClick={handleCheckboxChange}
        />
        Economia
      </label>
      {/* <br />
      <p>Opzioni selezionate: {selectedOptions.join(', ')}</p> */}
   
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
}

export default UploadImage;
