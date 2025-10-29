import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { CheckCircle2, MoreVertical, Paperclip, Eye, FileText } from 'lucide-react';
import { Table } from '@radix-ui/themes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

function GradeAssignment() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('Submitted');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const tabs = ['Submitted', 'Pending', 'Overdue', 'Graded'];

  const assignments = [
    // Submitted
    {
      id: 1,
      fullName: 'John Doe',
      assignmentTitle: 'Assignment 1: Introduction',
      dueDate: '12/10/2024',
      status: 'Submitted',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      assignmentTitle: 'Assignment 2: Advanced Concepts',
      dueDate: '12/10/2024',
      status: 'Submitted',
    },
    {
      id: 3,
      fullName: 'Alice Brown',
      assignmentTitle: 'Assignment 1: Introduction',
      dueDate: '12/12/2024',
      status: 'Submitted',
    },
    // Pending
    {
      id: 4,
      fullName: 'Mike Johnson',
      assignmentTitle: 'Assignment 3: Final Project',
      dueDate: '12/15/2024',
      status: 'Pending',
    },
    {
      id: 5,
      fullName: 'Sarah Williams',
      assignmentTitle: 'Assignment 2: Advanced Concepts',
      dueDate: '12/20/2024',
      status: 'Pending',
    },
    {
      id: 6,
      fullName: 'Robert Lee',
      assignmentTitle: 'Assignment 4: Advanced Topics',
      dueDate: '12/22/2024',
      status: 'Pending',
    },
    // Overdue
    {
      id: 7,
      fullName: 'Emily Davis',
      assignmentTitle: 'Assignment 1: Introduction',
      dueDate: '12/05/2024',
      status: 'Overdue',
    },
    {
      id: 8,
      fullName: 'David Martinez',
      assignmentTitle: 'Assignment 3: Final Project',
      dueDate: '12/08/2024',
      status: 'Overdue',
    },
    // Graded
    {
      id: 9,
      fullName: 'Jennifer Taylor',
      assignmentTitle: 'Assignment 1: Introduction',
      dueDate: '11/28/2024',
      status: 'Graded',
    },
    {
      id: 10,
      fullName: 'Chris Anderson',
      assignmentTitle: 'Assignment 2: Advanced Concepts',
      dueDate: '12/01/2024',
      status: 'Graded',
    },
  ];

  const filteredAssignments = assignments.filter(
    item => item.status.toLowerCase() === selectedTab.toLowerCase()
  );

  const handleSelectRow = (assignmentId) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(assignmentId)) {
      newSelected.delete(assignmentId);
    } else {
      newSelected.add(assignmentId);
    }
    setSelectedRows(newSelected);
  };

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setDetailsDialogOpen(true);
  };

  const handleGradeSubmission = () => {
    navigate('/grade-submission');
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white py-4 shadow-md w-full sticky top-0 z-10'>
        <div className='flex gap-3 items-center px-6'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l border-[#71717A] px-3 text-[#71717A]'>
            Course Management
          </h2>
          <IoIosArrowForward className='text-[#71717A]' />
          <h2 className='px-2 font-bold text-[#373737]'>Grade Assignments</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6 bg-white min-h-screen'>
        <h1 className='text-2xl font-bold text-[#373737] mb-6'>
          Grade Assignments
        </h1>

        {/* Course Selection and Tabs */}
        <div className='mb-6 flex flex-col sm:flex-row gap-4'>
          <div className='w-full sm:w-[300px]'>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="course-1">Introduction to Web Development</SelectItem>
                <SelectItem value="course-2">Advanced JavaScript</SelectItem>
                <SelectItem value="course-3">React Mastery</SelectItem>
                <SelectItem value="course-4">Node.js Fundamentals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs */}
          <div className='flex'>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  selectedTab === tab
                    ? 'bg-black text-white'
                    : 'bg-input-light text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Section */}
        <div className='bg-white rounded-lg overflow-hidden'>
          <Table.Root variant='surface' className='[&_td]:py-4 [&_th]:py-4'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className='font-normal'>
                  <input
                    type='checkbox'
                    className='rounded'
                  />
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  S/N
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Full Name
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Assignment Title
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Due Date
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Status
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Action
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filteredAssignments.map((item, index) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <input
                      type='checkbox'
                      checked={selectedRows.has(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                      className='rounded'
                    />
                  </Table.Cell>
                  <Table.RowHeaderCell>
                    {index + 1}
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-600'>
                        {item.fullName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span>{item.fullName}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{item.assignmentTitle}</Table.Cell>
                  <Table.Cell>{item.dueDate}</Table.Cell>
                  <Table.Cell>
                    {item.status === 'Submitted' ? (
                      <div className='bg-[#009B4D1A] w-[100px] p-1 rounded-3xl'>
                        <p className='text-center text-[#01857C] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    ) : item.status === 'Pending' ? (
                      <div className='bg-[#EB57571A] w-[100px] p-1 rounded-3xl'>
                        <p className='text-center text-[#EB5757] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    ) : item.status === 'Overdue' ? (
                      <div className='bg-[#EB57571A] w-[100px] p-1 rounded-3xl'>
                        <p className='text-center text-[#EB5757] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    ) : (
                      <div className='flex items-center justify-center gap-1 w-[100px] p-1 rounded-3xl'>
                        <CheckCircle2 size={16} className='text-[#2F80ED]' />
                        <p className='text-center text-[#2F80ED] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <div className='relative'>
                      <button 
                        onClick={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                        className='text-gray-500 hover:text-gray-700'
                      >
                        <MoreVertical size={20} />
                      </button>
                      {openMenuId === item.id && (
                        <div className='absolute right-0 top-6 bg-white shadow-lg rounded-md p-1 z-10 min-w-[200px] border border-gray-200'>
                          <button
                            onClick={() => {
                              handleViewDetails(item);
                              setOpenMenuId(null);
                            }}
                            className='w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2'
                          >
                            <Eye size={16} />
                            View Submission
                          </button>
                          <button
                            onClick={() => {
                              handleGradeSubmission();
                              setOpenMenuId(null);
                            }}
                            className='w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center gap-2'
                          >
                            <FileText size={16} />
                            Grade Submission
                          </button>
                        </div>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>

        {/* Pagination Section */}
        <div className='mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg'>
          <h4 className='text-[#373737] font-medium'>
            {selectedRows.size} of {filteredAssignments.length} row(s) selected.
          </h4>
          <div className='flex gap-3 items-center'>
            <span className='text-sm text-[#373737]'>
              Page 1 of 1
            </span>
          </div>
        </div>
      </div>

      {/* Assignment Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          
          <div className="space-y-4">
            {/* Header Info */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">Module 1: Introduction</h2>
              <div className="space-y-2">
                <p className="text-paragraph-sm" style={{ color: '#828282' }}>Due date: 2023-09-15</p>
                <div className="flex items-center  justify-between  gap-4 w-full md:w-1/2">
                  <p className="text-sm" ><b>Attempt:</b> 01</p>
                  <p className="text-sm"><b>Task Point:</b> <span style={{ color: '#FFA828' }}>100pts</span></p>
                </div>
              </div>
            </div>

            {/* Divider with more space */}
            <div className="border-t border-gray-200 pt-6"></div>

            {/* Assignment Description */}
            <div className="space-y-3">
              <p className=" text-heading-sm md:text-heading-md font-bold text-primary">Introduction to Figma and Adobe XD</p>
              
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">Instruction</h3>
                <p className="text-paragraph-md text-secondary" style={{ color: '#828282' }}>
                  Attempt all questions in this session in the file, download and submit before the due date
                </p>
              </div>

              {/* Task 2 */}
              <div className="space-y-2 mt-4">
                <div className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded-md">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91602 8.33268C2.91602 5.18999 2.91602 3.61864 3.95335 2.64233C4.99068 1.66602 6.66023 1.66602 9.99935 1.66602H10.6433C13.361 1.66602 14.7198 1.66602 15.6635 2.33088C15.9338 2.52137 16.1739 2.74729 16.3763 3.00176C17.0827 3.88991 17.0827 5.16881 17.0827 7.72662V9.84783C17.0827 12.3171 17.0827 13.5518 16.6919 14.5379C16.0637 16.1232 14.7351 17.3736 13.0507 17.9649C12.003 18.3327 10.6912 18.3327 8.06753 18.3327C6.56831 18.3327 5.8187 18.3327 5.22 18.1225C4.25751 17.7846 3.49831 17.0701 3.13932 16.1642C2.91602 15.6007 2.91602 14.8952 2.91602 13.4842V8.33268Z" stroke="#2F80ED" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M17.0833 10C17.0833 11.5341 15.8397 12.7778 14.3056 12.7778C13.7507 12.7778 13.0966 12.6806 12.5572 12.8251C12.0779 12.9535 11.7035 13.3279 11.5751 13.8072C11.4306 14.3466 11.5278 15.0007 11.5278 15.5556C11.5278 17.0897 10.2841 18.3333 8.75 18.3333" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66602 5.83398H12.4993" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66602 9.16602H9.16602" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-sm text-primary">Task 2 (Quiz on basic practice of figma)</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-4"></div>

            {/* Submission/Attachment */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-primary">SUBMISSION/ATTACHMENT</h3>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9.707 0L13 3.293V13.5C13 13.8978 12.842 14.2794 12.5607 14.5607C12.2794 14.842 11.8978 15 11.5 15H1.5C1.10218 15 0.720644 14.842 0.43934 14.5607C0.158035 14.2794 0 13.8978 0 13.5V1.5ZM2.5 6H1V11H2V9H2.5C2.89782 9 3.27936 8.84196 3.56066 8.56066C3.84196 8.27936 4 7.89782 4 7.5C4 7.10218 3.84196 6.72064 3.56066 6.43934C3.27936 6.15804 2.89782 6 2.5 6ZM6.5 6H5V11H6.5C6.89782 11 7.27936 10.842 7.56066 10.5607C7.84196 10.2794 8 9.89782 8 9.5V7.5C8 7.10218 7.84196 6.72064 7.56066 6.43934C7.27936 6.15804 6.89782 6 6.5 6ZM9 11V6H12V7H10V8H11V9H10V11H9Z" fill="#FF3D00"/>
                </svg>
                <span className="text-sm" style={{ color: '#4F4F4F' }}>attached_file.pdf</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9.707 0L13 3.293V13.5C13 13.8978 12.842 14.2794 12.5607 14.5607C12.2794 14.842 11.8978 15 11.5 15H1.5C1.10218 15 0.720644 14.842 0.43934 14.5607C0.158035 14.2794 0 13.8978 0 13.5V1.5ZM2.5 6H1V11H2V9H2.5C2.89782 9 3.27936 8.84196 3.56066 8.56066C3.84196 8.27936 4 7.89782 4 7.5C4 7.10218 3.84196 6.72064 3.56066 6.43934C3.27936 6.15804 2.89782 6 2.5 6ZM6.5 6H5V11H6.5C6.89782 11 7.27936 10.842 7.56066 10.5607C7.84196 10.2794 8 9.89782 8 9.5V7.5C8 7.10218 7.84196 6.72064 7.56066 6.43934C7.27936 6.15804 6.89782 6 6.5 6ZM9 11V6H12V7H10V8H11V9H10V11H9Z" fill="#FF3D00"/>
                </svg>
                <span className="text-sm" style={{ color: '#4F4F4F' }}>attached_file.pdf</span>
              </div>
            </div>

            {/* Grade Assignment Button */}
            <div className="flex justify-end pt-6">
              <Button 
                onClick={handleGradeSubmission}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Grade Assignment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GradeAssignment;
