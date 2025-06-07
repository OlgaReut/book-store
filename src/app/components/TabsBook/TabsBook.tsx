import style from "./tabsStyle.module.scss"
import SvgDarkStar from "../svg/SvgDarkStar";
import SvgLightStar from "../svg/SvgLightStar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

const TabsBook = () => {

    return (
        <>
            <Tabs className={style.tabsContainer}>
                <TabList className={style.tabsTitles}>
                    <Tab className={style.tabsDescription}>Description</Tab>
                    <Tab className={style.tabsAuthors}>Authors</Tab>
                    <Tab className={style.tabsReviews}>Reviews</Tab>
                </TabList>
                <TabPanel className={style.tabsContent}>
                    <p className={style.tabsContentDescription}>Start programming your own robots using Robot Operation System (ROS). Targeted for absolute beginners in ROS, Linux, and Python, this guide lets you build your own robotics projects.
                        <br /><br />
                        You'll learn the basic foundation of Ubuntu Linux. Begin with the fundamentals. Installation and useful commands will give you the basic tools you need while programming a robot. Then add useful software applications that can be used while making robots. Programming robots can be done using any of the programming languages. Most popular programming languages are Python and C++. You will incorporate the fundamentals of C++ by learning object oriented programming concepts from example and building C++ projects.
                        <br /><br />
                        Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands-on experience working with hardware to create a real robot.
                    </p>
                </TabPanel>
                <TabPanel className={style.tabsContent}>
                    <h3 className={style.tabsContentAuthors}>Julien Vehent
                    </h3>
                    <p className={style.tabsContentAuthorsText}>Julien Vehent is a security engineer, DevSecOps advocate and author of the book Securing DevOps. He works on Cloud security in Google's Detection and Response team. Previously, Julien ran the Firefox Operations Security team at Mozilla.</p>
                </TabPanel>
                <TabPanel className={style.tabsContent}>
                    <div className={style.tabsContentDReviews}>
                        <div className={style.tabsReviewsCardFirst}>
                            <div className={style.tabsReviewsCardRating}>
                                <div className={style.cardRating}><SvgDarkStar /></div>
                                <div className={style.cardRating}><SvgDarkStar /></div>
                                <div className={style.cardRating}><SvgDarkStar /></div>
                                <div className={style.cardRating}><SvgDarkStar /></div>
                                <div className={style.cardRating}><SvgLightStar /></div>
                            </div>
                            <p className={style.tabsReviewsCardText}>The book is simply super. The material is presented in a very accessible form, even a child can understand it. Plus excellent graphic support and examples from everyday tasks help to imprint the information read in memory. In general, I highly recommend it as a basic, introductory material that will open the way for you to study more complex algorithms.</p>
                        </div>
                        <div className={style.tabsReviewsCard}>
                            <div className={style.tabsReviewsCardRating}>
                                <div className={style.tabsRating}><SvgDarkStar /></div>
                                <div className={style.tabsRating}><SvgDarkStar /></div>
                                <div className={style.tabsRating}><SvgDarkStar /></div>
                                <div className={style.tabsRating}><SvgDarkStar /></div>
                                <div className={style.tabsRating}><SvgLightStar /></div>
                            </div>
                            <p className={style.tabsReviewsCardText}>A great guide for beginners!
                                Basically, it covers the very basics that are so popular in interviews. Well, the book can be quite interesting and motivate you to study the world of algorithms in depth.</p>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default TabsBook