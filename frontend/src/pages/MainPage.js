import React from 'react'
import  {Slider}  from '../components/slider'
import  {CourseCard}  from '../components/coursecard'


export const MainPage = () => { 

    return (
        <div>
            <Slider />
                <h1>Популярные курсы</h1>
            <CourseCard />
        </div>    
    );
}