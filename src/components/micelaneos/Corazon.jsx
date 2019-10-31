import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const HeartContainer = styled.div`
  width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 14px;
	border-top: 1px solid;
	border-bottom: 1px solid;
	padding: 5px;
`;

const glyphicon = styled.div`
   font-size: 50px;
	color: darkblue;

  :hover{
	font-size: 55px;
	color: red;
	cursor: pointer;
  }
`;

const Corazon = ({clickCorazon}) => {
	const handleClick = () => {
		clickCorazon()
	}
	return (
		<div className='HeartContainer'>
			<div className='glyphicon glyphicon-heart' onClick={()=> handleClick()}>
			</div>
		</div>
	)
}

Corazon.propTypes = {
	clickCorazon: PropTypes.func.isRequired,
}

export default Corazon;