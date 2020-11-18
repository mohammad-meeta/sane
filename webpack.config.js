"use strict";

const entries = {
    scripts: {
        "scripts/app": "./src/frontend/scripts/app.ts",
        "scripts/app/pages/auth/login":
            "./src/frontend/scripts/pages/auth/login.ts",
    },
    styles: {
        "styles/app": "./src/frontend/styles/app.scss",
    },
    files: {},
    directories: {},
};

/* Export */
module.exports = (env = {}) => {
    if (env.PRODUCTION) {
        return require("./webpack/webpack.prod")(env, entries);
    } else {
        return require("./webpack/webpack.dev")(env, entries);
    }
};
