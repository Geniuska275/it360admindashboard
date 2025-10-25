import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

function AddModuleDialog({ isOpen, onClose, onSave }) {
  const [moduleData, setModuleData] = React.useState({
    title: ''
  });

  const handleInputChange = (field, value) => {
    setModuleData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    if (moduleData.title.trim()) {
      onSave(moduleData);
      // Reset form
      setModuleData({
        title: ''
      });
      onClose();
    }
  };

  const handleCancel = () => {
    // Reset form
    setModuleData({
      title: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Module</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 space-y-6">
          {/* Module Title */}
          <div>
            <label className="text-heading-xs mb-3 block">
              Module Title *
            </label>
            <Input
              value={moduleData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              placeholder="Enter module title"
              className="w-full"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSave} disabled={!moduleData.title.trim()}>
            Add Module
          </Button>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddModuleDialog;
