import logo from './logo.svg';
import './App.css';
import { createElement } from 'react'

// export function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
// 	  </header>
// 	  <p>{new Date().getFullYear()}</p> #декларативный подход
//     </div>
//   );
// }
 export function App() {
	return createElement(
		'div',
		{
			className: 'App'
		},
		createElement(
		  'header',
		  {
			className: 'App-header'
		  },
		  createElement(
			'img',
			{ src: logo,
			  className: 'App-logo',
			  alt: 'logo'
			}
		  ),
		  createElement(
			'p', null, 'Edit src/App.js and save to reload.'
		  ),
		  createElement(
			'a',
			{
			  className: 'App-link',
			  href: 'https://reactjs.org',
			  target: '_blank',
			  rel: 'noopener noreferrer'
			},
			'Learn React'
		  )
		),
		createElement(
		  'p', null, new Date().getFullYear()
		)
	);
 }
