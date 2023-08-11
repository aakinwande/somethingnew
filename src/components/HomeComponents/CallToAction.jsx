import React from 'react'

const CallToAction = () => {
  return (
    <div className="cta-head">
    <div>
      <h5>
        You know what to say, <br />
        but don’t have time to say it? Allow us
      </h5>
      <a
        href="https://calendly.com/kalukalu/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="cta-btn">
          <h3>BOOK A CONSULT</h3>
        </button>
      </a>{" "}
    </div>
  </div>

  )
}

export default CallToAction
