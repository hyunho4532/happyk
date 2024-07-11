import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { birthdayInitialMessage } from '../../../constants';

export const Editors = ({children}: any) => {

    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike']
    ];

    return (
        <Editor
            initialValue={birthdayInitialMessage}
            toolbarItems={toolbarItems}>

        </Editor>
    )
}