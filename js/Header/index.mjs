import html from "../render.mjs";

export const Header = () => {
  return html`
    <nav class="h-100 header">
      <div
        class="container-fluid d-flex gap-3 text-bg-dark p-3 header-container"
      >
        <img src="../../static/react.svg" class="header-logo" alt="Logo" />
        <h1 class="header-title">Agify</h1>
      </div>
    </nav>
  `;
};
