import React ,{ useContext} from 'react';
import { coursesContext } from '../../App';
import Course from '../Course/Course';
import DetailCourse from '../DetailCourse/DetailCourse';
const AllCourses = () => {
    const courses = useContext(coursesContext);
    console.log(courses);
    return (
        <div className="container my-5">
            <div className="row g-4">
            {
                courses.map(course=><DetailCourse course={course}></DetailCourse>)
            }
            </div>
        </div>
    );
};

export default AllCourses;