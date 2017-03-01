import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';


var Timer = React.createClass({
  getInitialState: function(){
    return {
      count:0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProp, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count:0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer)
    this.timer = undefined;
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0){
        this.setState({
          countdownStatus:'stopped'
        });
      }
    }, 1000);
  },
  handleStatusChange: function(newStatus){
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}></Clock>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}></Controls>
      </div>
    )
  }
});

module.exports  = Timer;
