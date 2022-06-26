import React from 'react';

function PhotoItem(props) {
  const { photo, onDelete } = props;
  return (
    <div className='d-flex flex-column mt-4'>
      <button
        className='btn d-block align-self-end'
        type='submit'
        onClick={() => onDelete(photo.id)}
      >
        {'\u2718'}
      </button>
      <img
        className='me-2 d-block'
        style={{ height: '100px' }}
        src={photo.url}
        alt=''
      />
    </div>
  );
}

export default PhotoItem;
