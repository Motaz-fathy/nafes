/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { SaidBar } from "../../component/SaidBar/SaidBar";

import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { CoursesList } from "../../redux/actions/CoursesAction";
export const Profile = () => {
  const displatch = useDispatch();

  const GetCoursesReducer = useSelector(state => state.GetCoursesReducer);

  const {user : {courseList}} = GetCoursesReducer
  console.log(courseList)
  useEffect(
    () => {
      displatch(CoursesList());
    },
    [displatch]
  );
  return (
    <div>
      <div className="profile-container">
        <div className="card">
          <div className="profile">
            <section className="content">
              <div className="container">
                
              {
              courseList?.map(course => 
                <div className="sub" key={course.id}>
                <div className="head"></div>
                <div className="title">
                  <span>
                    {course.name}
                  </span>
                </div>
              </div>
              )
             }
                
                
              </div>
            </section>

            <div className="saidbar">
              <SaidBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
