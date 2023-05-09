import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/background.avif';
import logo from '../assets/logo.png';
import { AiFillLock } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import Google from "../assets/google.png"
import Facebook from "../assets/facebook.png"
import Github from "../assets/github.png"

const TextInputContainer = styled.div`
  position: relative;
`;

const TextInputIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const TextInputElement = styled.input`
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
  padding: 15px;
  margin-bottom: 10px;
  margin-left: 20px;
  width: 80%;
  font-size: 10px;
  color: #333;
  font-family: Comic Sans MS, Comic Sans, cursive;
  background-color: #F8F8FF;
`;

const CustomTextInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {
	icon?: React.ReactNode;
  }> = ({ icon, ...props }) => (
	<TextInputContainer>
	  {icon && <TextInputIcon>{icon}</TextInputIcon>}
	  <TextInputElement {...props} />
	</TextInputContainer>
  );
  

const LoginPage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const BackgroundWrapper = styled.div`
    background-image: url(${background});
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const LoginContainer = styled.div`
    background-color: #F8F8FF;
    width: 600px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
	`;

  const Heading2 = styled.h2`
    font-size: 24px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    color: #696969;
    margin-bottom: 20px;
    text-align: center;
  `;

  const Heading3 = styled.h3`
    font-size: 13px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: normal;
    color: #333;
    margin-bottom: 3px;
  `;

  const Heading4 = styled.h4`
    font-size: 8px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: normal;
    color: #333;
    text-align: center;
  `;

  const LoginButton = styled.button`
    margin-top: 30px;
    margin-bottom: 20px;
	font-family: Verdana, sans-serif
	font-weight: bold

	background-color: #333;
	color: white;
	padding: 10px 117px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #B0E0E6;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;

  const SignUpButton = styled.button`
	margin-top: 30px;
	margin-bottom: 20px;
	font-family: Verdana, sans-serif;
	font-weight: bold

	background-color: #333;
	color: white;
	padding: 10px 117px;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #B0E0E6;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;

  const FormContainer = styled.div`
	flex: 1;
	margin-right: 1px;
	margin-left: 4px;
  `;
  
  const FormDivider = styled.div`
	width: 1px;
	background-color: #333;
	margin: 0 10px;
  `;

  const IntraLogo = styled.button`
	background-image: url(${logo});
	background-repeat: no-repeat;
	background-position: center;
	padding: 20px 20px;
	border: none;
	border-radius: 30px;
	margin-left: 23%;
	cursor: pointer;
	background-size: 130%;

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;

  const GoogleLogo = styled.button`
	background-image: url(${Google});
	background-repeat: no-repeat;
	background-position: center;
	padding: 20px 20px;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	background-size: 100%;

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;

  const FacebookLogo = styled.button`
	background-image: url(${Facebook});
	background-repeat: no-repeat;
	background-position: center;
	padding: 20px 20px;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	background-size: 100%;

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;

  const GithubLogo = styled.button`
	background-image: url(${Github});
	background-repeat: no-repeat;
	background-position: center;
	padding: 20px 20px;
	border: none;
	border-radius: 30px;
	cursor: pointer;
	background-size: 100%;

	&:focus {
		outline: none;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	}
  `;


  return (
    <BackgroundWrapper>
      <LoginContainer>
		<FormContainer>
        	<Heading2>Login</Heading2>
			<Heading3>Username</Heading3>
			<CustomTextInput type="text"
			placeholder="type your username"
			icon={<AiOutlineUser />}
			/>
			<Heading3>Password</Heading3>
			<CustomTextInput
			type="password"
			placeholder="type your password"
			icon={<AiFillLock />}
			/>
			<LoginButton>LOGIN</LoginButton>
		</FormContainer>
		<FormDivider />
		<FormContainer>
			<Heading2>Sign Up</Heading2>
			<Heading3>Username</Heading3>
			<CustomTextInput type="text"
			placeholder="type your username"
			icon={<AiOutlineUser />}
			/>
			<Heading3>Password</Heading3>
			<CustomTextInput
			type="password"
			placeholder="type your password"
			icon={<AiFillLock />}
			/>
			<SignUpButton>SUBMIT</SignUpButton>
			<Heading4>OR</Heading4>
			<IntraLogo />
			<GoogleLogo />
			<FacebookLogo />
			<GithubLogo />
		</FormContainer>
      </LoginContainer>
    </BackgroundWrapper>
  );
};

export default LoginPage;
