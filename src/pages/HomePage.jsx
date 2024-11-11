import React from 'react';
import MainComponent from '../components/MainComponent';
import HomePageCards from '../components/HomePageCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        <MainComponent/>
        <HomePageCards/>
        <JobListings isHome={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default HomePage