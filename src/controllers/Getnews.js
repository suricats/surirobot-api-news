'use strict';

var url = require('url');

var Getnews = require('./GetnewsService');

module.exports.getnews = function getnews (req, res, next) {
  Getnews.getnews(req.swagger.params, res, next);
};
