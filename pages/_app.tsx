import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from '../components/MainNavbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import * as ga from '../lib/ga';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { asPath } = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {/* {asPath === '/' ? (
                <div className='banner'>
                    <div>
                        BLACK FRIDAY 50% OFF ALL COURSES{' '}
                        <a
                            href='https://bitbytebit.dev/courses'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <b
                                className='text-decoration-underline cursor-pointer'
                                style={{ color: 'white' }}
                            >
                                Use code
                            </b>
                        </a>{' '}
                        BLACKFRIDAY0101 for discount.
                    </div>
                </div>
            ) : null} */}

            <MainNavbar />
            <Component {...pageProps} />
            <footer>
                <Container className='w-100'>
                    <hr />
                    <p>
                        <div className='d-flex flex-row justify-content-between'>
                            <span>
                                Copyright &copy; {new Date().getFullYear()}{' '}
                                Bit Byte Bit. All rights reserved.
                            </span>
                            {/* <span>
                                <a href="" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/facebook.png" alt="facebook" width={35} height={35} />
                                </a>
                                <a href="" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/instagram.png" alt="instagram" width={35} height={35} />
                                </a>
                                <a href="" target="_blank" rel="noreferrer noopener" className="me-3">
                                    <Image src="/social_icons/linkedin.png" alt="linkedin" width={35} height={35} />
                                </a>
                                <a href="" target="_blank" rel="noreferrer noopener">
                                    <Image src="/social_icons/twitter.png" alt="twitter" width={35} height={35} />
                                </a>
                            </span> */}
                        </div>
                    </p>
                </Container>
            </footer>
        </>
    );
}

export default MyApp;
