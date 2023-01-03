import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TopbarDropdown() {
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle id="dropdown-basic" className="rounded-circle" >
          <span class="material-symbols-outlined"> more_vert </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-0 mt-1">
          <Dropdown.Item href="#/action-1" className="d-flex p-2">
            <span className="material-symbols-outlined mr-2">
              password
            </span>
            Change Password
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="d-flex p-2">
            <span className="material-symbols-outlined mr-2">
              logout
            </span>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}