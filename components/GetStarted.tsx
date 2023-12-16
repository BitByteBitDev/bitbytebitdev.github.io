import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/GetStarted.module.css';
import ArrowButton from './ArrowButton';

const GetStarted: React.FC = () => {
    return (
        <>
            <div className={styles.getStarted}>
                <div className={styles.getStartedText}>
                    <h2 style={{fontWeight: 'bold'}}>Excited to learn programming?</h2>
                    <p>Take a look at our courses and get started today!</p>
                    {/* <Button variant='primary'>View Courses</Button> */}
                    <ArrowButton text="View Courses" />
                </div>
                <Image
                    src='/illustrations/programming.svg'
                    alt='learning'
                    width='300'
                    height='340'
                    data-aos='zoom-in-right'
                    data-aos-once='true'
                />
                
            </div>
        </>
    )
}

export default GetStarted;