import AuthController from "@BE/Controllers/auth-controller";
import BaseRouter from "@Core/Helpers/base-router-helper";

/**
 * Home router
 */
export default class HomeRoute extends BaseRouter {
    private authController: AuthController = new AuthController();

    /**
     * Constructor
     */
    constructor() {
        super("/auth", "AuthRoute");
        this.defineRoutes();
    }

    /**
     * Define routes
     */
    private defineRoutes(): void {
        super.get("/login", [this.authController.login], "auth.login");
    }
}
