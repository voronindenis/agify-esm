import { render } from "preact";
import html from "./render.mjs";
import { Agify } from "./Agify/index.mjs";
import { Footer } from "./Footer/index.mjs";
import { Header } from "./Header/index.mjs";
import { Layout } from "./Layout/index.mjs";

const App = () => {
  return html`
    <${Layout} Header=${Header} Content=${Agify} Footer=${Footer} />
  `;
};

render(html`<${App} />`, document.body);
