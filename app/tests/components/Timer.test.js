import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';


describe('Timer', () => {
  it('Should exits', () => {
    expect(Timer).toExist();
  });

  it('should start timer on status started', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer></Timer>);

    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);


    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('started');
      expect(timer.state.count).toBe(1);
    }, 1001);
    done();
  });

  it('should pause timer on status paused', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer></Timer>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
    }, 1001);
    done();
  });

  it('should clear timer on status stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer></Timer>);
    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.countdownStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
    }, 1001);
    done();
  });
});
