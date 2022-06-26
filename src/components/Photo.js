import nextId from 'react-id-generator';
import { useState } from 'react';
import DataForm from './DataForm';
import PhotoList from './PhotoList';

function Photo(props) {
  const [photos, setPhotos] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', (evt) => {
        resolve(evt.currentTarget.result);
      });

      fileReader.addEventListener('error', (evt) => {
        reject(new Error(evt.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
    });
  };

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    urls.forEach((item) =>
      setPhotos((prevPhotos) => [...prevPhotos, { id: nextId(), url: item }])
    );
  };

  const handleDelete = (id) => {
    setPhotos((prevPhotos) => prevPhotos.filter((photo) => photo.id !== id));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 h-100'>
      <div style={{ width: '600px' }}>
        <DataForm onSelect={handleSelect} />
        <PhotoList photos={photos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default Photo;
