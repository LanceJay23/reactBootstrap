import React from 'react'

const Reacts = () => {
  return (
    <section id='learn' className='p-5 bg-dark text-light'>
    <div className='container'>
        <div className='row align-items-center justify-content-between'>
           
            <div className='col-md p-5'>
                <h2>Learn React</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti possimus magnam corporis ratione facere!
                </p>
                <p>The major building blocks of the web are HTML, CSS, and JavaScript. We will be talking about all three languages. We can also think of web development as being split into two main categories: front end and back end. We will discuss about Front end in detail.</p>
                <a href="#" className='btn btn-light mt-3'>
                    <i className='bi bi-chevron-right'></i>Read more
                </a>
            </div>
            <div className='col-md'>
                <img src="https://codesimont.github.io/FrontCode/images/undraw_react_re_g3ui.svg" className='img-fluid' alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Reacts