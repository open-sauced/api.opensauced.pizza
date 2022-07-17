import { registerAs } from "@nestjs/config";

export default registerAs("api", () => ({
  host: String(process.env.HOST || "0.0.0.0"),
  port: parseInt(process.env.PORT, 10) || 3000,
  memory_heap: Number(parseInt(process.env.MEMORY_HEAP || "200", 10) * 1024 * 1024),
  memory_rss: Number(parseInt(process.env.MEMORY_RSS || "3000", 10) * 1024 * 1024),
  disk_percentage: Number(parseFloat(process.env.DISK_PERCENGATE || "0.7")),
  disk_size: Number(parseInt(process.env.DISK_SIZE || "100", 10) * 1024 * 1024 * 1024),
}));
