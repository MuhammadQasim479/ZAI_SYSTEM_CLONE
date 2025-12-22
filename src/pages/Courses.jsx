import React from 'react'
import Courseslist from '../components/Courses/Courseslist'
import Courseslanguage from '../components/Courses/Courseslanguage';
import Courseshero from '../components/Courses/Courseshero';

const Courses = () => {
  return (
    <div>
        <Courseshero />
        <Courseslist />
        <Courseslanguage />
    </div>
  )
}

export default Courses;