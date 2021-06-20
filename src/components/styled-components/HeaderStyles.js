import styled from "styled-components";
import React from 'react';

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 72px;
    position: absolute;
    width: 100%;
    height: 96px;
    background: #0F0E17;
    flex-wrap: wrap;
`;

const BtnMain = styled.button`
    background: #FF8906;
    outline: none;
    border: none;
    width: 206px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFE;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
`;

export const BtnNavBar = ({ label }) => <BtnMain> {label} </BtnMain>;

export const MainMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    flex-wrap: wrap;
`;

const ElementMenu = styled.a`
    text-decoration: none;
    font-size: 20px;
    line-height: 32px;
    color: #FFFFFE;
    margin: 0px 25px;
`;

export const ItemMenu = ({ label, href }) => <ElementMenu href= {href}>{label}</ElementMenu>;

export const LogoMenu = styled.img`
    width: 150px;
    height: 50px;
    object-fit: cover;
    margin-right: 25px;
`;