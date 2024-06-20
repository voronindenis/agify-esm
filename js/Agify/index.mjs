import { useState } from "preact/compat";
import get from "get";
import html from "../render.mjs";

export const Agify = () => {
  const [value, setValue] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.agify.io?name=${value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAge(get(data, "age"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReset = () => {
    setValue("");
    setAge("");
  };

  return html`
    <div class="h-100 d-flex justify-content-center align-items-center agify">
      ${loading
        ? html`
            <div
              class="h-100 w-100 d-flex justify-content-center align-items-center agify-spinner-container"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          `
        : ""}
      <div class="w-50 d-flex flex-column gap-3 agify-content">
        <h2 class="text-center agify-title">
          Estimate your age based on your first name
        </h2>
        <form class="agify-form" onSubmit=${handleSubmit}>
          <div class="input-group mb-3">
            <input
              aria-describedby="button-addon2"
              aria-label="Enter your first name"
              class="form-control"
              onChange=${(e) => setValue(e.target.value)}
              placeholder="Enter your first name"
              type="text"
              value=${value}
            />
            <button
              class="btn btn-outline-secondary"
              disabled=${!value}
              type="submit"
              id="button-addon2"
            >
              <i class="bi bi-search"></i>
            </button>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center gap-3 agify-result"
          >
            <h3 class="agify-result-title">
              Your age is:
              ${age ? age : html`<i class="bi bi-question-circle"></i>`}
            </h3>
            <button
              class="btn btn-secondary"
              disabled=${!age}
              type="button"
              onClick=${handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
};
