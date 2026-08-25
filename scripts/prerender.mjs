import { writeFileSync } from "fs";
import { createRequire } from "module";
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

try {
  const response = await server.fetch(request, {}, { waitUntil: () => {}, passThroughOnException: () => {} });
  const html = await response.text();
  writeFileSync(join(distClient, "index.html"), html, "utf-8");
  console.log("✓ index.html gerado com sucesso");
} catch (err) {
  console.error("Erro ao gerar HTML:", err);
  process.exit(1);
}
