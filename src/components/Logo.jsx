import React, { useRef, useState } from "react";
import FormButtons from "./FormButtons";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Logo({ onNext, steps, onBack, setData }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [error, setError] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setError("");
      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onload = () => {
        setFilePreview(reader.result);
      };
      reader.onerror = () => {
        setError("Error reading the file.");
      };
    }
  };

  const handleSubmit = () => {
    if (!file) {
      setError("Please upload an image.");
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setData({ logo: reader.result });
        onNext();
      };
      reader.onerror = () => {
        setError("Error reading the file.");
      };
    }
  };

  return (
    <>
      <div className="flex align-center justify-center py-9 w-full border">
        {filePreview ? (
          <img
            src={filePreview}
            alt="Preview"
            className="w-1/4 h-1/4 object-cover border cursor-pointer rounded-md"
            onClick={handleClick}
          />
        ) : (
          <section
            className="flex flex-col align-center justify-center cursor-pointer"
            onClick={handleClick}
          >
            <IoCloudUploadOutline className="text-9xl md:text-4xl lg:text-9xl" />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </section>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <FormButtons onClick={handleSubmit} steps={steps} />
    </>
  );
}
