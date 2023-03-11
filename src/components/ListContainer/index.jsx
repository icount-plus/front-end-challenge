import './index.css';
import React from 'react';

export const ListContainer = ({ data }) => (

  <section className='list-container'>

    {Object.values(data).map(
      (data, index) => {
        return (
          <div className='card-item' key={index}>
            <h1>{data.API}</h1>

            <div className='card-body'>
              <div className='category-container'>
                <h2>Category:</h2>
                <p className='category'>{data.Category}</p> 
              </div>

              <div className='details-container'>
                <h2>Details:</h2>
                <p className='https'>Does it have HTTPS: {!data.HTTPS ? "no" : "yes"}</p>
                <p className='cors'>Does it have Cors: {data.Cors}</p>
                <p className='auth'>Type of auth: {!data.Auth ? "None" : data.Auth}</p>

              </div>

              <div className='desc-container'>
                <h2>Description:</h2>
                <p className='desc'>{data.Description}</p>

              </div>

            </div>

            <a href={data.Link} target="_blank"  rel="noopener noreferrer" className='link'>Link</a>

          </div>
        )
      }
    )}

  </section>
)