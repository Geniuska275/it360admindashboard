import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineDashboard } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { LuNotebookText } from 'react-icons/lu';
import React from 'react';

export const DASHBOARD_SIDEBAR = [
  {
    key: 'Dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <MdOutlineDashboard />,
  },
];

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'Dashboard',
    label: 'Dashboard',
    path: '/Dashboard',
    icon: <MdOutlineDashboard />,
  },
  {
    key: 'Manage Student',
    label: 'Manage Student',
    path: '/Manage-Student',
  },
  {
    key: 'Manage Parent',
    label: 'Manage Parent',
    path: '/Manage-Parent',
  },
  {
    key: 'Manage Instructors',
    label: 'Manage Instructors',
    path: '/Manage-Instructors',
  },
  {
    key: 'Administrators',
    label: 'Administrators',
    path: '/Administrators',
  },
  {
    key: 'Course List View',
    label: 'Course List  View',
    path: '/Course-List',
  },
  {
    key: 'Create Course',
    label: 'Create Course',
    path: '/Create-Course',
  },
  {
    key: 'Create Assignment/Quizzes',
    label: 'Create Assignent/Quizzes',
    path: '/Create-Assignment',
  },
  {
    key: 'Grade Assignments',
    label: 'Grade Assignments/Quizzes',
    path: '/Grade-Assignments',
  },
  {
    key: 'Announcement',
    label: 'Announcement',
    path: '/Announcement',
  },
  {
    key: 'Notification',
    label: 'Notification',
    path: '/Notification',
  },
  {
    key: 'Message System',
    label: 'Message System',
    path: '/Message-System',
  },
];
