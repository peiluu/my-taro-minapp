module.exports = {
  processors: [],
  plugins: [
    "stylelint-order",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-order": [
      "width",
      "height"
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"]
      }
    ],
    "no-empty-source": null,
    "selector-type-no-unknown": null,
    "no-duplicate-selectors": null,
    "selector-pseudo-class-no-unknown": null,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["include"]
    }],
  }
};
