import React from "react"

export default function PreviewComponent({ data }) {

    return (
        <>
            <div className="border h-full w-full p-5">
                <h1 className="text-[20px] mb-3 w-full text-center">Preview</h1>
                <div className="border h-[90%] w-full p-5" dangerouslySetInnerHTML={{ __html: data }}></div>
            </div>  
        </>
    )
}