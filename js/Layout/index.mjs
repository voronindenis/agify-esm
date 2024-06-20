import html from "../render.mjs";

export const Layout = (props) => {
  const { Header, Content, Footer } = props;
  return html`
    <section class="vh-100 d-flex flex-column layout">
      <section class="layout-header">
        <${Header} />
      </section>
      <section class="layout-content">
        <${Content} />
      </section>
      <section class="layout-footer">
        <${Footer} />
      </section>
    </section>
  `;
};
