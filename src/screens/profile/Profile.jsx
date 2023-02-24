/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import "./profile.css";
export const Profile = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div>
      <div className="profile-container">
        <div className="card">
          <div className="profile">

            <section className="content" >
             <div className="container">
              <div className="sub">
                <div className="head"></div>
                <div className="title">
                  <span>الدراسات الاجتماعية</span>
                </div>
              </div>
              <div className="sub">
                <div className="head"></div>
                <div className="title">
                <span>العلوم</span>
                </div>
              </div>
              <div className="sub">
                <div className="head"></div>
                <div className="title">
                <span>الرياضيات</span>
                </div>
              </div>
              <div className="sub">
                <div className="head"></div>
                <div className="title">
                <span>الانجليزى</span>

                </div>
              </div>
             </div>
            </section>


            {/* saidbar in desktop  */}
            <section className="saidbar">
              <div className="desktop">
                <div className="acc-info">
                  <div />

                  <div className="text-img">
                    <div>
                      <h5>عمر أحمد </h5>
                      <p>طالب</p>
                    </div>
                    <img src="./images/nafes_plus_logo.png" />
                  </div>
                </div>
                <div className="space-top" />
                <div className="acc-info" id={"student-class"}>
                  <div />

                  <div className="text-img">
                    <div>
                      <h5>عمر أحمد </h5>
                      <p>طالب</p>
                    </div>
                    <img src="./images/nafes_plus_logo.png" />
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
                    <span> المواد الدراسية  </span><i className="pi pi-inbox" />
                  </button>
                  <button className="school-subjects">
                  <span>{" "}جدول المهام  </span>  <i className="pi pi-server" />
                  </button>
                  <button className="school-subjects">
                  <span>{" "}المنافسون الاوئل </span>   <i className="pi pi-info-circle" />
                  </button>
                  <button className="school-subjects">
                  <span>{" "} التقارير   </span><i className="pi pi-book" />
                  </button>
                </section>
              </div>
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
                        <h5>عمر أحمد </h5>
                        <p>طالب</p>
                      </div>
                      <img src="./images/nafes_plus_logo.png" />
                    </div>
                  </div>
                  <div className="space-top" />
                  <div className="acc-info" id={"student-class"}>
                    <div />

                    <div className="text-img">
                      <div>
                        <h5>عمر أحمد </h5>
                        <p>طالب</p>
                      </div>
                      <img src="./images/nafes_plus_logo.png" />
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
