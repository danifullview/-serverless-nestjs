import type { AWS } from '@serverless/typescript';
import { AWSext } from 'index';

const serverlessConfiguration: AWS | AWSext = {
  service: 'nest-serverless-lambda-demo',
  frameworkVersion: '3',
  plugins: [
    // 'serverless-plugin-optimize',
    'serverless-offline',
    'serverless-plugin-warmup',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: {
    main: {
      handler: `dist/lambda.handler`,
      events: [
        {
          http: {
            method: 'any',
            path: '/{any+}',
          },
        },
      ],
      warmup: {
        default: {
          enabled: ['dev'],
        },
      },
    },
  },
  package: {
    individually: true,
    patterns: ['!src/**', '!test/**', '!e2e/**', '!nodemon.json', '!README.md'],
  },
  custom: {
    warmup: {
      default: {
        enabled: true,
        memorySize: 256,
        prewarm: true,
      },
    },

    // optimize: {
    //   external: ['swagger-ui-dist'],
    // },
    // webpack: {
    //   webpackConfig: './configs/webpack/webpack.config.lambda.js',
    //   includeModules: true,
    //   packager: 'yarn',
    //   minimize: false,
    // },
    // esbuild: {
    //   bundle: true,
    //   minify: true,
    //   sourcemap: true,
    //   exclude: ['aws-sdk'],
    //   target: 'node14',
    //   define: { 'require.resolve': undefined },
    //   platform: 'node',
    //   concurrency: 10,
    // },
  },
};

module.exports = serverlessConfiguration;
