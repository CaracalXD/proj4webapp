/*
This spec contains the test cases to verify the integrity of the data
presented on the Dashboard page of the web application. The main concern
is that the data displayed on the homepage matches the data entered into
the database.
*/
'use strict';

var DashPage = require('../dash-elem/dash-obj.js');
var dbConnection = require('../database/dbConn.js');
var Tool = require('../dash-elem/tool-obj.js');
//var Employee = require('../dash-elem/emp-obj.js');
//var ToolBox = require('../dash-elem/box-obj.js');

describe('DataIntegrity', function() {
    
    var dash;
    var conn;
    var tool;
    var employee;
    var toolbox;
    //var currTime;
    
    // open a db connection and prepare the database before each test
    beforeAll(function() {
      dash = new DashPage();
      conn = new dbConnection();
      tool = new Tool('160','Z41BJ001',UTC,'22','3','1');
      //employee = new Employee();
      //toolbox = new ToolBox();

      // TODO == verify if database contains content - if so, empty it
      conn.populateDB();
    });

    // close the db connection after all tests have executed
    afterAll(function() {
      // TODO == clear database
      conn.closeConn();
    });

    /////////////////////////
    // Database Test Cases //
    /////////////////////////

    /* 
    Test Case 1: Employee table - Information is displayed in the table and is correct
    */

    // id
    it('should match the ID number in the database', function () {
      console.log('\nDatabase - Active Employees - TC1: Displayed ID matches database');
      expect(dash.getEmployeeID).toEqual();
    });

    // num
    it('should match the Number in the database', function () {
      console.log('\nDatabase - Active Employees - TC2: Displayed Number matches database');
      expect(dash.getEmployeeNum).toEqual();
    });
    // fname
    it('should match the FName in the database', function () {
      console.log('\nDatabase - Active Employees - TC3: Displayed FName matches database');
      expect(dash.getEmployeeFName).toEqual('');
    });

    // lname
    it('should match the LName in the database', function () {
      console.log('\nDatabase - Active Employees - TC4: Displayed LName matches database');
      expect(dash.getEmployeeLName).toEqual('');
    });

    // access
    it('should match the Access in the database', function () {
      console.log('\nDatabase - Active Employees - TC5: Displayed Access matches database');
      expect(dash.getEmployeeAccess).toEqual('');
    });    

    // badge
    it('should match the Badge number in the database', function () {
      console.log('\nDatabase - Active Employees - TC6: Displayed Badge matches database');
      expect(dash.getEmployeeBadge).toEqual('');
    });

    /*
    Test Case 2: Tool Box table - Information is displayed in the table and is correct
    */

    // ID
    it('should match the Box ID number in the database', function () {
      console.log('\nDatabase - Tool Box table - TC1: Displayed Box ID matches database');
      expect(dash.getBoxID).toEqual('');
    });
    
    // Name
    it('should match the Box Name in the database', function () {
      console.log('\nDatabase - Tool Box table - TC2: Displayed Box Name matches database');
      expect(dash.getBoxName).toEqual('');
    });

    // Serial Number 
    it('should match the Box Serial number in the database', function () {
      console.log('\nDatabase - Tool Box table - TC3: Displayed Box Serial matches database');
      expect(dash.getBoxSerial).toEqual('');
    });

    // Notes
    it('should match the Box Notes in the database', function () {
      console.log('\nDatabase - Tool Box table - TC4: Displayed Box Notes matches database');
      expect(dash.getBoxNotes).toEqual('');
    });

    // Online
    it('should match the Online status in the database', function () {
      console.log('\nDatabase - Tool Box table - TC5: Displayed Online status matches database');
      expect(dash.getBoxOnline).toEqual('');
    });

    // Issued Tools
    it('should match the number of Issued Tools in the database', function () {
      console.log('\nDatabase - Tool Box table - TC6: Displayed number of Issued Tools matches database');
      expect(dash.getBoxIssuedTools).toEqual('');
    });

    /*
    Test Case 3: Issued table - Information is displayed in the table and is correct
    */

    // Part
    it('should match the Part number in the database', function () {
      console.log('\nDatabase - Issued table - TC1: Displayed Part number matches database');
      expect(dash.getPartNum).toEqual('');
    });

    // Name
    it('should match the Badge number in the database', function () {
      console.log('\nDatabase - Issued table - TC2: Displayed Name matches database');
      expect(dash.getName).toEqual('');
    });

    // Employee
    it('should match the Employee in the database', function () {
      console.log('\nDatabase - Issued table - TC3: Displayed Employee matches database');
      expect(dash.getEmployeeIT).toEqual('');
    });

    // Date Issued
    it('should match the Date Issued in the database', function () {
      console.log('\nDatabase - Issued table - TC4: Displayed Date Issued matches database');
      expect(dash.getDateIssued).toEqual('');
    });

    // Drawer
    it('should match the Drawer number in the database', function () {
      console.log('\nDatabase - Issued table - TC5: Displayed Drawer matches database');
      expect(dash.getDrawer).toEqual('');
    });

});