import React from 'react'
import './Page.css'

const TeacherPage = () => {
  return (
    <div className='page'>
      <h1>Danh sách giảng viên</h1>
      <table id="teacherTable">
        <thead>
          <tr>
          <th style={{ display: 'none' }}>Database Entry Id</th>
            <th>ID</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="teacherList">
          {/* Import here */}
        </tbody>
      </table>
      <div id="paginationControls" className="pagination-controls"></div>
    </div>
  );
};

export default TeacherPage;
