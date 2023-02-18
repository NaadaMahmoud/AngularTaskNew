import React from 'react'
function Skills() {
  return(
    <div>
        <div className='bg-dark text-center text-muted'><h1>SKILLS</h1></div>
       
       <div className='row mt-2'>
        <p className='col-3'>HTML</p>
              <div className="progress col-8">
            <div className="progress-bar bg-dark" role="progressbar" style={{width:100}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>CSS</p>
              <div className="progress col-8">
            <div className="progress-bar bg-dark" role="progressbar" style={{width:65}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>Bootstrap</p>
              <div className="progress col-8">
            <div className="progress-bar bg-dark" role="progressbar" style={{width:75}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>SASS</p>
              <div className="progress col-8">
            <div className="progress-bar bg-dark" role="progressbar" style={{width:65}}></div>
        </div>
        </div>

        <div className='row mt-2'>
        <p className='col-3'>JavaScript</p>
              <div className="progress col-8">
            <div className="progress-bar bg-dark" role="progressbar" style={{width:55}}></div>
        </div>
        </div>
      

        
    </div>

  )
}

export default Skills
