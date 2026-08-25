import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distServer = new URL("../dist/server/server.js", import.meta.url).href;
const distClient = join(__dirname, "../dist/client");

const { default: server } = await import(distServer);

const request = new Request("http://localhost/", {
  method: "GET",
  headers: { "accept": "text/html" },
});

const response = await server.fetch(request, {}, { waitUntil: () => {}, passThroughOnException: () => {} });
let html = await response.text();

// Remove React JS bundles (346KB) — page is fully static, no hydration needed
html = html.replace(/<link rel="modulepreload"[^>]*>/g, "");
html = html.replace(/<script\b[^>]*class="\$tsr"[^>]*>[\s\S]*?<\/script>/g, "");
html = html.replace(/<script\b[^>]*type="module"[^>]*><\/script>/g, "");
html = html.replace(/<script\b[^>]*src="[^"]*"[^>]*><\/script>/g, "");

// Fix print button — React onClick doesn't work without JS, inject plain onclick
html = html.replace(
  /(<button\s[^>]*Salvar PDF[^<]*<\/button>)/,
  (match) => match.replace("<button ", '<button onclick="window.print()" ')
);
// Fallback: if button text is inside, target by content
html = html.replace(
  />Salvar PDF</,
  (match) => match // keep as-is, handled above
);

// Add minimal script just for print button (fallback)
html = html.replace(
  "</body>",
  `<script>var b=document.querySelector('button.no-print');if(b)b.onclick=function(){window.print();}</script></body>`
);

writeFileSync(join(distClient, "index.html"), html, "utf-8");

const size = Math.round(html.length / 1024);
console.log(`✓ index.html gerado — ${size}KB (sem JS de framework)`);
