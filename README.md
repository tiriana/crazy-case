## Description
cHaNgEs sTrInG CaSe iN A CrAzY WaY

## Installation
```npm i crazy-case```

## Usage
```
/**
* crazyCase(string, startsWithLowerCase = true):string;
*/
var crazyCase = require('crazy-case');

crazyCase('poklikash'); // 'pOkLiKaSh'
crazyCase('poklikash', false); // 'PoKlIkAsH'
crazyCase('This is some Crazy Case', true) // 'tHiS Is sOmE CrAzY CaSe'
crazyCase('This is some Crazy Case', false) // 'ThIs iS SoMe cRaZy cAsE'
```
