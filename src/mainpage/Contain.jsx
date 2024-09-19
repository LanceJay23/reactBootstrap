import React from 'react'

const Contain = () => {
  return (
    <section className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start' >
    <div className='container'>
        <div className='d-sm-flex align-items-center'justify-content-between> 
            <div>
                <h1>Become a <span className='text-warning'>WebDeveloper</span></h1>
                <p className='lead'>We focus on teaching our students the fundamentals of the latest and greatest technologies to prepare them for their first dev role</p>
                <button className='btn btn-primary btn-lg' data-bs-toggle='modal' data-bs-target='#enroll'>Start the Enrollment</button>
            </div>
            <img className='img-fluid w-50 d-none d-sm-block' src="https://codesimont.github.io/FrontCode/images/undraw_coding_re_iv62.svg" alt="" />
        </div>
    </div>
   </section>
  )
}

export default Contain