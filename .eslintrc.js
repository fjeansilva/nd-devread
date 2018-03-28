module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ]
          }],
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "arrow-body-style": ["error", "as-needed"],
    },
};