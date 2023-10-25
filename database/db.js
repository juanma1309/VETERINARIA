const path = require('path');
const express = require('express');
const router = require('express').Router();
const sql = require('mssql');
const sql_config = require(path.join("./config.json")).mssql;


const pool = new sql.ConnectionPool(sql_config);

pool.connect(err => { if (err) throw err });

module.express = pool