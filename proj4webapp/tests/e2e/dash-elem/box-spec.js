/*
This spec contains the test cases to verify all the major components
of the Tool Box Data table are present. Components include:
-- ID
-- Number
-- First Name
-- Last Name
-- Badge Number
*/
'use strict';

var DashPage = require('../dash-elem/dash-obj.js');

describe('ToolBoxTable', function() {
    
    var dash;
    
    // do this before each test
    beforeEach(function() {
      dash = new DashPage();
    });

    // Test Case 1
    it('should have an ID field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 1: should have an ID field in the table Tool Box Data');
      expect(dash.iid).toEqual('ID');
    });

    // Test Case 2
    it('should have an Number field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 2: should have an Number field in the table Tool Box Data');
      expect(dash.iName).toEqual('Name');
    });
    
    // Test Case 3
    it('should have a F.Name field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 3: should have a F.Name field in the table Tool Box Data');
      expect(dash.iSerial).toEqual('Serial Number');
    });

    // Test Case 4
    it('should have a L.Name field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 4: should have a L.Name field in the table Tool Box Data');
      expect(dash.iNotes).toEqual('Notes');
    });

    // Test Case 5
    it('should have an BadgeNum field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 5: should have an BadgeNum field in the table Tool Box Data');
      expect(dash.iOnline).toEqual('Online');
    });

    // Test Case 6
    it('should have an Issued Tools field in the table Tool Box Data', function () {
      console.log('\nTool Box Data - Test Case 6: should have an Issued Tools field in the table Tool Box Data');
      expect(dash.iIssued).toEqual('Issued Tools');
    });

    // Test Case 7: Search Field is present and Works
    it('should have a search', function() {
      console.log('\nTool Box Data - Test Case 7: should have a search');
      expect(dash.isearch).toEqual('Search:');
    });

    // Test Case 8
    it('should have a subtitle', function() {
      console.log('\nTool Box Data - Test Case 8: should have a subtitle');
      expect(dash.isubtitle).toEqual('List of tool boxes');
    });
});