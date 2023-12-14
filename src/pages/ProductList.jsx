import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcment from '../components/Announcment';
import Products from '../components/Products';
import Newslaetter from '../components/Newslaetter';
import Footer from '../components/Footer';
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2])
    const [filters, setFilter] = useState({})
    const [sorted, setSort] = useState("")
    function handleSort(e) {
        setSort(e.target.value)
    }
    
    function hanndleFilter(e) {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        })
    }
    return (
        <Container>
            <Announcment />
            <Navbar />
            <Title>{cat}</Title>
            <FilterContainer> 
                <Filter>
                    <FilterText>
                        Fillter Product
                    </FilterText>
                    <Select name="color" onChange={hanndleFilter}>
                        <Option>Color</Option>
                        <Option>Green</Option>
                        <Option>black</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select name="size" onChange={hanndleFilter}>
                        <Option>Size</Option>
                        <Option>XL</Option>
                        <Option>M</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Fillter Products
                    </FilterText>
                    <Select onChange={handleSort}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asec)</Option>
                        <Option value="dse">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products
             cat = {cat}
             filters = {filters}
             sort = {sorted}
            />
            <Newslaetter />
            <Footer />


        </Container>
    )
}

export default ProductList
