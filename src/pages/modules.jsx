import React from 'react';
import lg from './strategy.png';
import { Table } from '@radix-ui/themes';
import ActionBar from '../components/ActionBar';
import { Button } from '../components/ui/button';
import DeleteLessonDialog from '../components/Course/modules/DeleteLessonDialog';
import EditLessonPage from '../components/Course/modules/EditLessonPage';
import EditQuizPage from '../components/Course/modules/EditQuizPage';
import EditAssignmentPage from '../components/Course/modules/EditAssignmentPage';

function Modules({ searchParams, setSearchParams }) {
  const [editingLesson, setEditingLesson] = React.useState(null);
  
  React.useEffect(() => {
    const editLessonId = searchParams.get('editLesson');
    if (editLessonId) {
      // Find the lesson by ID and set it for editing
      const lesson = students.find(s => s.id.toString() === editLessonId);
      if (lesson) {
        setEditingLesson(lesson);
      }
    }
  }, [searchParams]);
  
  const students = [
    {
      id: 1,
      title: 'Introduction to Asynchronous Programming',
      type: 'Video',
      duration: '15min',
      status: 'published',
    },
    {
      id: 2,
      title: 'Understanding Promises and Async/Await',
      type: 'Video',
      duration: '20min',
      status: 'published',
    },
    {
      id: 3,
      title: 'Quiz: Async Programming Fundamentals',
      type: 'Quiz',
      duration: '10min',
      status: 'published',
      questions: [
        {
          question: 'What is the main purpose of async/await in JavaScript?',
          type: 'multiple-choice',
          options: [
            'To make code run faster',
            'To handle asynchronous operations more elegantly',
            'To create multiple threads',
            'To prevent memory leaks'
          ],
          correctAnswer: 1,
          explanation: 'Async/await provides a cleaner way to handle asynchronous operations compared to callbacks and promises.'
        },
        {
          question: 'A Promise in JavaScript can only resolve or reject, never both.',
          type: 'true-false',
          options: ['True', 'False'],
          correctAnswer: 0,
          explanation: 'A Promise can only be in one of three states: pending, fulfilled (resolved), or rejected.'
        }
      ]
    },
    {
      id: 4,
      title: 'Error Handling in Async Code',
      type: 'Video',
      duration: '12min',
      status: 'Draft',
    },
    {
      id: 5,
      title: 'Assignment: Build an Async API Client',
      type: 'Assignment',
      duration: '2 hours',
      status: 'published',
    },
  ];

  const handleDeleteLesson = (lessonId, lessonTitle) => {
    console.log(`Deleting lesson ${lessonId}: ${lessonTitle}`);
    // Add delete logic here
  };

  const handleEditLesson = (lesson) => {
    setEditingLesson(lesson);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.set('editLesson', lesson.id.toString());
      return newParams;
    });
  };

  const handleCancelEdit = () => {
    setEditingLesson(null);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('editLesson');
      return newParams;
    });
  };

  const handleSaveLesson = (updatedData) => {
    console.log('Saving lesson:', updatedData);
    // Add your save logic here
    setEditingLesson(null);
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      newParams.delete('editLesson');
      return newParams;
    });
  };

  // Show edit page if editing
  if (editingLesson) {
    // Render different edit components based on lesson type
    if (editingLesson.type === 'Quiz') {
      return (
        <EditQuizPage
          lesson={editingLesson}
          onCancel={handleCancelEdit}
          onSave={handleSaveLesson}
        />
      );
    } else if (editingLesson.type === 'Assignment') {
      return (
        <EditAssignmentPage
          lesson={editingLesson}
          onCancel={handleCancelEdit}
          onSave={handleSaveLesson}
        />
      );
    } else {
      // Default to EditLessonPage for Video, Reading, and other types
      return (
        <EditLessonPage
          lesson={editingLesson}
          onCancel={handleCancelEdit}
          onSave={handleSaveLesson}
        />
      );
    }
  }

  return (
    <div className='container-main'>
      <div>
        <h1 className='text-heading-xl mt-2'>
          Module 1: Asynchronous Programming
        </h1>
        <p className='text-paragraph-md mb-3'>
          manage the lessons within this module. and new lessons or edit
          existing ones to enhance the learning experience
        </p>
        <Button className='my-2'>
          Add Lesson
        </Button>
      </div>

      <div className='mt-6 relative'>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="font-normal">Lesson Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Lesson Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Duration</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <span className='text-paragraph-md'>
                    Lesson {index + 1}: {item.title}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <span className='text-paragraph-md'>{item.type}</span>
                </Table.Cell>

                <Table.Cell>
                  <span className='text-paragraph-md'>{item.duration}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className='bg-light-gray w-[100px] p-1 rounded'>
                    <p className='text-center text-paragraph-sm capitalize'>{item.status}</p>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className='flex gap-2'>
                    <Button 
                      variant='outline' 
                      size='sm'
                      onClick={() => handleEditLesson(item)}
                    >
                      Edit
                    </Button>
                    <DeleteLessonDialog 
                      onConfirm={() => handleDeleteLesson(item.id, item.title)}
                      lessonTitle={item.title}
                    >
                      <Button variant='destructive' size='sm'>
                        Delete
                      </Button>
                    </DeleteLessonDialog>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>

      <div className='my-2'>
        <h1 className='text-heading-xl mt-2'>
          Module 2: Asynchronous Programming
        </h1>
        <p className='text-paragraph-md mb-3'>
          manage the lessons within this module. and new lessons or edit
          existing ones to enhance the learning experience
        </p>
        <Button>
          Add Lesson
        </Button>
      </div>

      <div className='mt-6 relative'>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="font-normal">Lesson Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Lesson Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Duration</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((item, index) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <span className='text-paragraph-md'>
                    Lesson {index + 1}: {item.title}
                  </span>
                </Table.Cell>

                <Table.Cell>
                  <span className='text-paragraph-md'>{item.type}</span>
                </Table.Cell>

                <Table.Cell>
                  <span className='text-paragraph-md'>{item.duration}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className='bg-light-gray w-[100px] p-1 rounded'>
                    <p className='text-center text-paragraph-sm capitalize'>{item.status}</p>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className='flex gap-2'>
                    <Button 
                      variant='outline' 
                      size='sm'
                      onClick={() => handleEditLesson(item)}
                    >
                      Edit
                    </Button>
                    <DeleteLessonDialog 
                      onConfirm={() => handleDeleteLesson(item.id, item.title)}
                      lessonTitle={item.title}
                    >
                      <Button variant='destructive' size='sm'>
                        Delete
                      </Button>
                    </DeleteLessonDialog>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}

export default Modules;
