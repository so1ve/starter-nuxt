// @ts-expect-error Deno
import { serve } from "https://deno.land/std@0.170.0/http/server.ts";
// @ts-expect-error Deno
import { serveDir } from "https://deno.land/std@0.170.0/http/file_server.ts";

serve((req) => {
  const reqURL = new URL(req.url);
  const path = reqURL.pathname;
  const search = reqURL.search;
  // Redirect /.well-known/webfinger to mas.mk1.io
  if (path === "/.well-known/webfinger") {
    const dest = `https://mas.mk1.io${path}${search}`;
    return new Response(null, {
      status: 301,
      headers: {
        "Location": dest,
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  return serveDir(req, {
    fsRoot: "./.output/public",
  });
});
