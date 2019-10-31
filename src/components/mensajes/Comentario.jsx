import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

const CommentsContainerBox = styled.div`
  width: 100%;
	height: 270px;
	overflow: scroll;
`;

const CommentsContainer = styled.div`
  width: 100%;
	padding: 10px;
	height: auto;
	display: flex;
	justify-content: center
`;

const CommentsBox = styled.div`
  width: 90%;
	height: 40px;
	font-size: 20px;
	color: #0d207b;
	padding: 2px;
`;

const CommentButton = styled.div`
  width: 10%;
	height: 40px;
	font-size: 21px;
	background: #7f147b;
	color: white;
	border: solid 1px white;
	border-radius: 3px;
`;

const CommentButton = styled.div`
  :hover{
	cursor: pointer;
	background-color: #af117c;
  }
`;

const Comments = styled.div`
  width: 100%;
	display: flex;
	justify-content: flex-start;
	opacity: 1;
  animation: fade 2s linear;
	align-items: center;

    @keyframes fade {
      0%,100% { opacity: 0 }
      100% { opacity: 1 }
    }

`;

const User = styled.div`
  width: 35px;
	height: 35px;
	margin: 10px;
	border-radius: 50%;
	background-image: linear-gradient(359.694deg, rgb(218, 0, 113), rgb(27, 0, 197));
`;

const Text = styled.div`
  font-size: 17px;
  font-weight: 600;
	color: darkblue;
`;


const Comentario = ({comments, addComment, changeText, valueText}) => {
	const handleChange = (event) => {
		changeText(event.target.value)
  }
	const handleClick = () => {
		addComment(valueText)
	}
	const CommentList = comments.map((element, index) => {
		return(
			<div className='Comments' key={index}>
				<div className='User'></div>
				<span className='Text'>{element.value}</span>
			</div>
		)
	})
	return (
		<div className='CommentsContainerBox'>
			<div className='CommentsContainer'>
				<input
					onChange={(e) => handleChange(e)}
				 	className='CommentsBox'
					type="text" placeholder='escriba un comentario'
					value={valueText}
				></input>
				<button className='CommentButton' onClick={()=> handleClick()}> > </button>
			</div>
			{CommentList}
		</div>
	)
}

Comment.defaultProps = {
	valueInput: ''
}

Comments.propTypes = {
	addComment: PropTypes.func.isRequired,
	comments: PropTypes.array.isRequired,
	changeText: PropTypes.func.isRequired
}


export default Comentario;