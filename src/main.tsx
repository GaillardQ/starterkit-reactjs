import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './@core/pages/App'

ReactDOM
	.createRoot(
		document.getElementById('root')!
	)
	.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	)
