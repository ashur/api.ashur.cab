const yaml = require( "js-yaml" );

/**
 * @param {string} contents
 * @return {any}
 */
module.exports = ( contents ) => yaml.load( contents );
