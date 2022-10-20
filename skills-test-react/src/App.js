import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import AccountMenu from './AccountMenu.js';
import BasicForm from './BasicForm'
import { Routes, Route, useNavigate } from 'react-router-dom'

export default function App() {

// 	require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


	const [openForm, setOpenForm] = React.useState(false);
	const navigate = useNavigate()

	const handleOnClick = (page) => {
		console.log('open');
		if(!openForm) { 
			setOpenForm(true)
			navigate('/todo')
		} else {
			setOpenForm(false)
		}
	};
  return (
    <Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			<Routes>
			{openForm &&  <Route path="/todo" element={<BasicForm />} />}
      <Route path="/" element={
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						React Skills test
					</Typography>
				</Box>} 
			/>
			</Routes>
    </Container>
  );
}
