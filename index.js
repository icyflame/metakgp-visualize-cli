'use strict';
module.exports = function (str, opts) {
  var request = require('request');
  var xml2json = require('xml2json');

  var webpage_url = 'http://wiki.metakgp.org/w/Special:ContributionScores';

  request({
    method: 'GET',
    url: webpage_url,
    headers: {
      'user-agent': 'Visualise contributions to MetaKGP Wiki'
    }
  }, function (err, response, body) {
    if (err) {
      console.error(err);
    }

    // replace all new line characters

    body = body.replace(/\r?\n|\r/g, '');

    // isolate the table part that we need to build chart
    var startString = '<h2 class="contributionscores-title">Last 7 days (Top 50)</h2>';
    var endString = '<h2 class="contributionscores-title">Last 30 days (Top 50)</h2>';
    var startIndex = body.indexOf(startString) + startString.length;
    var endIndex = body.indexOf(endString);
    var tableTag = body.substr(startIndex, endIndex - startIndex);

    // convert the table tag to a JSON object

    var tableJson = JSON.parse(xml2json.toJson(tableTag));
    var tableRows = tableJson.table.tr;

    // remove header row

    tableRows = tableRows.slice(1);

    // parse the rows to get contributor scores and contributor names

    var scoreArray = [];

    for (var i = 0; i < tableRows.length; i++) {
      var tableCells = tableRows[i]['td'];

      // visit https://wiki.metakgp.org/w/Special:ContributionScores
      // for visual representation
      // Cells correspond to:
      // 1. Rank
      // 2. Contribution score
      // 3. Pages
      // 4. Changes
      // 5. Username

      var score = tableCells[1]['$t'];
      var name = tableCells[4]['a']['$t'];
      scoreArray.push([name, parseInt(score, 10)]);
    }

    var input_obj = {};
    for (i = 0; i < scoreArray.length; i++) {
      input_obj[scoreArray[i][0]] = scoreArray[i][1];
    }

    var barHorizontal = require('bar-horizontal');
    barHorizontal(input_obj, { labels: true });
  });
};
