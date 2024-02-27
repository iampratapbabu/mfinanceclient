import React from 'react'
import Header from '../components/layout/Header'
import HeroSection from '../components/HeroSection'
import JobsCategory from '../components/jobs/JobsCategory'
import SubBanner from '../components/SubBanner'
import Promotion1 from '../components/Promotion1'
import FeaturedJobs from '../components/jobs/FeaturedJobs'
import Stats from '../components/Stats'
import TopRecruiters from '../components/TopRecruiters'
import Footer from '../components/layout/Footer'
import JobsByLocation from '../components/jobs/JobsByLocation'
import Blogs from '../components/Blogs'
import NewsLetter from '../components/NewsLetter'



const Homepage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <HeroSection />
                <JobsCategory />
                <SubBanner />
                <FeaturedJobs />
                <Stats />
                <TopRecruiters />
                <JobsByLocation />
                <Blogs />
                <NewsLetter />
            </main>
            <Footer />
        </>
    )
}

export default Homepage