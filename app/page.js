"use client"
import { useEffect, useState } from "react";
import ReactQuillComponent from "./Components/ReactQuill/reactQuillComponent";
import PreviewComponent from "./Components/Preview/previewComponent";
import { fetchHtml, updateHtml } from "./API/apiHandler";


export default function Home() {
  const [value, setValue] = useState("")
  const [data, setData] = useState("<div></div>")

  useEffect(() => {
    updateHtml(value, setData)
  }, [value])

  useEffect(() => {
    fetchHtml(setData)
  }, [])

  return (
    <>
      <div className="flex h-[90vh]">
        <div className="w-1/2 h-full p-5">
          <ReactQuillComponent state={value} setState={setValue} />
        </div>
        
        <div className="w-1/2 h-full p-5">
          <PreviewComponent data={data} />
        </div>
      </div>
    </>
  );
}
