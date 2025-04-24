import React from 'react'
import './Page.css'

const ClassPage = () => {
  return (
    <div className='page'>
      <h1>Danh sách lớp học</h1>
      <table id="classTable">
        <thead>
          <tr>
          <th style={{ display: 'none' }}>Database Entry Id</th>
            <th>ID</th>
            <th>Name</th>
            <th>Teacher</th>
            <th>Students</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="classList">
          {/* Import here */}
        </tbody>
      </table>
      <div id="paginationControls" className="pagination-controls"></div>
    </div>
  );
};

export default ClassPage;
