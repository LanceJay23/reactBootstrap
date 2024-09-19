import React from 'react'

const Fundament = () => {
  return (
    <section id='learn' className='p-5'>
        <div className='container'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md'>
                    <img src="https://codesimont.github.io/FrontCode/images/undraw_static_assets_rpm6.svg" className='img-fluid' alt="" />
                </div>
                <div className='col-md p-5'>
                    <h2>Learn The Fundamentals</h2>
                    <p>Web development is a specific field of software engineering that focuses on building web pages. Web pages, or web apps, are codebases that are downloaded and run in our web browser (e.g., Google Chrome) each time a user navigates to the website address. This differs from other software which is usually downloaded once and run as a standalone application on your computer or phone. Web development makes for an exciting career, as a web development cycle is usually much shorter and you get to iterate over your software at a much faster rate.
                    </p>
                    <p>This is for front-end development. This requires the browser. such as Google Chrome or Firefox. to run the scripts or codes. This is where the user interacts. The client-side scripting languages are HTML, CSS, and JavaScript.</p>
                    <a href="#" className='btn btn-light mt-3'>
                        <i className='bi bi-chevron-right'></i>Read more
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Fundament