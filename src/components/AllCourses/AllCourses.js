import React ,{ useContext} from 'react';
import { coursesContext } from '../../App';
import DetailCourse from '../DetailCourse/DetailCourse';
const AllCourses = () => {
    const courses = useContext(coursesContext);
    return (
        <div className="container my-5">
            <h2 className="text-success mb-5">All Courses</h2>
            <div className="row g-4">
            {
                courses.map(course=><DetailCourse 
                    key={course.id}
                    course={course}
                    ></DetailCourse>)
            }
            </div>
        </div>
    );
};

export default AllCourses;