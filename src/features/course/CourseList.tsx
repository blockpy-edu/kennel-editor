import React, {useState} from 'react';

import {serverApi} from "../../store/enhancedApi";
import {CourseSchema} from "../../store/serverApi";

export function CourseList() {
    const {data: courses, isLoading: coursesLoading } = serverApi.useCoursesQuery();
    const [ newCourse ] = serverApi.useNewCourseMutation();

    return (
        <div style={{border: '1px solid black'}}>
          <p>{coursesLoading ?
              <span>Loading Courses</span> :
              <ul>{courses?.map((course: CourseSchema) => (
                  <li>{course?.name}</li>
              ))}</ul>
          }</p>
            <div>
                <button onClick={()=>newCourse()}>Add course</button>
            </div>
        </div>
    );
}
