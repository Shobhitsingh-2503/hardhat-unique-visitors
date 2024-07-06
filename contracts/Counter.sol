// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Counter {
    string[] private accounts;

    function addAccount(string memory adrs) public {
        bool isPresent = false;
        for (uint i = 0; i < accounts.length; i++) {
            if (
                keccak256(abi.encodePacked(accounts[i])) ==
                keccak256(abi.encodePacked((adrs)))
            ) {
                isPresent = true;
                break;
            }
        }
        if (isPresent == false) accounts.push(adrs);
    }

    function getLength() public view returns (uint256) {
        uint256 num = accounts.length;
        return num;
    }
}
