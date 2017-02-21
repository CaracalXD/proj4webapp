/*
This spec contains the test cases to verify all the major components
of the Issued Tools table are present. Components include:
-- ID
-- Number
-- First Name
-- Last Name
-- Badge Number
*/
'use strict';

var DashPage = require('../dash-elem/dash-obj.js');


describe('ToolStatusTable', function() {
    
    var dash;
    
    // do this before each test
    beforeEach(function() {
      dash = new DashPage();
    });

    // Test Case 1
    it('should have a Part Number field in the table Issued Tools', function () {
      console.log('\nIssued Tools - Test Case 1: should have a Part Number field in the table Issued Tools');
      expect(dash.sPartNum).toEqual('Part Number');
    });

    // Test Case 2
    it('should have a Name field in the table Issued Tools', function () {
      console.log('\nIssued Tools - Test Case 2: should have a Name field in the table Issued Tools');
      expect(dash.sName).toEqual('Name');
    });
    
    // Test Case 3
    it('should have a Employee field in the table Issued Tools', function () {
      console.log('\nIssued Tools - Test Case 3: should have a Employee field in the table Issued Tools');
      expect(dash.sEmployee).toEqual('Employee');
    });

    // Test Case 4
    it('should have a Date Issued field in the table Issued Tools', function () {
      console.log('\nIssued Tools - Test Case 4: should have a DateIssued field in the table Issued Tools');
      expect(dash.sDateIssued).toEqual('Date Issued');
    });

    // Test Case 5
    it('should have an Drawer field in the table Issued Tools', function () {
      console.log('\nIssued Tools - Test Case 5: should have an Drawer field in the table Issued Tools');
      expect(dash.sDrawer).toEqual('Drawer');
    });

    // Test Case 6: Search Field is present and Works
    it('should have a search', function() {
      console.log('\nIssued Tools - Test Case 6: should have a search');
      expect(dash.ssearch).toEqual('Search:');
    });

    // Test Case 7
    it('should have a subtitle', function() {
      console.log('\nIssued Tools - Test Case 7: should have a subtitle');
      expect(dash.ssubtitle).toEqual('List of issued tools');
    });
});