import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddUpdate = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [topic, setTopic] = useState('');
    const [login, setLogin] = useState(null);
    const [msg, setMsg] = useState(null);

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        // Check admin authentication
        axios.get('http://localhost:8096/api/protectedRoute')
            .then(res => {
                setLogin(true);
                setMsg(false);
            })
            .catch(err => {
                setLogin(false);
                setMsg(err.message);
            });
    },300);

    const handleSubmit = () => {
        // Get the content from the editor
        const contentState = editorState.getCurrentContent();
        const contentRaw = convertToRaw(contentState);
        // Your API endpoint for saving the content
        const saveEndpoint = 'http://localhost:8096/api/saveUpdate';

        if (topic === '' || !topic) {
            alert("Enter the Topic First...");
        } else {
            axios.post(saveEndpoint, {
                topic: topic,
                content: contentRaw,
                date: currentDate,
                 time: currentTime
            })
                .then(res => {
                    // console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
    const handleLogout = async () => {
        try {
          // Make a request to your logout endpoint
          const res = await axios.get('http://localhost:8096/api/logout');
    
          if (res.data.success) {
            // If the logout was successful, redirect to the login page or perform any other necessary actions
            window.location.href = '/login';
          } else {
            // Handle the case where logout was not successful (maybe show an error message)
            console.error('Logout failed:', res.data.error);
          }
        } catch (error) {
          // Handle any unexpected errors
          console.error('An error occurred during logout:', error);
        }
      };

    return (
        <div className='min-vh-100 bg-white pt-5'>
            {msg && <center className='alert alert-danger'>{msg}, You are not Authorized for this page.</center>}
            {login && (
                <>
                    <div className='w-100 d-flex justify-content-end p-1'>
                        <button className='btn btn-success rounded-0'>Logged in as Admin</button>
                        <button className='btn btn-danger mx-2 rounded-0' onClick={handleLogout}>Logout</button>
                    </div>
                    <div className='container mt-4'>
                        <div className='mb-3'>
                            <label htmlFor='topic' className='form-label'>Topic</label>
                            <input
                                type='text'
                                className='form-control'
                                id='topic'
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor='editor' className='form-label'>Content</label>
                            <Editor
                                editorState={editorState}
                                wrapperClassName='wrapper-class'
                                editorClassName='editor-class'
                                toolbarClassName='toolbar-class'
                                onEditorStateChange={(editorState) => setEditorState(editorState)}
                            />
                        </div>
                        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddUpdate;
