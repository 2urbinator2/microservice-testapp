import React from 'react';
import '../design/container.css';

function PageContainer({ children }) {
  return (
     <div className="container-fluid d-flex align-items-center custom-padding">
      {children}
    </div>
  );
}

export default PageContainer;