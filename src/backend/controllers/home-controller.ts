import ISessionDataModel from "@BE/data-model/session-data-model";
import AuthHelper from "@BE/helpers/auth-helper";
import { Request, Response, NextFunction } from "express";

/**
 * Home controller
 */
export default class HomeController {
    /**
     * Home/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async index(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const isChecked = await AuthHelper.check(req);

        if (isChecked) {
            let sessionData: ISessionDataModel = req.session as ISessionDataModel;
            sessionData.viewCount = (sessionData.viewCount ?? 0) + 1;

            res.render("home.pug", { message: "Your are loged in" });
        } else {
            res.render("home.pug", { message: "Your are not loged in" });
        }
    }
}
