import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
    <div>
      You prefer <strong>{props.quizResult}</strong>!
      <p><strong>Yin Yoga </strong> - Yoga is new to you, and you might as well try Yin Yoga, or gentle and restorative types. This yoga focuses more on alignment, alleviates injuries and helps you balance inside and out. You enjoy basic and traditional poses which help you get acquainted with yoga foundations.</p>
      <p><strong>Vinyasa Yoga </strong>- You are familiar with yoga and interested to explore it more physically. You want to learn more and reap its spiritual and physical benefits, and down for a playful sequence much like the rhythm of a dance. You’ll love Vinyasa!</p>
      <p><strong>Ashtanga Yoga </strong> - You’ve got a keen grasp of yoga and in sync with its spiritual and physical aspects. Ashtanga yoga is your match, AND will challenge your focus, balance, strength and stamina as you advance your practice.</p>
      <p><strong>Power Yoga </strong> - You’re a fitness junkie, and perfectly suited to Power yoga or Bikram yoga. With powerful poses set at a steady pace, Power yoga is the ideal heart-pumping exercise. Its athletic focus will help hone a sculpted body, and top-form mindfulness.</p>
      <p><strong>Acroyoga</strong> - You’re a next-level thrill seeker and top-tier fitness enthusiast. You’re a spiritual gangster who thrives on an advanced yoga workout, to keep you on your toes and fingertips. Give your acrobatic skills a run for its money with Acroyoga!</p>
    </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
