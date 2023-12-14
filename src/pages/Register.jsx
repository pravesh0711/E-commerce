import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCalls";
import { registerFailiure } from "../redux/registerRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 5px 180px;
`;
const Register = () => {
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const dispatch = useDispatch();
  // const isFatching = useSelector((state)=>state.register)

  function handleClick(e){
    e.preventDefault();
    register(dispatch,{username,email,password})
    dispatch(registerFailiure());
    // console.log("clicked")
  }
  
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username"  onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="email"    onChange={(e)=>setEmail(e.target.value)} />
          <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          <Input placeholder="confirm password" />
          <Button onClick={(e)=>handleClick(e)}><Link to={'/login'}>CREATE</Link></Button>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to={'/login'}>Alredy Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;