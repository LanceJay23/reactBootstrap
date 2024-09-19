import React from 'react'

const Questions = () => {
  return (
   <section id='questions' className='p-5'>
    <div className='container'>
        <h2 className='text-center mb-4'>Frequently Ask Questions</h2>
        <div className="accordion accordion-flush" id="questions">

        <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-one" 
          >
           Where are you located?
          </button>
        </h2>
        <div 
          id="question-one" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Here
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-two" 
          >
            How much does it cost?
          </button>
        </h2>
        <div 
          id="question-two" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Yes
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-three" 
          >
            What do I need to Know?
          </button>
        </h2>
        <div 
          id="question-three" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Everything
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-four" 
          >
           How do I signup?
          </button>
        </h2>
        <div 
          id="question-four" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            There
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#question-five" 
          >
            Do you help me find a job?
          </button>
        </h2>
        <div 
          id="question-five" 
          className="accordion-collapse collapse" 
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Maybe
          </div>
        </div>
      </div>
    </div>
    </div>
   </section>
  )
}

export default Questions