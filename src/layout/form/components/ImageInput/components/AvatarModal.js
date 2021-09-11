import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Modal } from "bootstrap";

export default function AvatarModal({ defaultAvatar, avatar, handleChange }) {
  const [src, setSrc] = useState(avatar);
  const [preview, setPreview] = useState(avatar || defaultAvatar);
  const [hasDefault, setHasDefault] = useState(true);

  const onClose = () => {
    setPreview(defaultAvatar);
    setHasDefault(!hasDefault);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      setHasDefault(!hasDefault);
    }
  };

  const handleClickSetAvatar = () => {
    handleChange("avatar", preview);
    Modal.getOrCreateInstance(
      document.getElementById("avatar-edit-modal")
    ).hide();
  };

  return (
    <div id="avatar-edit-modal" className="modal fade">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Select your avatar
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body row">
            <div className="col-12 col-lg-6">
              <Avatar
                label="Choose your avatar"
                width={300}
                height={200}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={src}
              />
            </div>
            <div className="col-12 col-lg-6">
              <div id="avatar-preview" className="mt-3 mt-lg-0">
                <img
                  src={preview}
                  alt="Preview"
                  className={hasDefault ? "default-image" : ""}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClickSetAvatar}
            >
              Ok!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
