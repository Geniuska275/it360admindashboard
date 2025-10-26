import React from 'react';
import { Table } from '@radix-ui/themes';
import { Button } from '../components/ui/button';
import DeleteLessonDialog from '../components/Course/modules/DeleteLessonDialog';

function Resources() {
  const [files, setFiles] = React.useState([
    { id: 1, name: 'Syllabus.pdf', type: 'PDF', uploadDate: '2024-02-10' },
    { id: 2, name: 'Lecture_1_Slides.pptx', type: 'PPTX', uploadDate: '2024-02-12' },
    { id: 3, name: 'Reading_List.docx', type: 'DOCX', uploadDate: '2024-02-15' },
  ]);

  // Links state
  const [links, setLinks] = React.useState([
    { id: 101, url: 'https://developer.mozilla.org', uploadDate: '2024-02-18' },
  ]);

  const handleAddLink = () => {
    const urlInput = window.prompt('Paste URL (https://...)');
    if (!urlInput) return;
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    const entry = {
      id: Date.now(),
      url: trimmed,
      uploadDate: formattedDate,
    };
    setLinks((prev) => [entry, ...prev]);
  };

  const handleViewLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDeleteLink = (id) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  // Video resources state
  const [videos, setVideos] = React.useState([
    // { id, thumbnailUrl, title, description }
  ]);
  const videoFileRef = React.useRef(null);
  const [embedUrl, setEmbedUrl] = React.useState('');

  const handleUploadVideoClick = () => {
    if (videoFileRef.current) videoFileRef.current.click();
  };

  const handleVideoSelected = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length === 0) return;
    const newEntries = selectedFiles.map((file, index) => ({
      id: Date.now() + index,
      thumbnailUrl: '',
      title: file.name,
      description: 'Uploaded video',
      fileObj: file,
    }));
    setVideos((prev) => [...newEntries, ...prev]);
    event.target.value = '';
  };

  const handleEmbedVideo = () => {
    const url = embedUrl.trim();
    if (!url) return;
    setVideos((prev) => [{ id: Date.now(), thumbnailUrl: '', title: 'Embedded video', description: url, url }, ...prev]);
    setEmbedUrl('');
  };

  const handleRemoveVideo = (id) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  const fileInputRef = React.useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFilesSelected = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (selectedFiles.length === 0) return;

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const newEntries = selectedFiles.map((file, index) => {
      const name = file.name;
      const ext = (name.split('.').pop() || '').toUpperCase();
      return {
        id: Date.now() + index,
        name,
        type: ext || 'FILE',
        uploadDate: formattedDate,
        fileObj: file,
      };
    });

    setFiles((prev) => [...newEntries, ...prev]);
    // reset the input so same file can be selected again
    event.target.value = '';
  };

  const handleDownload = (file) => {
    if (!(file.fileObj instanceof File)) return;
    const url = URL.createObjectURL(file.fileObj);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleConfirmDelete = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className='container-main'>
      <div>
        <h1 className='text-heading-xl mt-2'>Files</h1>
        <Button className='my-2' onClick={handleUploadClick}>Upload File</Button>
        <input
          ref={fileInputRef}
          type="file"
          className='hidden'
          multiple
          onChange={handleFilesSelected}
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.rar,.png,.jpg,.jpeg,.gif,.svg,.mp4,.mov,.avi,.mkv"
        />
      </div>

      <div className='mt-6 relative'>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell className="font-normal">File Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Type</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Upload Date</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="font-normal">Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {files.map((file) => (
              <Table.Row key={file.id}>
                <Table.Cell>
                  <span className='text-paragraph-md'>{file.name}</span>
                </Table.Cell>
                <Table.Cell>
                  <span className='text-paragraph-md'>{file.type}</span>
                </Table.Cell>
                <Table.Cell>
                  <span className='text-paragraph-md'>{file.uploadDate}</span>
                </Table.Cell>
                <Table.Cell>
                  <div className='flex gap-2'>
                    <Button 
                      variant='outline' 
                      size='sm'
                      onClick={() => handleDownload(file)}
                      disabled={!file.fileObj}
                    >
                      Download
                    </Button>
                    <DeleteLessonDialog 
                      onConfirm={() => handleConfirmDelete(file.id)}
                      lessonTitle={file.name}
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

      {/* Links Section */}
      <div className='mt-10'>
        <h2 className='text-heading-xl mt-2'>Links</h2>
        <div className='flex gap-2 my-2'>
          <Button onClick={handleAddLink}>Add Link</Button>
        </div>

        <div className='mt-4 relative'>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className="font-normal">URL</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="font-normal">Upload Date</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="font-normal">Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {links.map((link) => (
                <Table.Row key={link.id}>
                  <Table.Cell>
                    <span className='text-paragraph-md break-all'>{link.url}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className='text-paragraph-md'>{link.uploadDate}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <div className='flex gap-2'>
                      <Button variant='outline' size='sm' onClick={() => handleViewLink(link.url)}>View</Button>
                      <DeleteLessonDialog onConfirm={() => handleDeleteLink(link.id)} lessonTitle={link.url}>
                        <Button variant='destructive' size='sm'>Delete</Button>
                      </DeleteLessonDialog>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      </div>

      {/* Video Section */}
      <div className='mt-10'>
        <h2 className='text-heading-xl mt-2'>Video</h2>
        <div className='flex gap-2 my-2'>
          <Button onClick={handleUploadVideoClick}>Upload Video</Button>
          <Button variant='outline' onClick={handleEmbedVideo}>Embed Video</Button>
          <input
            ref={videoFileRef}
            type='file'
            accept='video/*'
            className='hidden'
            multiple
            onChange={handleVideoSelected}
          />
        </div>
        <div className='my-2'>
          <input
            type='url'
            className='border rounded px-3 py-2 w-full'
            placeholder='Paste video URL (YouTube, Vimeo, etc.)'
            value={embedUrl}
            onChange={(e) => setEmbedUrl(e.target.value)}
          />
        </div>

        <div className='mt-4 relative'>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className="font-normal">Thumbnail</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="font-normal">Title</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="font-normal">Description</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className="font-normal">Action</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {videos.map((v) => (
                <Table.Row key={v.id}>
                  <Table.Cell>
                    <div className='w-16 h-10 bg-gray-200 rounded overflow-hidden' />
                  </Table.Cell>
                  <Table.Cell>
                    <span className='text-paragraph-md'>{v.title}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className='text-paragraph-md break-all'>{v.description}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <Button variant='destructive' size='sm' onClick={() => handleRemoveVideo(v.id)}>Remove</Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
}

export default Resources;


