var express = require('express');
var router = express.Router();
var authUtil = require('../src/authutils');
var moment = require('moment');


/* GET home page. */
router.get('/', authUtil.ensureAuthenticated, function(req, res) {

    const tokenExpireDate = moment(req.user._json.exp * 1000).format('MMMM Do YYYY, h:mm:ss a');
    res.render('userinfo', { title: 'My Authentication, Authorization and MS Graph demo app', user: req.user, tokenExpDate: tokenExpireDate });
});

module.exports = router;