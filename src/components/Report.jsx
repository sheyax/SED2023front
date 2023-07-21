import React from 'react'
import { Container } from 'react-bootstrap'


const Report = () => {
  return (
    <section id="report" className="block report-block h-screen">
      <a id='report'></a>
      <Container>
      <div className="title-holder">
          <h2>SED 2022 SUMMIT</h2>
          <div className="subtitle">Read about our past events</div>
        </div>
      <p>Click on the link to download the report for Sustainable Energy Days 2022 summit</p> 
      <a href='../assets/SED 2022 Report.pdf' download></a>
      <div className='report_dl'>
      <a className="btn btn-primary" href="../assets/SED 2022 Report.pdf" download>
        Download
        </a>
      </div>
      </Container>
    </section>
  )
}

export default Report