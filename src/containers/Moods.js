import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from '../actions/actions';
import { getFace } from '../selectors/selectors';
import styles from './Moods.css';

const Moods = ({ state, countAction, startTimer }) => {
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));

  const start = state.start;

  return (
    <section className={styles.Moods}>
      <Controls actions={controlActions} handleSelection={countAction}/>
      <Face emoji={face} start={start} />
      <button onClick={startTimer}>Start</button>
    </section>

  );
};

const mapStateToProps = state => (
  { 
    state: {
      coffees: state.coffees,
      snacks: state.snacks,
      naps: state.naps,
      studies: state.studies
    }
  });

const mapDispatchToProps = dispatch => ({
  countAction(name) {
    dispatch({
      type: name
    });

  },
  startTimer() {
    dispatch({
      type: 'START'
    });
  }
});

Moods.propTypes = {
  state: PropTypes.object,
  countAction: PropTypes.func,
  startTimer: PropTypes.func,
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;

