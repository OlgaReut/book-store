import style from "./tabsStyle.module.scss"
import SvgDarkStar from "../svg/SvgDarkStar";
import SvgLightStar from "../svg/SvgLightStar";

const TabsBook = () => {

    return (
        <>
            <div className={style.tabsTitles}>
                <button className={style.tabsDescription} >Description</button>
                <button className={style.tabsAuthors} >Authors</button>
                <button className={style.tabsReviews} >Reviews</button>
            </div>
            <div className={style.tabsContentWrap}>
                <p className={style.tabsContentDescription}>Start programming your own robots using Robot Operation System (ROS). Targeted for absolute beginners in ROS, Linux, and Python, this guide lets you build your own robotics projects.
                    <br /><br />
                    You'll learn the basic foundation of Ubuntu Linux. Begin with the fundamentals. Installation and useful commands will give you the basic tools you need while programming a robot. Then add useful software applications that can be used while making robots. Programming robots can be done using any of the programming languages. Most popular programming languages are Python and C++. You will incorporate the fundamentals of C++ by learning object oriented programing concepts from example and building C++ projects.
                    <br /><br />
                    Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands-on experience working with hardware to create a real robot.
                </p>
                <div className={style.tabsContentAuthors}>Julien Vehent
                </div>
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
            </div >
        </>
    )
}

export default TabsBook