import React, { createContext, useState } from "react";
import Courses from "./courses/Courses";

const initialState = {
  products: [],
  cart: [],
  auth: {
    isAuth: false,
    token: "",
    id: "",
  },
  user: {
    name: "",
    email: "",
    phone: "",
  },
  courses: [],
  course: {
    title: "React",
    modules: [
      { name: "let & const", id: "123" },
      { name: "some & some", id: "234" },
    ],
  },
};

export const {
  Provider: UserProvider,
  Consumer: UserConsumer,
} = createContext();

const App = () => {
  const [state, setState] = useState({ ...initialState });

  const deleteModule = (e) => {
    const id = e.target.id;
    setState((prev) => ({
      ...prev,
      course: {
        ...prev.course,
        modules: [...prev.course.modules.filter((module) => module.id !== id)],
      },
    }));
  };

  return (
    <>
      <UserProvider
        value={{
          course: state.course,
          deleteModule,
          isAuth: state.auth.isAuth,
        }}>
        <Courses />
      </UserProvider>
    </>
  );
};

export default App;
