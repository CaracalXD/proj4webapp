'use strict';

/* dash.pageObject.js */
var DashPage = function() {
  browser.get('removed');
};

DashPage.prototype = Object.create({}, {
  ///////////////////
  // Verify Tables //
  ///////////////////
  pageTitle: { get: function() {return element(by.css('.fa fa-tachometer')).getText(); }},
  eTable:  { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[1]/div[1]')).getText(); }},
  iTable: { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[1]/div[1]')).getText(); }},
  sTable: { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div/div/div[1]/div[1]')).getText(); }},

  ////////////////////
  // Employee Table //
  ////////////////////
  id: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[1]')).getText(); }},
  num: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[2]')).getText(); }},
  fName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[3]')).getText(); }},
  lName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[4]')).getText(); }},
  access: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[5]')).getText(); }},
  badge: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0"]/thead/tr/th[6]')).getText(); }},
  search: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_0_filter"]/label')).getText(); }},
  subtitle: { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[1]/div/div/div/div/div[2]/div[1]/h3')).getText(); }},

  ///////////////////
  // Tool Box Data //
  ///////////////////
  iid: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[1]')).getText(); }},
  iName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[2]')).getText(); }},
  iSerial: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[3]')).getText(); }},
  iNotes: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[4]')).getText(); }},
  iOnline: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[5]')).getText(); }},
  iIssued: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1"]/thead/tr/th[6]')).getText(); }}, 
  isearch: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_1_filter"]/label')).getText(); }},
  isubtitle: { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[2]/div/div/div/div/div[2]/div[1]/h3')).getText(); }},

  //////////////////
  // Issued Tools //
  //////////////////
  sPartNum: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2"]/thead/tr/th[1]')).getText(); }},
  sName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2"]/thead/tr/th[2]')).getText(); }},
  sEmployee: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2"]/thead/tr/th[3]')).getText(); }},
  sDateIssued: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2"]/thead/tr/th[4]')).getText(); }},
  sDrawer: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2"]/thead/tr/th[5]')).getText(); }},
  ssearch: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_2_filter"]/label')).getText(); }},
  ssubtitle: { get: function() {return element(by.xpath('/html/body/div[2]/div/div[2]/div/div[3]/div/div/div/div/div[2]/div[1]/h3')).getText(); }},

  ///////////////////////////////////
  // Database retrieval validation //
  ///////////////////////////////////
  getEmployeeID: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[1]')).getText(); }},
  getEmployeeNum: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[2]')).getText(); }},
  getEmployeeFName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[3]')).getText(); }},
  getEmployeeLName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[4]')).getText(); }},
  getEmployeeAccess: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[5]')).getText(); }},
  getEmployeeBadge: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_9"]/tbody/tr[1]/td[6]')).getText(); }},

  getBoxID: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[1]')).getText(); }},
  getBoxName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[2]')).getText(); }},
  getBoxSerial: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[3]')).getText(); }},
  getBoxNotes: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[4]')).getText(); }},
  getBoxOnline: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[5]')).getText(); }},
  getBoxIssuedTools: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_10"]/thead/tr/th[6]')).getText(); }},

  getPartNum: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_11"]/thead/tr/th[1]')).getText(); }},
  getName: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_11"]/thead/tr/th[2]')).getText(); }},
  getEmployeeIT: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_11"]/thead/tr/th[3]')).getText(); }},
  getDateIssued: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_11"]/thead/tr/th[4]')).getText(); }},
  getDrawer: { get: function() {return element(by.xpath('//*[@id="DataTables_Table_11"]/thead/tr/th[5]')).getText(); }},
});

module.exports = DashPage;