module.exports = {
  '$schema': './node_modules/ng-packagr/package.schema.json',
  dest: 'build',
  lib: {
    entryFile: 'src/index.ts',
    flatModuleFile: 'ngApollo'
  },
  allowedNonPeerDependencies: ['semver', 'extract-files'],
};
