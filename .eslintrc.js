module.exports = {
    "extends": "airbnb",
    "rules" : {
        "semi": [2, "never"],
        "no-unexpected-multiline": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
}