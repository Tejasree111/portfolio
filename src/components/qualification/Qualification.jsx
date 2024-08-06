import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggeleState] = useState(1);
  const toggleTab = (index) => {
    setToggeleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Narayana jr clg</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2019 - 2021</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">Vignan's institute of information technology</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>
            </div>
            
   {       /*
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web development</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">ux expert</h3>
                <span className="qualification__subtitle">Spain Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>
            </div> 
            */

   }

          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Python/Django developer </h3>
                <span className="qualification__subtitle">Intvice</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">May,2023 - june,2023</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">Sync interns</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">may,2023 - june,2023</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full stack web development</h3>
                <span className="qualification__subtitle">Slash Mark</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">Dec,2023 - March,2024</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Data Analytics and visualisation</h3>
                <span className="qualification__subtitle">Accenture</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt">july,2024</i>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
