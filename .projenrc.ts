import { clickupCdk } from '@time-loop/clickup-projen';

const name = 'cdk-cloudfront-bucket';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name,
  author: 'Andrew Hammond',
  authorAddress: '445764+ahammond@users.noreply.github.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@time-loop/clickup-projen'],
  repositoryUrl: 'https://github.com/445764+ahammond/cdk-cloudfront-bucket.git',

  projenrcTs: true,
});
project.synth();
