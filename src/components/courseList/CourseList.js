import React from "react";
import { UserConsumer } from "../App";

const CourseList = () => {
  return (
    <div>
      <UserConsumer>
        {({ course, deleteModule, isAuth }) => (
          <>
            {isAuth ? (
              <>
                <h2>Title: {course.title}</h2>
                <ul>
                  {course.modules.map((module) => (
                    <li key={module.id}>
                      <p>{module.name}</p>
                      <button id={module.id} onClick={deleteModule}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <h2>Unauthorized to perfoghjbk</h2>
            )}
          </>
        )}
      </UserConsumer>
    </div>
  );
};

export default CourseList;
