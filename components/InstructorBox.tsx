import React from 'react';
import Image from 'next/image';
import styles from '../styles/InstructorBox.module.css';
import ArrowButton from './ArrowButton';

const InstructorBox: React.FC = () => {
    return (
        <>
            <div className={styles.instructorBox}>
                <Image
                    src='/azam.png'
                    alt='learning'
                    width='300'
                    height='300'
                    data-aos='zoom-in-right'
                    data-aos-once='true'
                    style={{borderRadius: '50%'}}
                />
                <div className={styles.instructorBoxText}>
                    <h2 style={{fontWeight: 'bold'}}>Hey! I'm Azam Ahmed.</h2>
                    <p>If you're looking to level up your programming skills and boost career opportunities, you've come to the right place! We have a variety of programming courses that will quickly take you from beginner to advanced. Take a look at our courses and get started today!</p>
                    <ArrowButton text="View Courses" />
                </div>
            </div>
        </>
    )
}

export default InstructorBox;