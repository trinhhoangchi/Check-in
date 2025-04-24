import React from 'react'
import './Page.css'

const DevicePage = () => {
  return (
    <div className='page'>
      <h1>Danh sách thiết bị</h1>
      <table id="deviceTable">
        <thead>
          <tr>
          <th style={{ display: 'none' }}>Database Entry Id</th>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="deviceList">
          {/* Import here */}
        </tbody>
      </table>
      <div id="paginationControls" className="pagination-controls"></div>
    </div>
  );
};

export default DevicePage;
