import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { coursesContext } from '../../App';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';

const Body = () => {
    const courses = useContext(coursesContext)
    return (
        <div style={{marginBottom:'100px'}}>
            <Banner/>
            
            <div className="row container mx-auto g-4 shadow pb-4 border rounded mb-5">
            <h1 className="text-center text-danger"><span className="text-success">Top</span> Courses</h1>
            {
                courses.slice(0,4).map(course=> <Course 
                    key={course.id}
                    course={course}
                    />)
            }
            <Link className="btn btn-danger mx-auto"style={{width:'170px'}} to="/courses">
            Show All Courses
            </Link>
            </div>
            
            
        </div>
    );
};

export default Body;