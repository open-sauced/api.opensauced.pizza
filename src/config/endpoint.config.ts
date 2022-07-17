import { registerAs } from "@nestjs/config";
import { URL } from "node:url";

const getDomain = (subdomain?: string) =>
  new URL(`https://${subdomain ? `${subdomain}.` : "" }${process.env.DOMAIN || "opensauced.pizza"}`);

export default registerAs("endpoint", () => ({
  landing: String(getDomain()),
  app: String(getDomain("app")),
  hot: String(getDomain("hot")),
  docs: String(getDomain("docs")),
  explore: String(getDomain("explore")),
  admin: String(getDomain("admin")),
}));
