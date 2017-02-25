import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', ()=>{
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('Render', ()=> {
    it('should render clock to output', ()=> {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}></Clock>)
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');

    });
  });

  describe('FormatSeconds', () => {
    it('Should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock></Clock>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec are less than 1', () => {
      var clock = TestUtils.renderIntoDocument(<Clock></Clock>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
