import PhotoItem from './PhotoItem';

function PhotoList(props) {
  const { photos, onDelete } = props;

  const elements = photos.map((photo) => {
    const { id } = photo;
    return <PhotoItem key={id} photo={photo} onDelete={() => onDelete(id)} />;
  });

  return <div className='d-flex flex-wrap mt-4'>{elements}</div>;
}

export default PhotoList;
