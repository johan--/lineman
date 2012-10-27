/* Exports an object that defines
 *  all of the downloadable libraries
 *
 * Format of each library follows:
 *
 * <name>: {
 *   url: <url_to_asset> //required
 *   extension: (js|css|png|jpg|jpeg|gif) //optional if the url ends with the right extension
 * }
 *
 *
 */
module.exports = {

  backbone: {
    url: "http://backbonejs.org/backbone.js"//,
    // dependsOn: ["underscore"]
  },
  // bootstrap: {
  //   url: "http://twitter.github.com/bootstrap/assets/bootstrap.zip",
  //   paths: [
  //     "css/bootstrap-responsive.css",
  //     "css/bootstrap.css",
  //     "img/glyphicons-halflings-white.png",
  //     "img/glyphicons-halflings.png",
  //     "js/bootstrap.js"
  //   ]
  // },
  jquery: {
    url: "http://code.jquery.com/jquery-latest.js"
  },
  normalize: {
    url: "http://necolas.github.com/normalize.css/2.0.1/normalize.css"
  },
  underscore: {
    url: "http://underscorejs.org/underscore.js"
  }
}