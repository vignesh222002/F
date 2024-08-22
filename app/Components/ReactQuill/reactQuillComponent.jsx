import ReactQuill from "react-quill"
import toolbarOptions from "./toolbarOptions"
import 'react-quill/dist/quill.snow.css'

export default function ReactQuillComponent({ state, setState }) {
    const module = {
        toolbar: toolbarOptions
    }

    return (
        <>
            <ReactQuill theme="snow" modules={module} value={state} onChange={(e) => setState(e)} className="h-[90%]" />
        </>
    )
}