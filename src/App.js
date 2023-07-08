import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import React from 'react'
import { Outlet, Link } from "react-router-dom"


const App = () => {
	return (
		<>
			<div className="row mh-100 m-0">
				<nav className="col-3 mh-100 m-2 bg-light">
					<div className='m-0'>
						<Link className="link" to="/">home</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/usestate">useState </Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/useeffect">useEffect</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/useref">useRef</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/usereducer">useReducer</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/uselayouteffect">useLayoutEffect</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/useimperativehandle">useImperativeHandle</Link>
					</div>
					<div className='m-0'>
						<Link className="link" to="/usecontexthook">useContextHook</Link>
					</div>
				</nav>
				<div className="col text-center">
					<Outlet />
				</div>
			</div>
		</>
	)
}

export default App