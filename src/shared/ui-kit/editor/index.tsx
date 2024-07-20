import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { toolbarItems } from '../../../constants';
import { messages, user } from '../../../store';
import React, { useEffect, useRef } from 'react';
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

    const { setUser } = user();
    const { title } = messages();
    const editorRef = useRef<Editor>(null);

    const messageChange = () => {
        const editorInstance = editorRef.current?.getInstance();
        
        if (editorInstance) {
            const content = editorInstance.getMarkdown();
            setUser("message", content);
        }
    }

    useEffect(() => {
        if (editorRef.current) {
            const editorInstance = editorRef.current?.getInstance();
            editorInstance.setMarkdown(title);
        }
    }, [title]);

    return (
        <Editor
            ref={editorRef}
            onLoad={title}
            toolbarItems={toolbarItems}
            onChange={messageChange}>

        </Editor>
    )
}