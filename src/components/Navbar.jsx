// import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Badge from '@mui/material/Badge';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginFailure } from '../redux/userRedux';
import { removeAllProduct } from '../redux/cartRedux';




const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "60px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {

  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch = useDispatch()
  // const id = useSelector(state=>state.user.currentUser.others._id)


  function handleLogout(e) {
    e.preventDefault()
    dispatch(loginFailure());
    dispatch(removeAllProduct());
  }

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>
              English
            </Language>
            <SearchContainer>
              <Input placeholder='Search' />
              <AiOutlineSearch style={{ color: "gray", fontSize: 16 }} />

            </SearchContainer>
          </Left>
          <Center>
            <Link to={`/`}>
              <Logo>Yosha</Logo>
            </Link>
          </Center>
          <Right>
            {user ? <></> : <Link to={'/register'}>
              <MenuItem>Sigup</MenuItem>
            </Link>}
            {user ? <Link to={`/`}><button onClick={(e) => handleLogout(e)}>Logout</button></Link> : <Link to={`/login`}>
              <MenuItem>Login</MenuItem>
            </Link>}
            {/* <Link to={`/login`}>
              <MenuItem>Login</MenuItem>
            </Link> */}
            {user ? <Link to={`/carts`}>
              <MenuItem>
                <Badge color="secondary" badgeContent={user ? quantity : 0}>
                  <AiOutlineShoppingCart />
                </Badge>
              </MenuItem>
            </Link> : <></>
            }
          </Right>

        </Wrapper>




      </Container>



    </div>
  )
}

export default Navbar
