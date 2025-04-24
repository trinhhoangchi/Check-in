import React from 'react'
import './Page.css'

const AttendancePage = () => {
  return (
    <div className='page'>
      <h1>Danh sách lớp học</h1>
      <table id="attendanceTable">
        <thead>
          <tr>
          <th style={{ display: 'none' }}>Database Entry Id</th>
            <th>ID</th>
            <th>Students</th>
            <th>Attended Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="attendanceList">
          {/* Import here */}
        </tbody>
      </table>
      <div id="paginationControls" className="pagination-controls"></div>
    </div>
  );
};

export default AttendancePage;
