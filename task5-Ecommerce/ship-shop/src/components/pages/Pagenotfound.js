import React from 'react'
import Layout from '../layout/layout'
import Image404 from '../../img/404.png'
const Pagenotfound = () => {
  return (
   <Layout>
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for might be in another galaxy.</p>
        <img
          src={Image404} 
          alt="404 Illustration"
        />
        <p>Return to <a href="/">Home</a></p>
      </div>
    </div>
   </Layout>
  )
}

export default Pagenotfound