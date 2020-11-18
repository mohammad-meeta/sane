import { Request, Response, NextFunction } from "express";

/**
 * Auth controller
 */
export default class AuthController {
    /**
     * Home/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async login(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        res.render("pages/auth/login.pug", {
            message: "Your are not loged in",
        });
    }
}
