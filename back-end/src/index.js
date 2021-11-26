"use strict"

// dependecies
const router = require('./routes/index');

// routes
const categories  = require('./routes/_categories');
const recipes     = require('./routes/_recipes');
const ingredients = require('./routes/_ingredients');

// constant
const basePath = '/v1';

router.express.use(`${basePath}`, categories);
router.express.use(`${basePath}`, recipes);
router.express.use(`${basePath}`, ingredients);