// @ts-nocheck

import React, { useState, useEffect } from 'react';
import useCookies from './hooks/useCookies';

function Page3({filename, setFilename}) {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (!filename) {
      // If filename is empty, clear the imageURL
      setImageURL('');
      return;
    }

    // Fetch the image from the server
    fetch(`http://localhost:3000/image/${filename}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.blob();
      })
      .then((imageBlob) => {
        // Create a Blob URL for the image
        const objectURL = URL.createObjectURL(imageBlob);
        setImageURL(objectURL);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [filename]);

  // Function to handle filename input change
  const handleFilenameChange = (event) => {
    setFilename(event.target.value);
  };

  return (
    <div>
      {/* Input field for entering the filename */}
      <p>
        Enter filename to fetch image on the server
      </p>
      <input
        type="text"
        placeholder="Enter filename"
        value={filename}
        onChange={handleFilenameChange}
      />
      {imageURL && <img src={imageURL} alt="Server Image" />}
    </div>
  );
}

export default Page3;
