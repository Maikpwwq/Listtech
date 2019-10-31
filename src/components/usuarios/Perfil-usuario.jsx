import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const UserProfileContainer = styled.div`
  width: 100%;
	display: flex;
	justify-content: center;
`;

const ImageContainer = styled.div`
  width: 50%;
	height: auto;
`;

const Img = styled.div`
  width: 150px;
	height: 150px;
	border-radius: 50%;
	border: solid 1px midnightblue;
	background-size: cover;
	margin: 0 auto;
`;

const InfoContainer = styled.div`
  width: 50%;
`;

const Name = styled.div`
  font-size: 46px;
  text-align: center;
  padding: 26px;
	color: #ae117c;
`;

const LikesNumber = styled.div`
  font-size: 30px;
	color: #0d207b;
	font-family: Arial, Helvetica, sans-serif;
`;

const CommentsNumbers = styled.div`
  font-size: 30px;
	color: #0d207b;
`;

const PerfilUsuario = ({img, Name, Likes, Comments}) => {
	const ImageStyle = {
		backgroundImage: `url(${img})`
	}
	return (
		<div className='UserProfileContainer'>
			<div className='ImageContainer'>
				<div className='Img' style={ImageStyle}></div>
			</div>
			<div className='InfoContainer'>
				<div className='Name'> {Name} </div>
				<div className='LikesNumber'>Likes:  {Likes}  </div>
				<div className='CommentsNumbers'>Comments:  {Comments}  </div>
			</div>
		</div>
	)
}

UserProfile.propTypes = {
	img: PropTypes.string.isRequired,
	Name: PropTypes.string.isRequired,
	Likes: PropTypes.number.isRequired,
	Comments: PropTypes.number.isRequired
}

export default PerfilUsuario;