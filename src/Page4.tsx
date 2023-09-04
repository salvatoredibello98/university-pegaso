// @ts-nocheck

import React, { useState } from 'react';
import axios from 'axios';

function UploadImage({filename, setFilename}) {
  const [uploadMessage, setUploadMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      setFilename(selectedFile.name);

      const response = await axios.post('http://localhost:3000/upload', formData, {
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

  return (
    
    <div>
         <h1>Seleziona Opzioni</h1>
      <label>
        <input
          type="checkbox"
          value="Giurisprudenza"
         /*  checked={selectedOptions.includes('Giurisprudenza')}
          onChange={handleCheckboxChange} */
        />
        Giurisprudenza
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Ingegneria"
        /*   checked={selectedOptions.includes('Ingegneria')}
          onChange={handleCheckboxChange} */
        />
        Ingegneria
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="Economia"
          /* checked={selectedOptions.includes('Economia')}
          onChange={handleCheckboxChange} */
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
