/*
This spec contains the test cases to verify all the major components
of the Active Employee table are present. Components include:
-- ID
-- Number
-- First Name
-- Last Name
-- Access Type
-- Badge Number
*/
'use strict';

var DashPage = require('../dash-elem/dash-obj.js');

describe('ActiveEmployeeTable', function() {
    
    var dash;
    
    // do this before each test
    beforeEach(function() {
      dash = new DashPage();
    });

    // Test Case 1
    it('should have an ID field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 1: should have an ID field in the table Active Employees');
      expect(dash.id).toEqual('ID');
    });

    // Test Case 2
    it('should have an Number field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 2: should have an Number field in the table Active Employees');
      expect(dash.num).toEqual('Number');
    });
    
    // Test Case 3
    it('should have a F.Name field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 3: should have a F.Name field in the table Active Employees');
      expect(dash.fName).toEqual('First Name');
    });

    // Test Case 4
    it('should have a L.Name field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 4: should have a L.Name field in the table Active Employees');
      expect(dash.lName).toEqual('Last Name');
    });

    // Test Case 5
    it('should have an AccessType field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 5: should have an AccessType field in the table Active Employees');
      expect(dash.access).toEqual('Access Type');
    });

    // Test Case 6
    it('should have an BadgeNum field in the table Active Employees', function () {
      console.log('\nActive Employees - Test Case 6: should have an BadgeNum field in the table Active Employees');
      expect(dash.badge).toEqual('Badge Number');
    });

    // Test Case 7: Search Field is present and Works
    it('should have a search', function() {
      console.log('\nActive Employees - Test Case 7: should have a search');
      expect(dash.search).toEqual('Search:');
    });

    // Test Case 8
    it('should have a subtitle', function() {
      console.log('\nActive Employees - Test Case 8: should have a subtitle');
      expect(dash.subtitle).toEqual('List of employees with issued tools');
    });
});