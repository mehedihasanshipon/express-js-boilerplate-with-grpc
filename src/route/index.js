const express = require('express');
const authRoute = require('./authRoute');
const grpcRoute = require('./grpcRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/grpc',
        route: grpcRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
