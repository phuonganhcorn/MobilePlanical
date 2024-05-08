import React from 'react'

import PropTypes from 'prop-types'

import './review.css'

const Review = (props) => {
  return (
    <section className={`review-card ${props.rootClassName} `}>
      <div className="review-stars">
        <svg viewBox="0 0 1024 1024" className="review-icon">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon02">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon04">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon06">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="review-icon08">
          <path
            d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
            className=""
          ></path>
        </svg>
      </div>
      <main className="review-content">
        <p className="review-quote">{props.quote}</p>
        <div className="review-author">
          <img
            alt={props.avatarAlt}
            src={props.avatarSrc}
            className="review-avatar"
          />
          <div className="review-details">
            <h1 className="review-author1">{props.author}</h1>
            <label className="review-position">{props.position}</label>
          </div>
        </div>
      </main>
    </section>
  )
}

Review.defaultProps = {
  quote:
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”',
  author: 'Sima Mosbacher',
  rootClassName: '',
  avatarSrc:
    'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3NzU5NDE3&ixlib=rb-4.0.3&w=200',
  position: 'Manager',
  avatarAlt: 'image',
}

Review.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  avatarSrc: PropTypes.string,
  position: PropTypes.string,
  avatarAlt: PropTypes.string,
}

export default Review
