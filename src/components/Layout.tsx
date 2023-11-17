import * as React from 'react';
import Navbar from './Navbar';
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='layout'>
      <Navbar />
      <div className='content'>
        {children}
      </div>
      <footer>
        <p>Copyright 2023 demo</p>
      </footer>
    </div>
  );
};

export default Layout