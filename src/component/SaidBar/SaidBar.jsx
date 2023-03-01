/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import "./saidbar.css";
import { ProgressSpinner } from "primereact/progressspinner";
export const SaidBar = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  const { user: { user } } = useSelector(state => state.LoginReducer);
  const GetCoursesReducer = useSelector(state => state.GetCoursesReducer);
  const { loading } = GetCoursesReducer;
  return (
    <div>
      {loading
        ? <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        : <div className="desktop">
            <div className="acc-info">
              <div />

              <div className="text-img">
                <div>
                  <h5>
                    {user.name}
                  </h5>
                  <p>
                    {user.school.name}
                  </p>
                </div>
                <img
                  src={`https://nafes.app/cv_task/res/user/imgs/${user.profileImg}`}
                />
              </div>
            </div>
            <div className="space-top" />
            <div className="acc-info" id={"student-class"}>
              <div />

              <div className="text-img">
                <div>
                  <h5>
                    {user.name}
                  </h5>
                  <p>طالب</p>
                </div>
                <img
                  src={`https://nafes.app/cv_task/res/user/imgs/${user.profileImg}`}
                />
              </div>
            </div>

            <div className="space-top" />
            <div className="preson-file">
              <span>الملف الشخصى</span>
            </div>
            <div className="space-top" />
            <div className="space-top" />

            <section className="sub-navbar">
              <button className="school-subjects">
                <span> المواد الدراسية </span>
                <i className="pi pi-inbox" />
              </button>
              <button className="school-subjects">
                <span> جدول المهام </span> <i className="pi pi-server" />
              </button>
              <button className="school-subjects">
                <span> المنافسون الاوئل </span>{" "}
                <i className="pi pi-info-circle" />
              </button>
              <button className="school-subjects">
                <span> التقارير </span>
                <i className="pi pi-book" />
              </button>
            </section>
          </div>}

      {/* saidbar in mobile  */}

      <div className="mobile">
        <Button
          id="btn-menu"
          icon="pi pi-bars"
          onClick={() => setVisibleRight(true)}
        />
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <div className="acc-info">
            <div />

            <div className="text-img">
              <div>
                <h5>
                  {user.name}
                </h5>
                <p>
                  {user.school.name}
                </p>
              </div>
              <img
                src={`https://nafes.app/cv_task/res/user/imgs/${user.profileImg}`}
              />
            </div>
          </div>
          <div className="space-top" />
          <div className="acc-info" id={"student-class"}>
            <div />

            <div className="text-img">
              <div>
                <h5>
                  {user.name}
                </h5>
                <p>طالب</p>
              </div>
              <img
                src={`https://nafes.app/cv_task/res/user/imgs/${user.profileImg}`}
              />
            </div>
          </div>

          <div className="space-top" />
          <div className="preson-file">
            <span>الملف الشخصى</span>
          </div>
          <div className="space-top" />
          <div className="space-top" />

          <section className="sub-navbar">
            <button className="school-subjects">
              المواد الدراسية <i className="pi pi-inbox" />
            </button>
            <button className="school-subjects">
              {" "}جدول المهام <i className="pi pi-server" />
            </button>
            <button className="school-subjects">
              {" "}المنافسون الاوئل <i className="pi pi-info-circle" />
            </button>
            <button className="school-subjects">
              {" "}التقارير <i className="pi pi-book" />
            </button>
          </section>
        </Sidebar>
      </div>
    </div>
  );
};
