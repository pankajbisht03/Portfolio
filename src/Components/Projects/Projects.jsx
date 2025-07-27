import React from 'react';
import { FaGithub, FaLink, FaNodeJs, FaReact } from 'react-icons/fa';
import {
    ProjectDiv,
    Row,
    ServiceBox,
    ServiceBoxHeader,
    ServiceBoxP,
    A,
    BoxDiv,
} from './Styles';
import { Container, Common, H1 } from '../../SharedStyles/SharedStyles';
import { AiFillGithub } from 'react-icons/ai';
import { FaHtml5, FaJs, FaCss3 } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from 'uuid';
// import pic from "../../acko.jpg"

const Projects = () => {
    const projects = [

        {
            id: 1,
            project_name: 'Ubuy Clone',
            image: 'https://i.postimg.cc/zf7PFwxD/Screenshot-274.png',
            project_desc:
                'Ubuy is a popular cross-border shopping e-commerce company that offers some of the best international brands which you can buy from the website.',
            deploy_link: 'https://ubuy-alpha.vercel.app/',
            repo_link: 'https://github.com/pankajbisht03/Ubuy-1.git',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />,

            ],
        },
        {
            id: 2,
            project_name: 'Netflix GPT',
            image: 'https://i.postimg.cc/vBCbHyvw/Screenshot-329.png',
            project_desc:
                `Netflix GPT is an AI-powered movie recommendation web app that suggests personalized film titles based on user prompts using GPT and TMDB APIs..`,
            deploy_link: 'https://netflixgpt-8e7e0.web.app/',
            repo_link: 'https://github.com/pankajbisht03/NetflixGPT',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />, ,
            ],
        },
        {
            id: 3,
            project_name: 'PharmEasy Clone',
            image: 'https://i.ibb.co/N7W5NGy/Screenshot-240.png',
            project_desc:
                `PharmEasy is an Indian healthcare app and ecommerce platform for consumers involved in selling online medicines, diagnostics, telehealth, online doctor consultation services.`,
            deploy_link: 'https://pharmeasy-2af20pu9m-pankajbisht03.vercel.app/',
            repo_link: 'https://github.com/pankajbisht03/PharmEasy.git',
            tech_stack: [
                <FaHtml5 />,
                <FaCss3 />,
                <FaJs />, ,
            ],
        },
        // {
        //     id: 3,
        //     project_name: 'Intershala Clone',
        //     image: 'https://i.ibb.co/zVZNfZX/Screenshot-267.png',
        //     // image: 'https://i.postimg.cc/0jfLFdNN/Screenshot-264.png',



        //     // image: "./Projects/intern.png",

        //     project_desc:
        //         " Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, and other streams.",

        //     deploy_link: 'http://sampleclone-env.eba-9dmzyuuw.us-west-2.elasticbeanstalk.com/',
        //     repo_link: 'https://github.com/pankajbisht03/Intershala-Clone.git',
        //     tech_stack: [
        //         <FaHtml5 />,
        //         <FaCss3 />,
        //         <FaJs />,
        //         <SiMongodb />,
        //         <SiExpress />,
        //         <AiFillGithub />,
        //         <FaNodeJs />,
        //     ],
        // },
        // {
        //     id: 4,
        //     project_name: 'Acko Clone',
        //     image: "https://i.postimg.cc/0QY4Qww2/Screenshot-291.png",
        //     project_desc:
        //         'Acko General Insurance is a private sector general insurance company.',
        //     deploy_link: 'https://acko-three.vercel.app/',
        //     repo_link: 'https://github.com/pankajbisht03/Acko-Frontend',
        //     tech_stack: [
        //         <FaJs />,
        //         <FaHtml5 />,
        //         <FaCss3 />,
        //         <FaReact />,
        //         <SiMongodb />,
        //         <FaNodeJs />
        //     ]
        // }
    ];

    return (
        <Container className='projects'>
            <ProjectDiv>
                <Common>
                    <H1>Projects</H1>
                </Common>
                <Row>
                    {projects.map((item) => (
                        <BoxDiv key={uuidv4()}>
                            <ServiceBox>
                                <img
                                    src={item.image}
                                    alt='icon'
                                    style={{ width: '100%' }}
                                />
                                <div style={{ margin: '25px' }}>
                                    <ServiceBoxHeader
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.project_name}
                                    </ServiceBoxHeader>
                                    <ServiceBoxP>
                                        {item.project_desc}
                                    </ServiceBoxP>
                                    {/* <a href="">Read more</a> */}
                                    <div
                                        style={{
                                            margin: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.tech_stack.map((item) => (
                                            <div
                                                key={uuidv4()}
                                                className='iconsTechStack'
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <A
                                        href={item.repo_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaGithub /> Code
                                    </A>
                                    <A
                                        href={item.deploy_link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <FaLink /> Demo
                                    </A>
                                </div>
                            </ServiceBox>
                        </BoxDiv>
                    ))}
                </Row>
            </ProjectDiv>
        </Container>
    );
};

export default Projects;
