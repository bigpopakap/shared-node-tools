# [@bigpopakap/eslint-config-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-@bigpopakap/eslint-config...v1.0.1-@bigpopakap/eslint-config) (2019-11-17)


### Bug Fixes

* push all package versions to 3 ([37328a9](https://github.com/bigpopakap/shared-node-tools/commit/37328a94edebcfb953953a1af7698ddabff7eb4b))

# @bigpopakap/eslint-config-v1.0.0 (2019-11-17)


### Bug Fixes

* undo all Github Package versions and start over ([4c91ccc](https://github.com/bigpopakap/shared-node-tools/commit/4c91cccdfade1579329743ce4e2cdf6854d2eb51))
* **readme:** update readme ([10bac1c](https://github.com/bigpopakap/shared-node-tools/commit/10bac1c4ef35603f9ee30be0af283e28f61b7749))
* update README with instrutions to authenticate Github Packages ([bcde299](https://github.com/bigpopakap/shared-node-tools/commit/bcde2999bc008daf6f62833ea42a5edf4e76dd88))
* **deps:** update eslint-config-prettier to v6.6.0 ([71c18a2](https://github.com/bigpopakap/shared-node-tools/commit/71c18a2512197910bb4b2f46836da4c9174012e3))
* **deps:** update eslint-plugin-react-hooks to v2.3.0 ([072ccbd](https://github.com/bigpopakap/shared-node-tools/commit/072ccbdd3858ef96ccb4d60be69d6d8c1e5f0771))
* **deps:** update yargs to v15 ([1ab40e9](https://github.com/bigpopakap/shared-node-tools/commit/1ab40e94f2cbe0f2f5446f85be8e3f2d362573b8))
* remove the "base" config export ([a394c04](https://github.com/bigpopakap/shared-node-tools/commit/a394c04c57d170d7335307e8184220c8324dd6b6))


### Features

* enable eslint-plugin-eslint-comments rules ([953a1b8](https://github.com/bigpopakap/shared-node-tools/commit/953a1b8d5a280b4979a248abf62528f50f579fcb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-filenames ([d4e692c](https://github.com/bigpopakap/shared-node-tools/commit/d4e692c07387d3ad8c49e02a4ab83e5d66e518ce)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-node ([526b27d](https://github.com/bigpopakap/shared-node-tools/commit/526b27d92176414a9024b2d715b75c108f1b366f)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable more import rules as errors ([d062740](https://github.com/bigpopakap/shared-node-tools/commit/d06274030b251bddda1696246229d1988f7332cb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* publish to Github Packages ([3863fc0](https://github.com/bigpopakap/shared-node-tools/commit/3863fc02e8d9a1258816975d453a438c1d64f0f1)), closes [#86](https://github.com/bigpopakap/shared-node-tools/issues/86)


### BREAKING CHANGES

* There are many rules enabled from here, which you may need to fix:
https://www.npmjs.com/package/eslint-plugin-node
* You may have to fix the following rules: import/no-self-import and import/no-cycle.
See https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
* You may need to rename your files and default exports. We enforce kebab-cased
filenames, and default exports that match (once converted to kebab case).
See https://www.npmjs.com/package/eslint-plugin-filenames for more info.
* You may have to fix some of the rules related to improper use of eslint-disable
comments, described here: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
* You will no longer be able to import the /base configuration directly. Use one of
the environment-specific flavors instead.
* This package is now being published to Github Packages. You should update your
.eslintrc file with the updated name of the package to extend from (described int he updated README)