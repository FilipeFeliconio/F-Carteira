import React, { ReactElement } from 'react';

import { Container } from './styles';

interface ContentProps {
    children: ReactElement;
}

const Content: React.FC<ContentProps> = ({children}) => {
    return (
        <Container>
            <h1>Content</h1>
            {children}
        </Container>
    );
}

export default Content;