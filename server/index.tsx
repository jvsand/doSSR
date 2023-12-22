// import React from "react";
// // import ReactDOM from "react-dom";
// export class App extends React.Component {

// // 
//     constructor() {
//       super();
//       this.state = {
//         count: 0,
//       };
//     }
  
//     handleClick() {
//       console.log("クリックされました");
//       this.setState({
//         count: this.state.count + 1,
//       });
//     }
// // 
//   render() {
//     return (
//       <div>

//         <h1>Hello React!</h1>
//         <div>
//           <h2>{this.props.name}</h2>
//           <div>{this.state.count}</div>
//           <button onClick={this.handleClick.bind(this)}>Add +1</button>
//         </div>

//       </div>
//     );
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'));
