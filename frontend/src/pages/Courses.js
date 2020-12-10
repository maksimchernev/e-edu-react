import React from 'react'
import  {Footer}  from '../components/footer'
import  {Filters}  from '../components/filters'
import  {CourseCard}  from '../components/coursecard'


export const ListCourses = () => {
    return (
          <div>
            <Filters />
            <CourseCard />
          </div>
    )
}