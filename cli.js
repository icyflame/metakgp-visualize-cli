#!/usr/bin/env node
'use strict';
var meow = require('meow');
var metakgpVisualizeCli = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ metakgp-visualize',
    '',
    'Examples',
    '  $ metakgp-visualize',
    '    Himanshu Mishra        : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 22%',
    '    Vivek Rai              : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 21%',
    '    Vikrant Varma          : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 16%',
    '    Siddharth Kannan       : ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 9%',
    '    Harsh Gupta            : ▇▇▇▇▇▇▇▇▇▇▇▇ 7%',
    '    Soumyadeep Mukherjee   : ▇▇▇▇▇▇▇▇▇▇▇▇ 7%',
    '    Vivek Aithal           : ▇▇▇▇▇▇ 4%',
    '    AnushkaG2509           : ▇▇▇▇ 3%',
    '    ...',
    ''
  ]
});

metakgpVisualizeCli(cli.input[0], cli.flags);
