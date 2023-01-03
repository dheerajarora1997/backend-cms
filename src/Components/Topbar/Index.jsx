import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopbarSearch from '../TopbarSearch/Index';
import TopbarDropdown from '../TopbarDropdown/Index';

export default function Topbar(props) {

  const downloadClick = () => {
    console.log('Download');
  }
  
  const filterModal = () => {
    console.log('Filter');
  }

  return (
    <>
      <div className="bg-white d-flex flex-wrap justify-content-between px-3 pt-2 pb-md-2 shadow-bottom mb-1 header-has-search">
        <div className="topHead w-100 d-inline-block">
          <Row>
            <Col sm={12} md={6} className=" d-flex justify-content-between pr-0 pr-sm-2">
            </Col>
            <Col sm={12} md={6} className="pl-0 pl-md-3 d-flex align-items-end justify-content-end mt-2 mt-md-0">
              {props.search && <TopbarSearch />}
              {props.download && <button className="btn btn-link" onClick={downloadClick}><span className="material-symbols-outlined"> file_download </span></button>}
              {props.filter && <button className="btn btn-link" onClick={filterModal}><span className="material-symbols-outlined"> filter_list </span></button>}
              {props.moreOption && <TopbarDropdown />}
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

Topbar.defaultProps = {
  search: false,
  download: false,
  filter: false,
  moreOption: false,
  dateRangle: false,
  editIcon: false,
  breadcrump: false,
  button: false,
}