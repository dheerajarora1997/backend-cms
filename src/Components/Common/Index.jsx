import React from 'react';
import Header from './Header/Index';
import Footer from './Footer/Index';

export default function Layout(props){
  return (
    <>
      {props.header && <Header />}
      {props.children}
      {props.footer && <Footer />}
    </>
  )
}

Layout.defaultProps = {
  header: true,
  footer: true,
}