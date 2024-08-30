"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const login_org_1 = require("@/use-cases/login-org");
async function login(req, res) {
    const { email, password } = req.body;
    try {
        const { org, token } = await (0, login_org_1.loginOrg)({ email, password });
        return res.status(200).send({ org, token });
    }
    catch (error) {
        return res.status(401).send({ error: 'Invalid credentials' });
    }
}
