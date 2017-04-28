pragma solidity ^0.4.7;

contract Report {

    struct report {
        uint id;
        string detail;
    }

    mapping(uint => report) public reports;

    function write(uint id, string detail) {
        report memory newReport = report(id, detail);
        reports[id] = newReport;
    }

    function getReport(uint id) constant returns (string detail) {
        return reports[id].detail;
    }
}