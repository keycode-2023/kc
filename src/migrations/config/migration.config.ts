import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();
const configService = new ConfigService();
const entities = [
  __dirname + '/../**/entity/*.ts',
  __dirname + '/../**/entity/*.js',
  __dirname + '/../**/*.entity.ts',
  __dirname + '/../**/*.entity.js',
];
const rdbmsConfig = new DataSource({
  entities,
  database: configService.get('POSTGRES_DB'),
  extra: { max: 5, min: 2 }, // connection pool
  host: configService.get('POSTGRES_HOST'),
  password: configService.get('POSTGRES_PASSWORD'),
  port: Number(configService.get('POSTGRES_PORT')),
  synchronize: false,
  logging: false,
  type: 'postgres',
  username: configService.get('POSTGRES_USER'),
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['dist/migrations/scripts/*.js'],
});

rdbmsConfig.initialize();

export default rdbmsConfig;
