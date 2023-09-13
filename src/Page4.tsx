// @ts-nocheck

import React, { useState } from 'react';
import axios from 'axios';
import "./Page4.css";
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
    <div className="container">
    <h1 className="section-title">Seleziona Opzioni</h1>
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="checkbox"
        value="Comunicazione"
        onClick={handleCheckboxChange}
      />
      Comunicazione e Multimedialità
    </label>
    <br />
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="checkbox"
        value="EducazionePrimaria"
        onClick={handleCheckboxChange}
      />
      Scienza dell'educazione primaria
    </label>
    <br />
    <label className="checkbox-label">
      <input
        type="checkbox"
        className="checkbox"
        value="Economia"
        onClick={handleCheckboxChange}
      />
      Economia
    </label>

    <h1 className="section-title">Carica un'immagine</h1>
    <input
      type="file"
      className="file-input"
      accept="image/*"
      onChange={handleFileChange}
    />
    <button className="upload-button" onClick={handleImageUpload}>
      Carica
    </button>
    {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
  </div>
  );
}

export default UploadImage;
