import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import formatGraphqlError from 'src/common/exception/exception.formatter';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      useGlobalPrefix: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/schema/graphql.schema.ts'),
      },
      formatError: formatGraphqlError,
      context: ({ req }: { req: any }) => ({ req }),
    }),
  ],
})
export class AppGraphQLModule {}
