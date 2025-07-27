import React from 'react';
import { Container } from '../../SharedStyles/SharedStyles';
import { FooterCont, A } from './Styles';

const Footer = () => {
    return (
        <Container>
            {/* </FooterLink> */}
            <FooterCont>
                <A
                  
                    target='_blank'
                    rel='noreferrer'
                >
                    <strong></strong>
                </A>
            </FooterCont>
            {/* </FooterLink> */}
        </Container>
    );
};

export default Footer;
