import React from 'react'

const Contacts = () => {
  return (
    <section className='p-5'>
        <div className='cotainer'>
            <div className='row g-4'>
                <div className='col-md'>
                    <h2 className='text-center mb-4'>Contact Info</h2>
                    <ul className='list-group list-group-flush lead'>
                        <li className='list-group-item'>
                            <span className='fw-bold'>Main Location:</span> Here
                        </li>
                        <li className='list-group-item'>
                            <span className='fw-bold'>Enrollment Phone:</span> 555
                        </li>
                        <li className='list-group-item'>
                            <span className='fw-bold'>Student Phone:</span> 999
                        </li>
                        <li className='list-group-item'>
                            <span className='fw-bold'>Enrollment Email:</span> yes@example.com
                        </li>
                        <li className='list-group-item'>
                            <span className='fw-bold'>Student Email:</span> no@example.com
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contacts