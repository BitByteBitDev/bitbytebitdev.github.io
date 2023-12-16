import React from 'react';
import styles from '../styles/ArrowButton.module.css';
import Link from 'next/link';

interface ArrowButtonProps {
    text: string;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ text }) => {
    return (
        <>
            <Link href='/courses' passHref={true}>
            <button className={styles.arrowButton}>
                {text}
                <div className={styles.arrowWrapper}>
                    <div className={styles.arrow}></div>
                </div>
            </button></Link>
        </>
    )
}

export default ArrowButton;