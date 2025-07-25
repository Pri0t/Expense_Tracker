import React, { useRef, useState } from 'react';
import { User, Upload, Trash } from 'lucide-react'; // ✅ Correct import

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      {!image ? (
        <div className="w-24 h-24 bg-purple-100 rounded-full relative flex items-center justify-center shadow-md">
          <User className="text-4xl text-purple-600" />

          <button
            type="button"
            onClick={onChooseFile}
            className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow"
            title="Upload profile photo"
          >
            <Upload className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <div className="relative w-24 h-24">
          <img
            src={previewUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -bottom-1 -right-1 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow"
            title="Remove profile photo"
          >
            <Trash className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
