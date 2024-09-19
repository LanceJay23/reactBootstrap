import React from 'react'

const Boxes = () => {
  return (
    <section className='p-5'>
        <div className='container'>
            <div className='row text-center g-4'>
                <div className='col-md'>
                    <div className='card bg-dark text-light'>
                        <div className='card-body  text-center'>
                            <div className='h1 mb-3'>
                                <i className='bi bi-laptop'></i>
                            </div>
                            <div>
                                <h3 className='card-title mb-3'>
                                Virtual
                                </h3>
                                <p className='card-text'>Online learning is when you take courses online instead of in a physical classroom. If your schedule makes it hard to attend classes, if you prefer studying at your own pace or if you live far from campus, online learning might be for you.</p>
                                <a href="#" className='btn btn-primary'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                <div className='card bg-secondary text-light'>
                        <div className='card-body  text-center'>
                            <div className='h1 mb-3'>
                                <i className='bi bi-person-square'></i>
                            </div>
                            <div>
                                <h3 className='card-title mb-3'>
                                Hybrid
                                </h3>
                                <p className='card-text'>Online learning is when you take courses online instead of in a physical classroom. If your schedule makes it hard to attend classes, if you prefer studying at your own pace or if you live far from campus, online learning might be for you.</p>
                                <a href="#" className='btn btn-dark'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                <div className='card bg-dark text-light'>
                        <div className='card-body  text-center'>
                            <div className='h1 mb-3'>
                                <i className='bi bi-person'></i>
                            </div>
                            <div>
                                <h3 className='card-title mb-3'>
                                In Person
                                </h3>
                                <p className='card-text'>Online learning is when you take courses online instead of in a physical classroom. If your schedule makes it hard to attend classes, if you prefer studying at your own pace or if you live far from campus, online learning might be for you.</p>
                                <a href="#" className='btn btn-primary'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Boxes