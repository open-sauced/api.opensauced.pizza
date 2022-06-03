import { registerAs } from '@nestjs/config';

export default registerAs('api', () => ({
  host: String(process.env.HOST || '0.0.0.0'),
  port: parseInt(process.env.PORT, 10) || 3000,
}));
