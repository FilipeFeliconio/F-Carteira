import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

interface LayoutProps {
    children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                { children }
            </Content>
        </Grid>
    );
}

export default Layout;