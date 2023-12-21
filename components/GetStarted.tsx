import React from 'react';
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
                    <ArrowButton text="View Courses" />
                </div>
                <Image
                    src='/illustrations/programming.svg'
                    alt='learning'
                    width='300'
                    height='340'
                />
                
            </div>
        </>
    )
}

export default GetStarted;