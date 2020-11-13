import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
const ALLOWED_METHODS = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'HEAD',
    'OPTIONS'
];

function setUpServer() {   // create express app
    const app = express();
    //requestのbody部をjsonとして解釈する
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            const origin = req.headers.origin;
            res.setHeader('Access-Control-Allow-Origin', origin);
            res.setHeader('Access-Control-Allow-Methods', ALLOWED_METHODS.join(','));
            res.setHeader('Access-Control-Allow-Headers', 'Content-type,Accept,X-Custom-Header');
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : res.end());
            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    return app;
}
module.exports = setUpServer;