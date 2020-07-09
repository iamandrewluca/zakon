import { createProxy } from "http-proxy";

export const config = {
  api: {
    externalResolver: true,
  },
};

const proxy = createProxy({
  changeOrigin: true,
  ignorePath: true,
});

export default (req, res) => {
  const legisPath = req.url.replace("/api/legis/", "");
  proxy.web(req, res, {
    target: `https://www.legis.md/${legisPath}`,
  });
};
