import React from 'react'

const Mmodal = () => {
  return (
    <div className="modal fade" id="enroll" tabIndex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='lead'>Fill up this form and we will comeback to you</p>
            <form action="">
                <div className='mb-3'>
                    <label htmlFor="first-name" className='col-form-label'>First Name:</label>
                    <input type="text" className='form-control' id='first-name' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="last-name" className='col-form-label'>Last Name:</label>
                    <input type="text" className='form-control' id='last-name' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='col-form-label'>Email:</label>
                    <input type="text" className='form-control' id='email' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="phone" className='col-form-label'>Phone:</label>
                    <input type="text" className='form-control' id='phone' />
                </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mmodal