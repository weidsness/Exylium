pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exylium is ERC20 {
    constructor(unit256 initialSupply) ERC20("Exylium", "EXLM") {
      _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}
