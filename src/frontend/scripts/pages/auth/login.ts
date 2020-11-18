import { createApp } from "vue";
import Base from "@FE/Scripts/base";
import Login from "@FE/Components/auth/login.vue";
import app from "@FE/Scripts/app";

/**
 * Login class
 */

export class App extends Base {
    /**
     * Ctr
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * Init
     */
    private init() {
        const login = createApp(Login);
        login.mount("#app");

        console.log("Init of login.ts");
    }
}

export default new App();
