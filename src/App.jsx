import React from 'react';
import Button from './components/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Shared/Layout.jsx';
import Dashboard from './components/Dashboard.jsx';
import { Signup } from './pages/Auth/signup.jsx';
import UserManagement from './components/UserManagement.jsx';
import ManageStudents from './pages/ManageStudents.jsx';
import ManageParents from './pages/ManageParents.jsx';
import ManageInstructors from './pages/ManageInstructors.jsx';
import AdminStrators from './pages/AdminStrators.jsx';
import CourseList from './pages/CourseList.jsx';
import CreateCourse from './pages/CreateCourse.jsx';
import CreateCourseModules from './pages/CreateCourseModules.jsx';
import CreateAssignment from './pages/CraeteAssignment.jsx';
import GradeAssignment from './pages/GradeAssignment.jsx';
import Announcements from './pages/Announcements.jsx';
import Notification from './pages/Notification.jsx';
import Message from './pages/Message.jsx';
import StudentProfile from './pages/StudentProfile.jsx';
import ParentProfile from './pages/ParentProfile.jsx';
import Instructor from './pages/Instructor.jsx';
import AdminStrator from './pages/Administrator.jsx';
import Course from './pages/course.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/Manage-Student' element={<ManageStudents />} />
            <Route path='/Student-Profile' element={<StudentProfile />} />
            <Route path='/Parent-Profile' element={<ParentProfile />} />
            <Route path='/Instructor' element={<Instructor />} />
            <Route path='/Course' element={<Course />} />

            <Route path='/Administrator' element={<AdminStrator />} />

            <Route path='/Manage-Parent' element={<ManageParents />} />
            <Route path='/Manage-Instructors' element={<ManageInstructors />} />
            <Route path='/Administrators' element={<AdminStrators />} />
            <Route path='/Course-List' element={<CourseList />} />
            <Route path='/Create-Course' element={<CreateCourse />} />
            <Route path='/create-course-modules' element={<CreateCourseModules />} />
            <Route path='/Create-Assignment' element={<CreateAssignment />} />
            <Route path='/Grade-Assignments' element={<GradeAssignment />} />
            <Route path='/Announcement' element={<Announcements />} />

            <Route path='/Notification' element={<Notification />} />

            <Route path='/Message-System' element={<Message />} />
          </Route>
        </Routes>
        <Routes>
          <Route path='/signin' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
