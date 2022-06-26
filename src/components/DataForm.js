import React from 'react';

function DataForm(props) {
  const { onSelect } = props;

  return (
    <div className='position-relative'>
      {/* <div className='fakeLoader'>Click to select</div> */}
      <div
        className='d-flex align-items-center justify-content-center position-absolute pe-none border border-4 border-dark rounded-pill fs-2 w-100'
        style={{ height: '200px' }}
      >
        Click to select
      </div>
      <input
        className='w-100'
        style={{ height: '200px', cursor: 'pointer', opacity: '0' }}
        type='file'
        multiple
        onChange={onSelect}
      />
    </div>
  );
}

export default DataForm;
