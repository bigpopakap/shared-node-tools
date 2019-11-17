# [@bigpopakap/renovate-config-v1.0.1](https://github.com/bigpopakap/shared-node-tools/compare/v1.0.0-@bigpopakap/renovate-config...v1.0.1-@bigpopakap/renovate-config) (2019-11-17)


### Bug Fixes

* push all package versions to 3 ([37328a9](https://github.com/bigpopakap/shared-node-tools/commit/37328a94edebcfb953953a1af7698ddabff7eb4b))
* reset versions for renovate and stylelint config to fix publishing ([9282af4](https://github.com/bigpopakap/shared-node-tools/commit/9282af4b56d0c08b0ca064cede1d82cce9dcfcc8))

# @bigpopakap/renovate-config-v1.0.0 (2019-11-17)


### Bug Fixes

* undo all Github Package versions and start over ([4c91ccc](https://github.com/bigpopakap/shared-node-tools/commit/4c91cccdfade1579329743ce4e2cdf6854d2eb51))
* **readme:** update readme ([10bac1c](https://github.com/bigpopakap/shared-node-tools/commit/10bac1c4ef35603f9ee30be0af283e28f61b7749))
* update README with instrutions to authenticate Github Packages ([bcde299](https://github.com/bigpopakap/shared-node-tools/commit/bcde2999bc008daf6f62833ea42a5edf4e76dd88))


### Features

* enable eslint-plugin-eslint-comments rules ([953a1b8](https://github.com/bigpopakap/shared-node-tools/commit/953a1b8d5a280b4979a248abf62528f50f579fcb)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* enable eslint-plugin-node ([526b27d](https://github.com/bigpopakap/shared-node-tools/commit/526b27d92176414a9024b2d715b75c108f1b366f)), closes [#92](https://github.com/bigpopakap/shared-node-tools/issues/92)
* publish to Github Packages ([1721d84](https://github.com/bigpopakap/shared-node-tools/commit/1721d84d0311daf02f8a1ccb508777e257a166ac)), closes [#86](https://github.com/bigpopakap/shared-node-tools/issues/86)


### BREAKING CHANGES

* There are many rules enabled from here, which you may need to fix:
https://www.npmjs.com/package/eslint-plugin-node
* You may have to fix some of the rules related to improper use of eslint-disable
comments, described here: https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/
* This package is now being published to Github Packages. You should update your
.eslintrc file with the updated name of the package to extend from (described int he updated README)