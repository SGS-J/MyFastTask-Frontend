export default function EmailInput({
  inputValue,
  handleChange,
  title,
  emailInUse,
}) {
  const toolTipInvalidValue = "Please type a valid Email address";
  const toolTipEmailInUse = "Email already in use";
  return (
    <div className="mb-3 position-relative">
      <label className="form-label">{title}</label>
      <input
        name="email"
        type="email"
        className={`form-control ${emailInUse ? "is-invalid" : ""}`}
        value={inputValue}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        required
        aria-describedby="invalid-feedback-email"
      />
      <div id="invalid-feedback-email" className="invalid-tooltip">
        {emailInUse ? toolTipEmailInUse : toolTipInvalidValue}
      </div>
    </div>
  );
}
