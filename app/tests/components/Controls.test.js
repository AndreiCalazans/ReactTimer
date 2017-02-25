import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', ()=> {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render paused when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'></Controls>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render started when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'></Controls>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
