import React from 'react';
import Nav from 'nav';



// var Main = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <Nav></Nav>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//
//     );
//   }
// });


var Main = (props) => {
    return(
      <div>
        <Nav></Nav>
        <h1>Hello</h1>
        {props.children}
      </div>

    );
  }

module.exports  = Main;
