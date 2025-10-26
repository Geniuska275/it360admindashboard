import React from 'react';
import { Dialog, DialogContent} from '../../ui/dialog';
import { Button } from '../../ui/button';
import ProgressBar from '../../ui/progress-bar';

function ViewProgressDialog({ isOpen, onClose, student }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        
        <div className="p-6 space-y-6">
          {/* Student Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-heading-sm font-semibold mb-4">Student Information</h3>
            
            <div className="flex items-start gap-4">
              {/* Student Image */}
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-gray-200 shadow-md">
                <span className="text-2xl font-bold text-white">
                  JD
                </span>
              </div>
              
              {/* Student Details */}
              <div className="flex flex-col gap-3 flex-1">
                <div>              
                  <p className="text-paragraph-md font-semibold">{student?.name || "John Doe"}</p>
                </div>
                <div>
                  <p className="text-paragraph-sm text-gray-500">Student ID: {student?.id || "STU001"}</p>
                </div>
                <div>
                  <p className="text-paragraph-sm text-gray-500">Enrolled: {student?.enrollment || "Jan 15, 2024"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Progress */}
          <div>
            <h3 className="text-heading-sm text-heading-xs mb-3">Overall Course Progress</h3>
            <div className="rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-paragraph-sm font-semibold">Course Completion</span>
                <span className="text-paragraph-sm font-bold text-red-600">{student?.progress || 75}%</span>
              </div>
              <ProgressBar 
                value={student?.progress || 75}
                variant="simple"
                height="h-2"
                fillColor="bg-red-600"
              />
            </div>
          </div>

          {/* Course Breakdown */}
          <div>
            <h3 className="text-heading-sm font-semibold mb-3">Module Progress</h3>
            <div className="space-y-8">
              <div className="rounded-lg">
                <h4 className="text-paragraph-md font-medium mb-2">Module 1: Introduction to Programming</h4>
                <ProgressBar 
                  value={44}
                  height="h-1"
                  fillColor="bg-red-500"
                  label="Completed"
                />
              </div>

              <div className="rounded-lg">
                <h4 className="text-paragraph-md font-medium mb-2">Module 2: Data Structures & Algorithms</h4>
                <ProgressBar 
                  value={75}
                  height="h-1"
                  fillColor="bg-red-500"
                  label="In Progress"
                />
              </div>

              <div className="rounded-lg">
                <h4 className="text-paragraph-md font-medium mb-2">Module 3: Web Development</h4>
                <ProgressBar 
                  value={0}
                  height="h-1"
                  fillColor="bg-red-500"
                  label="Not Started"
                />
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className='pt-4'>
            <h3 className="text-heading-sm font-semibold mb-3">Performance Metrics</h3>
            <div className="space-y-4">

              <div className="flex items-center gap-20 mb-6">
                <div className="flex flex-col border-t border-gray-200 pt-4 w-1/2">
                  <p className="text-paragraph-sm font-medium">Time Spent on Course</p>
                  <p className="text-paragraph-sm font-semibold">43 hours</p>
                </div>
                
                <div className="flex flex-col border-t border-gray-200 pt-4 w-full">
                  <p className="text-paragraph-sm font-medium">Average Quiz Score</p>
                  <p className="text-paragraph-sm font-semibold">88%</p>
                </div>
              </div>
              
              <div className="flex flex-col border-t border-gray-200 pt-4">
                <p className="text-paragraph-sm font-medium">Discussion Participation</p>
                <p className="text-paragraph-sm font-semibold">High</p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-10 justify-start">
              <Button variant="outline" className="w-fit">
                Download Report
              </Button>
              <Button variant="default" className="w-fit ml-4">
                Contact Student
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewProgressDialog;
