import Reveal from "./reveal/dist/reveal.esm.js";
import Markdown from "./reveal/plugin/markdown/markdown.esm.js";
import Highlight from "./reveal/plugin/highlight/highlight.esm.js";

window.addEventListener("load", () => {
    Reveal.initialize({
        plugins: [Markdown, Highlight],
    });
});
