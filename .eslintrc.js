module.exports = {
    root: false,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "@vue/prettier"],
    rules: {
        // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        // 'no-unused-vars': process.env.NODE_ENV === "production" ? "warn" : "off",
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};