import React from 'react';

import TimelineCSS from '../styles/TimelineCSS.css';

const Timeline = () => {
  return (
    <div className='tl-container' id='About'>
      <div className='tl-box-container'>
        <div className='tl-box'>
          <div className='inner-box box-1'>
            <i className='fas fa-theater-masks'></i>
            <h4>Dynamic, unique</h4>
            <p>
              We strive to create experiences for our audiences and artists that
              engage the imagination, evaluate the human experience, and
              encourage conversation.
            </p>
          </div>
        </div>
        <div className='tl-box part'>
          <div className='inner-box box-2'>
            <i className='fas fa-hands-helping'></i>
            <h4>Part of a whole</h4>
            <p>
              Our vision is to generously contribute to the cultural landscape
              by cultivating new works, artists, and patrons, providing
              comprehensive educational programs, and collaborating on community
              outreach projects.
            </p>
          </div>
        </div>
        <div className='tl-box box-2'>
          <div className='inner-box box-3'>
            <i className='fas fa-dollar-sign'></i>
            <h4>Paying artists</h4>
            <p>
              Ensemble Theatre of Chattanooga is Chattanooga's only theatre with
              a goal of providing artists with financial compensation.
            </p>
          </div>
        </div>
        <div className='tl-box box-2'>
          <div className='inner-box box-3'>
            <i class='fas fa-people-carry'></i>
            <h4>Equality</h4>
            <p>
              We acknowledge the struggle for equality endured by Black,
              Indigenous, and People of Color. We pledge our continued support,
              assistance and allegiance to using our craft to create a better
              tomorrow where equality is an expectation and inclusion is the
              norm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
