const httpStatus = require('http-status');
const AuthService = require('../service/AuthService');
const TokenService = require('../service/TokenService');
const UserService = require('../service/UserService');
const logger = require('../config/logger');
const { tokenTypes } = require('../config/tokens');
const client = require("../../grpc");

class GrpcController {
    constructor() {
        this.userService = new UserService();
        this.tokenService = new TokenService();
        this.authService = new AuthService();
    }

    getAllList = async (req, res) => {
        try {
            client.getAll(null, (err, data) => {

                if (data) {
                    res.json({ data: data });
                } else {
                    console.log(err, 'err grpc===========>>>')
                    res.status(500).json({ error: 'Something went wrong.Not ok!!' });
                }
            });
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

module.exports = GrpcController;
