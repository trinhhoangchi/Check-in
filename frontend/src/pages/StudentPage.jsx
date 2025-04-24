import React from 'react'
import './Page.css'

const StudentPage = () => {
  return (
    <div className='page'>
      <h1>Danh sách sinh viên</h1>
      <button>Thêm Sinh viên</button>
      <table id="studentTable">
        <thead>
          <tr>
            <th style={{ display: 'none' }}>Database Entry Id</th>
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="studentList">
          {/* Import here */}
        </tbody>
      </table>
      <div id="paginationControls" className="pagination-controls"></div>
    </div>
  );
};

export default StudentPage;
