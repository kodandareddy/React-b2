import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import Products from "./Componets/Prodects";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyData from "./Componets/MyData";
import Home from "./Componets/Home";
import MyCourses from "./Componets/MyCourses";
import MyCoursesDetails from "./Componets/MyCoursesDetails";
import MyCourseId from "./Componets/MyCourseId";
const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            user ? (
              <Navigate replace to="/myData" />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/myData" element={<MyData />} />
        <Route path="/myCourses" element={<MyCourses />}>
          <Route path="details" element={<MyCoursesDetails />}>
            <Route path=":courseId" element={<MyCourseId />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
