import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { birthdayInitialMessage, toolbarItems } from '../../../constants';
import { user } from '../../../store';
import React, { useRef } from 'react';
import { css } from '@emotion/react';

export const BirthCardEditors = ({children}: {children: React.ReactNode}) => {
    return (
        <div
            className={css`
                margin-top: 32px;
            `}> 
            {children}
        </div>
    )
}

export const BirthCardEditor = () => {

    const { setMessage } = user();
    const editorRef = useRef<Editor>(null);

    const messageChange = () => {
        const editorInstance = editorRef.current?.getInstance();
        
        if (editorInstance) {
            const content = editorInstance.getMarkdown();
            setMessage(content);
        }
    }

    return (
        <Editor
            ref={editorRef}
            initialValue={birthdayInitialMessage}
            toolbarItems={toolbarItems}
            onChange={messageChange}>

        </Editor>
    )
}