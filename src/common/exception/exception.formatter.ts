import { GraphQLError, GraphQLFormattedError } from 'graphql';

interface ExceptionResponse {
  response: {
    message: string;
    statusCode: number;
    error: string;
  };
}

interface CustomErrorExtensions {
  exception?: ExceptionResponse;
  status?: number;
}

export default function formatGraphqlError(
  error: GraphQLError & { extensions: CustomErrorExtensions },
): GraphQLFormattedError {
  const graphQLFormattedError: GraphQLFormattedError = {
    message: error.extensions?.exception?.response?.message || error.message,
    path: error.path,
    extensions: {
      statusCode:
        error.extensions?.exception?.response?.statusCode ||
        error.extensions?.status,
      error: error.extensions?.exception?.response?.error,
    },
  };
  return graphQLFormattedError;
}
