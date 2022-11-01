import React from 'react';

import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';

import LogoImg from './logo.png';

import { Container, Header, LogImg, Title, MenuContainer, MenuItemLink } from './styles';


const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={LogImg} alt="Logo" />
                <Title>F Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard></MdDashboard>
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowUpward></MdArrowUpward>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward></MdArrowDownward>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp></MdExitToApp>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;