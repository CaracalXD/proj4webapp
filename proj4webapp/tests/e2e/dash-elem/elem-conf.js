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

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }


}