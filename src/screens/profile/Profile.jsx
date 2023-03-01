/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { SaidBar } from "../../component/SaidBar/SaidBar";
import { ProgressSpinner } from 'primereact/progressspinner';

import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { CoursesListAction } from "../../redux/actions/CoursesAction";
export const Profile = () => {
  const displatch = useDispatch();

  const GetCoursesReducer = useSelector(state => state.GetCoursesReducer);
  console.log(GetCoursesReducer)

  const {user} = GetCoursesReducer
  const {loading} = GetCoursesReducer

  console.log(user?.courseList)
  useEffect(
    () => {
      displatch(CoursesListAction());
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
                { loading ? 
              
      <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />          
              
            :  
            user?.courseList.map((course) =>(
              <div className="sub" key={course.id}>
              <div className="head">
                <img src={`https://nafes.app/cv_task/res/course/imgs/${course.icon}`}/>
              </div>
              <div className="title">
                <span>
                  {course.name}
                </span>
              </div>
            </div>
            )               
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
