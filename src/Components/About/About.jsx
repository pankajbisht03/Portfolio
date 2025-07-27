import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import pic from "../../img1.jpg"
import {
    AboutDiv,
    Column,
    Img,
    AboutInfo,
    AboutInfoP,
    HeaderUl,
    HeaderLi,
    JelloHori,
} from './Styles';

import { Container, H1 } from '../../SharedStyles/SharedStyles';
const socialMediaLinks = [
    {
        id: 0,
        link: 'https://www.linkedin.com/in/pankaj-bisht-6722a21bb/',
        icon: <FaLinkedin />,
    },
    {
        id: 1,
        link: 'https://github.com/pankajbisht03',
        icon: <FaGithub />,
    },
    // {
    //     id: 2,
    //     link: 'https://twitter.com/aadityaneve',
    //     icon: <FaTwitter />,
    // },
    /* {
        id: 3,
        link: 'https://leetcode.com/aadityaneve',
        icon: <SiLeetcode />,
    }, */
];
const About = () => {
    return (
        <Container className='about'>
            <AboutDiv>
                <Column>
                    <Img src={pic} alt='my image' />
                </Column>
                <Column >
                    <H1>About Me</H1>
                    <AboutInfo>
                        <AboutInfoP>
                        I'm a passionate frontend developer with over 3 years of experience building responsive, high-performance web applications using the MERN stack with a strong focus on React.js and clean UI design.
                        </AboutInfoP>
                        <AboutInfoP>
                        I enjoy working on challenging projects that push my skills and help me grow as a developer. From creating intuitive dashboards to optimizing frontend performance, I love turning ideas into interactive, user-friendly interfaces.
                        </AboutInfoP>
                        <AboutInfoP>
                        You can take a look at my work here -
                        </AboutInfoP>
                    </AboutInfo>
                    <HeaderUl>
                        
                        {socialMediaLinks.map((item) => (
                            <JelloHori key={item.id}>
                                <a
                                    href={item.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <HeaderLi>{item.icon}</HeaderLi>
                                </a>
                            </JelloHori>
                        ))}
                    </HeaderUl>
                </Column>
            </AboutDiv>
        </Container>
    );
};

export default About;
