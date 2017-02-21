/*
This spec contains the test cases to verify all the major components
of the dashboard are present. Components include:
-- Active Employee table
-- Issued Tools table
-- Tool Status data
-- "Home Page" title
*/
'use strict';

var DashPage = require('../dash-elem/dash-obj.js');

describe('Dash Page', function() {

    //var dashboard = new DashPage();
    var dash;
    
    // do this before each test
    beforeEach(function() {
      dash = new DashPage();
    });

    // Test Case 1: the browser tab displays "HOME PAGE"
    it('should have a title', function () {
      console.log('\nDash Page - Test Case 1: should have a title');
      expect(browser.getTitle()).toEqual('HOME PAGE');
    });

    // Test Case 2: Activate Table is present
    it('should have a table Active Employees', function() {
      console.log('\nDash Page - Test Case 2: should have a table Active Employees');
      expect(dash.eTable).toEqual('Active Employees');
    });

    // Test Case 3: Tool Box Data Table is present 
    it('should have a table Tool Box Data', function() {
      console.log('\nDash Page - Test Case 3: should have a table Tool Box Data');
      expect(dash.iTable).toEqual('Tool Box Data');
    });

    // Test Case 4: Active Status table
    it('should have a table Issued Tools', function() {
      console.log('\nDash Page - Test Case 4: should have a table Issued Tools');
      expect(dash.sTable).toEqual('Issued Tools');
    });
});