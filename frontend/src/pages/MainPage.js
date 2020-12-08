import React from 'react'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'
import  {Footer}  from '../components/footer'

export const MainPage = () => { 

    return (
        <div>
            <Slider />
                <h1>Популярные курсы</h1>
            <CourseCard />
            <Footer />
        </div>    
    );
}