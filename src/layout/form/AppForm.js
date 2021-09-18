import UserNameInput from "./components/UserNameInput";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import GenderInput from "./components/GenderInput";
import BirthdayInput from "./components/BirthdayInput";
import ColorInput from "./components/ColorInput";
import ImageInput from "./components/ImageInput/ImageInput";

const AppForm = {
  disableInvalidFormDefault: function () {
    const forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  UserNameInput: function ({ inputValue, handleChange, title }) {
    return (
      <UserNameInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
  EmailInput: function ({ inputValue, handleChange, title }) {
    return (
      <EmailInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
  PasswordInput: function ({
    inputValue,
    handleChange,
    type,
    title,
    targetConfirm,
  }) {
    return (
      <PasswordInput
        inputValue={inputValue}
        handleChange={handleChange}
        type={type}
        title={title}
        targetConfirm={targetConfirm}
      />
    );
  },
  GenderInput: function ({ inputValue, handleChange, title }) {
    return (
      <GenderInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
  BirthdayInput: function ({ inputValue, handleChange, title }) {
    return (
      <BirthdayInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
  ColorInput: function ({ inputValue, handleChange, title }) {
    return (
      <ColorInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
  ImageInput: function ({ inputValue, handleChange, title }) {
    return (
      <ImageInput
        inputValue={inputValue}
        handleChange={handleChange}
        title={title}
      />
    );
  },
};

export default AppForm;
