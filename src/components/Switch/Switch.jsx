import "./Switch.css";

export default function Switch() {
  return (
    <>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="switch">
        <div className="powersign"></div>
      </label>
    </>
  );
}
