import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TopbarSearch(props) {
  return (
    <>
      <div className="position-relative" id="expendedSearch">
        <a className="expended-search-link d-md-flex d-none border-0 p-1 ml-2 hover-effect rounded-circle text-secondary" data-container="body" data-placement="bottom" data-toggle="tooltip" data-trigger="hover" href="" title="" data-original-title="Search">
          <span className="material-symbols-outlined"> search </span>
        </a>
        <div className="expended-search-wrpper position-absolute">
          <Row id='searchBox' className={`no-gutters border`}>
            <Col sm={4}>
              <div className="form-group p-0 my-0 rounded-0">
                <select className="form-control selectpicker" id="search_by" name="search_by" title="Search By">
                  <option className="bs-title-option" value=""></option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </Col>
            <Col sm={7}>
              <div className="expandSearch">
                <div className="form-group has-search mb-0 py-0 bmd-form-group">
                  <span className="material-icons search_icon text-muted ml-1" data-icon="search"></span>
                  <input className="form-control px-4 bg-white" id="search" name="search" placeholder="Search" type="search" value="" />
                </div>
              </div>
            </Col>
            <Col xs={1} className={`d-flex align-items-center`}>
              <a className="pl-1 py-2 d-flex justify-content-center align-items-center" data-container="body" data-dismiss="search" data-placement="bottom" data-toggle="tooltip" data-trigger="hover" href="" id="reset_search" title="" data-original-title="Close">
                <span className="material-icons-outlined text-secondary" data-icon="close"></span>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}