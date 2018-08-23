module.exports = {
    rules: {
        'no-console': 0,
        "prefer-destructuring": ["error", {
            "array": false,
            "object": false
        }, {
            "enforceForRenamedProperties": false
        }]
    },
    "extends": "airbnb-base"
};