// conf.js
exports.config = {
  getPageTimeOut: 10000,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['dash-spec.js', 'emp-spec.js', 'issued-spec.js', 'box-spec.js'],
  //specs: ['dash-spec.js'],
  //specs: ['emp-spec.js'],
  //specs: ['box-spec.js'],
  //specs: ['issued-spec.js'],

/*  multiCapabilities: [{
    'browserName': 'firefox'
    }, {
    'browserName': 'chrome'
  }],*/
/*  onPrepare: function() {
    browser.driver.get('http://172.16.130.60/#/dashboard');

    // wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // index.html.
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /dashboard/.test(url);
      });
    }, 10000);
  },
*/
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }


}