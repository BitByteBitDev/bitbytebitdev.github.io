import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Container, Card, Accordion } from 'react-bootstrap';
import Image from 'next/image';
import ThreeDButton from '../components/ThreeDButton';
import * as ga from '../lib/ga';
import GetStarted from '../components/GetStarted';
import InstructorBox from '../components/InstructorBox';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bit Byte Bit</title>
                <meta name='description' content='Bit Byte Bit' />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />

                <meta name='title' content='Bit Byte Bit' />
                <meta
                    name='description'
                    content='Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer.'
                />
                <meta
                    name='keywords'
                    content='bit byte bit, coding courses, programming courses, learn programming, learn coding, programming, coding'
                />
                <meta name='robots' content='index, follow' />
                <meta
                    httpEquiv='Content-Type'
                    content='text/html; charset=utf-8'
                />
                <meta name='language' content='English' />
                <meta name='author' content='Azam Ahmed' />
                <meta
                    name='subject'
                    content='Bit Byte Bit: Programming Courses'
                />
                <meta name='copyright' content='Azam Ahmed' />
                <meta name='revisit-after' content='1 days' />
                <meta
                    name='classification'
                    content='Bit Byte Bit: Programming Courses'
                />
                <meta name='distribution' content='Global' />
                <meta name='rating' content='General' />
                <meta name='owner' content='Azam Ahmed' />
                <meta name='url' content='https://bitbytebit.dev' />
                <meta name='identifier-URL' content='https://bitbytebit.dev' />
                <meta name='coverage' content='Worldwide' />

                <meta property='og:title' content='Bit Byte Bit' />
                <meta
                    property='og:description'
                    content='Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer.'
                />
                <meta
                    property='og:image'
                    content='https://bitbytebit.dev/android-chrome-192x192.png'
                />
                <meta property='og:url' content='https://bitbytebit.dev' />
                <meta property='og:type' content='website' />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:site' content='Bit Byte Bit' />
                <meta name='twitter:title' content='Bit Byte Bit' />
                <meta
                    name='twitter:description'
                    content='Bit Byte Bit provides a diverse range of programming courses to help you become a professional software developer.'
                />
                <meta
                    name='twitter:image'
                    content='https://bitbytebit.dev/android-chrome-192x192.png'
                />
                <meta name='twitter:url' content='https://bitbytebit.dev' />

                <meta name='theme-color' content='#ffffff' />

                {/*eslint-disable-next-line @next/next/no-sync-scripts*/}
            </Head>

            <Container className={styles.main}>
                <section className={styles.sectionContainer}>
                    <div>
                        <h1
                            className={styles.title}
                        >
                            Learning <span className={styles.inTitle}>to code</span> is for everyone!
                        </h1>

                        <h5
                            className={styles.description}
                        >
                            Whether you're a beginner taking your first steps into the world of programming or an experienced developer looking to sharpen your skills, our diverse range of coding courses has something for everyone.
                        </h5>

                        <Link href='/courses' passHref={true}>
                            <div
                                className={styles.coursesBtnWrapper}
                            >
                                <div className={styles.viewCoursesBtn}>
                                    <ThreeDButton text='View Courses' />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className={`d-flex align-items-center justify-content-center ${styles.aiImage}`}
                    >
                        <Image
                            src='/illustrations/proud-coder.svg'
                            alt='proud coder'
                            width='750'
                            height='400'
                        />
                    </div>
                </section>
                <div className={styles.marginAboveInstructor}></div>
                <InstructorBox />
                <div className='mt-5'></div>
                <h2 className={styles.sectionTitle}>
                        Why Bit Byte Bit?
                    </h2>
                <section className={styles.whySection}>
                    
                    <div className={`${styles.whyItem} ${styles.whyItemReverse}`}>
                        <Image
                            src='/illustrations/online-learning.svg'
                            alt='learning'
                            width='400'
                            height='400'
                        />
                        <div className={styles.whyInformation}>
                            <h2 className={styles.whyTitle}>
                                Engaging courses
                            </h2>
                            <p className={styles.whyDescription}>
                                Our engaging courses are designed to captivate your interest with clear and concise content delivered lesson by lesson. Dive into interactive lessons and reinforce your understanding with exercises at the end of each module. Enjoy the flexibility to learn at your own pace, fitting education seamlessly into your busy schedule.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.whySection}>
                    <div className={styles.whyItem}>
                        <div className={styles.whyInformation}>
                            <h2 className={styles.whyTitle}>
                                Earn certificates
                            </h2>
                            <p className={styles.whyDescription}>
                                Prove your mastery and showcase your achievement by earning a certificate upon successful completion of the course. Whether you're looking to boost your resume or impress your peers, our certificates validate your skills and knowledge, providing you with a tangible testament to your commitment to personal and professional growth.
                            </p>
                        </div>
                        <Image
                            src='/illustrations/certificate.svg'
                            alt='learning'
                            width='400'
                            height='400'
                        />
                    </div>
                </section>

                <section className={styles.whySection}>
                    <div className={`${styles.whyItem} ${styles.whyItemReverse}`}>
                        <Image
                            src='/illustrations/dev-focus.svg'
                            alt='learning'
                            width='400'
                            height='400'
                        />
                        <div className={styles.whyInformation}>
                            <h2 className={styles.whyTitle}>
                                Real-world applications
                            </h2>
                            <p className={styles.whyDescription}>
                                Our courses go beyond theory, offering real-world applications that bridge the gap between knowledge and practical skills. Gain insights that can be immediately applied to your professional life, ensuring that what you learn in our courses is not just theoretical but highly relevant to your everyday challenges and tasks.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.whySection}>
                    <div className={styles.whyItem}>
                        <div className={styles.whyInformation}>
                            <h2 className={styles.whyTitle}>
                                Money-back guarantee
                            </h2>
                            <p className={styles.whyDescription}>
                                Your satisfaction is our top priority, and we want you to feel confident in your investment. If, for any reason, you are not completely satisfied with your learning experience, we offer a hassle-free refund policy, ensuring that you can explore our courses risk-free. Your success is our success!
                            </p>
                        </div>
                        <Image
                            src='/illustrations/moneyback-guarantee.svg'
                            alt='learning'
                            width='400'
                            height='400'
                        />
                    </div>
                </section>

                <GetStarted/>

                <section className={`${styles.sectionContainer5} mt-2`}>
                    <h2 className={styles.sectionTitle}>
                        Frequently Asked Questions
                    </h2>
                    <div
                        className='mt-4 mb-5'
                    >
                        <Accordion>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    Do I need any prior programming experience to enroll in your courses?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Our courses cater to all skill levels, from beginners to advanced programmers. We provide introductory courses for those new to coding and more advanced courses for experienced developers looking to enhance their skills.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    How are the courses structured, and what is the learning format?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Our courses are designed with a structured curriculum, combining video lectures, hands-on coding exercises, quizzes, and projects. You can learn at your own pace, accessing course materials 24/7, allowing flexibility to fit into your schedule.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Do you offer any certifications upon course completion?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we provide certificates of completion for each course. These certificates are valuable for showcasing your skills to potential employers or clients and can be shared on professional platforms like LinkedIn.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    Do you offer refunds if I'm not satisfied with the course?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Yes, we have a satisfaction guarantee. If you're not satisfied with the course within a certain period, you can request a refund. Please refer to our refund policy for more details.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Home;
