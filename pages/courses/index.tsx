import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../../styles/Courses.module.css';
import Image from 'next/image';
import Head from 'next/head';
import CourseCards from '../../components/CourseCards';

const Courses: React.FC = ({}) => {
    interface ICourse {
        name: string;
        description: string;
        image: string;
        href: string;
        prerequisites: string[];
    }

    const courses: ICourse[] = [
        {
            name: 'Ultimate Python Course: Zero to Hero',
            description:
                'Learn all of Python in one course. A full 12 hour course that takes you from beginner to advanced and incldes 5 real-world projects.',
            image: '/course_icons/python.png',
            href: '/courses/ultimate-python-course',
            prerequisites: [],
        }
    ];

    return (
        <>
            <Head>
                <title>Courses</title>
                <meta
                    name='description'
                    content='Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer.'
                />
            </Head>
            <Container className='mb-5' style={{height: '85vh'}}>
                <h1 className={styles.title}>Our Courses</h1>
                <p className={styles.pText}>Immerse yourself in the world of programming through our top-tier courses, offering interactive lessons with a variety of exercises and projects to facilitate your learning.</p>
                <main className='mt-5'>                
                    <CourseCards courses={courses} />
                </main>
            </Container>
        </>
    );
};

export default Courses;
