import React from 'react';
import { HeaderContent, H1, P, A, HeaderButtons, TypeWriterH1 } from './Styles';
import { Container } from '../../SharedStyles/SharedStyles';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <Container className='home'>
            <HeaderContent style ={{justifyContent:"center"}}>
                <div>
                    <H1>Hi there!👋, I'm Pankaj Bisht</H1>
                    <TypeWriterH1>
                        <Typewriter
                            options={{
                                strings: [
                                    'A Software Engineer',
                                    'A Problem Solver',
                                    'A Full Stack Developer',
                                    'A Team Player'
                                ],
                                pauseFor: 1500,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </TypeWriterH1>
                    <P>
                    Yeah, I write clean and optimized code. ✌️
                    </P>
                    <HeaderButtons>
                        <A
                            target='_blank'
                            rel='noreferrer'
                            href='https://drive.google.com/file/d/1GUAsCvt6dI5x5Yb66lFI0hOSz6WXmzmB/view'
                        >
                            Resume
                        </A>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            activeClass='active'
                            to='projects'
                            spy={true}
                            smooth={true}
                            duration={300}
                        >
                            <A>Projects</A>
                        </Link>
                    </HeaderButtons>
                </div>
            </HeaderContent>
        </Container>
    );
};

export default Banner;
