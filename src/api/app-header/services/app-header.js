'use strict';

/**
 * app-header service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-header.app-header');
