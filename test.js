/**
 * DES加密/解密
 * @Copyright Copyright (c) 2006
 * @author Guapo
 * @see DESCore
 */

/*
* encrypt the string to string made up of hex
* return the encrypted string
*/
function strEnc(data, firstKey, secondKey, thirdKey) {

    var leng = data.length;
    var encData = "";
    var firstKeyBt, secondKeyBt, thirdKeyBt, firstLength, secondLength, thirdLength;
    if (firstKey != null && firstKey != "") {
        firstKeyBt = getKeyBytes(firstKey);
        firstLength = firstKeyBt.length;
    }
    if (secondKey != null && secondKey != "") {
        secondKeyBt = getKeyBytes(secondKey);
        secondLength = secondKeyBt.length;
    }
    if (thirdKey != null && thirdKey != "") {
        thirdKeyBt = getKeyBytes(thirdKey);
        thirdLength = thirdKeyBt.length;
    }

    if (leng > 0) {
        if (leng < 4) {
            var bt = strToBt(data);
            var encByte;
            if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "" && thirdKey != null && thirdKey != "") {
                var tempBt;
                var x, y, z;
                tempBt = bt;
                for (x = 0; x < firstLength; x++) {
                    tempBt = enc(tempBt, firstKeyBt[x]);
                }
                for (y = 0; y < secondLength; y++) {
                    tempBt = enc(tempBt, secondKeyBt[y]);
                }
                for (z = 0; z < thirdLength; z++) {
                    tempBt = enc(tempBt, thirdKeyBt[z]);
                }
                encByte = tempBt;
            } else {
                if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "") {
                    var tempBt;
                    var x, y;
                    tempBt = bt;
                    for (x = 0; x < firstLength; x++) {
                        tempBt = enc(tempBt, firstKeyBt[x]);
                    }
                    for (y = 0; y < secondLength; y++) {
                        tempBt = enc(tempBt, secondKeyBt[y]);
                    }
                    encByte = tempBt;
                } else {
                    if (firstKey != null && firstKey != "") {
                        var tempBt;
                        var x = 0;
                        tempBt = bt;
                        for (x = 0; x < firstLength; x++) {
                            tempBt = enc(tempBt, firstKeyBt[x]);
                        }
                        encByte = tempBt;
                    }
                }
            }
            encData = bt64ToHex(encByte);
        } else {
            var iterator = parseInt(leng / 4);
            var remainder = leng % 4;
            var i = 0;
            for (i = 0; i < iterator; i++) {
                var tempData = data.substring(i * 4 + 0, i * 4 + 4);
                var tempByte = strToBt(tempData);
                var encByte;
                if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "" && thirdKey != null && thirdKey != "") {
                    var tempBt;
                    var x, y, z;
                    tempBt = tempByte;
                    for (x = 0; x < firstLength; x++) {
                        tempBt = enc(tempBt, firstKeyBt[x]);
                    }
                    for (y = 0; y < secondLength; y++) {
                        tempBt = enc(tempBt, secondKeyBt[y]);
                    }
                    for (z = 0; z < thirdLength; z++) {
                        tempBt = enc(tempBt, thirdKeyBt[z]);
                    }
                    encByte = tempBt;
                } else {
                    if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "") {
                        var tempBt;
                        var x, y;
                        tempBt = tempByte;
                        for (x = 0; x < firstLength; x++) {
                            tempBt = enc(tempBt, firstKeyBt[x]);
                        }
                        for (y = 0; y < secondLength; y++) {
                            tempBt = enc(tempBt, secondKeyBt[y]);
                        }
                        encByte = tempBt;
                    } else {
                        if (firstKey != null && firstKey != "") {
                            var tempBt;
                            var x;
                            tempBt = tempByte;
                            for (x = 0; x < firstLength; x++) {
                                tempBt = enc(tempBt, firstKeyBt[x]);
                            }
                            encByte = tempBt;
                        }
                    }
                }
                encData += bt64ToHex(encByte);
            }
            if (remainder > 0) {
                var remainderData = data.substring(iterator * 4 + 0, leng);
                var tempByte = strToBt(remainderData);
                var encByte;
                if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "" && thirdKey != null && thirdKey != "") {
                    var tempBt;
                    var x, y, z;
                    tempBt = tempByte;
                    for (x = 0; x < firstLength; x++) {
                        tempBt = enc(tempBt, firstKeyBt[x]);
                    }
                    for (y = 0; y < secondLength; y++) {
                        tempBt = enc(tempBt, secondKeyBt[y]);
                    }
                    for (z = 0; z < thirdLength; z++) {
                        tempBt = enc(tempBt, thirdKeyBt[z]);
                    }
                    encByte = tempBt;
                } else {
                    if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "") {
                        var tempBt;
                        var x, y;
                        tempBt = tempByte;
                        for (x = 0; x < firstLength; x++) {
                            tempBt = enc(tempBt, firstKeyBt[x]);
                        }
                        for (y = 0; y < secondLength; y++) {
                            tempBt = enc(tempBt, secondKeyBt[y]);
                        }
                        encByte = tempBt;
                    } else {
                        if (firstKey != null && firstKey != "") {
                            var tempBt;
                            var x;
                            tempBt = tempByte;
                            for (x = 0; x < firstLength; x++) {
                                tempBt = enc(tempBt, firstKeyBt[x]);
                            }
                            encByte = tempBt;
                        }
                    }
                }
                encData += bt64ToHex(encByte);
            }
        }
    }
    return encData;
}

/*
* decrypt the encrypted string to the original string
*
* return  the original string
*/
function strDec(data, firstKey, secondKey, thirdKey) {
    var leng = data.length;
    var decStr = "";
    var firstKeyBt, secondKeyBt, thirdKeyBt, firstLength, secondLength, thirdLength;
    if (firstKey != null && firstKey != "") {
        firstKeyBt = getKeyBytes(firstKey);
        firstLength = firstKeyBt.length;
    }
    if (secondKey != null && secondKey != "") {
        secondKeyBt = getKeyBytes(secondKey);
        secondLength = secondKeyBt.length;
    }
    if (thirdKey != null && thirdKey != "") {
        thirdKeyBt = getKeyBytes(thirdKey);
        thirdLength = thirdKeyBt.length;
    }

    var iterator = parseInt(leng / 16);
    var i = 0;
    for (i = 0; i < iterator; i++) {
        var tempData = data.substring(i * 16 + 0, i * 16 + 16);
        var strByte = hexToBt64(tempData);
        var intByte = new Array(64);
        var j = 0;
        for (j = 0; j < 64; j++) {
            intByte[j] = parseInt(strByte.substring(j, j + 1));
        }
        var decByte;
        if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "" && thirdKey != null && thirdKey != "") {
            var tempBt;
            var x, y, z;
            tempBt = intByte;
            for (x = thirdLength - 1; x >= 0; x--) {
                tempBt = dec(tempBt, thirdKeyBt[x]);
            }
            for (y = secondLength - 1; y >= 0; y--) {
                tempBt = dec(tempBt, secondKeyBt[y]);
            }
            for (z = firstLength - 1; z >= 0; z--) {
                tempBt = dec(tempBt, firstKeyBt[z]);
            }
            decByte = tempBt;
        } else {
            if (firstKey != null && firstKey != "" && secondKey != null && secondKey != "") {
                var tempBt;
                var x, y, z;
                tempBt = intByte;
                for (x = secondLength - 1; x >= 0; x--) {
                    tempBt = dec(tempBt, secondKeyBt[x]);
                }
                for (y = firstLength - 1; y >= 0; y--) {
                    tempBt = dec(tempBt, firstKeyBt[y]);
                }
                decByte = tempBt;
            } else {
                if (firstKey != null && firstKey != "") {
                    var tempBt;
                    var x, y, z;
                    tempBt = intByte;
                    for (x = firstLength - 1; x >= 0; x--) {
                        tempBt = dec(tempBt, firstKeyBt[x]);
                    }
                    decByte = tempBt;
                }
            }
        }
        decStr += byteToString(decByte);
    }
    return eval('(' + decStr + ')');
}

/*
* chang the string into the bit array
*
* return bit array(it's length % 64 = 0)
*/
function getKeyBytes(key) {
    var keyBytes = new Array();
    var leng = key.length;
    var iterator = parseInt(leng / 4);
    var remainder = leng % 4;
    var i = 0;
    for (i = 0; i < iterator; i++) {
        keyBytes[i] = strToBt(key.substring(i * 4 + 0, i * 4 + 4));
    }
    if (remainder > 0) {
        keyBytes[i] = strToBt(key.substring(i * 4 + 0, leng));
    }
    return keyBytes;
}

/*
* chang the string(it's length <= 4) into the bit array
*
* return bit array(it's length = 64)
*/
function strToBt(str) {
    var leng = str.length;
    var bt = new Array(64);
    if (leng < 4) {
        var i = 0, j = 0, p = 0, q = 0;
        for (i = 0; i < leng; i++) {
            var k = str.charCodeAt(i);
            for (j = 0; j < 16; j++) {
                var pow = 1, m = 0;
                for (m = 15; m > j; m--) {
                    pow *= 2;
                }
                bt[16 * i + j] = parseInt(k / pow) % 2;
            }
        }
        for (p = leng; p < 4; p++) {
            var k = 0;
            for (q = 0; q < 16; q++) {
                var pow = 1, m = 0;
                for (m = 15; m > q; m--) {
                    pow *= 2;
                }
                bt[16 * p + q] = parseInt(k / pow) % 2;
            }
        }
    } else {
        for (i = 0; i < 4; i++) {
            var k = str.charCodeAt(i);
            for (j = 0; j < 16; j++) {
                var pow = 1;
                for (m = 15; m > j; m--) {
                    pow *= 2;
                }
                bt[16 * i + j] = parseInt(k / pow) % 2;
            }
        }
    }
    return bt;
}

/*
* chang the bit(it's length = 4) into the hex
*
* return hex
*/
function bt4ToHex(binary) {
    var hex;
    switch (binary) {
        case "0000" :
            hex = "0";
            break;
        case "0001" :
            hex = "1";
            break;
        case "0010" :
            hex = "2";
            break;
        case "0011" :
            hex = "3";
            break;
        case "0100" :
            hex = "4";
            break;
        case "0101" :
            hex = "5";
            break;
        case "0110" :
            hex = "6";
            break;
        case "0111" :
            hex = "7";
            break;
        case "1000" :
            hex = "8";
            break;
        case "1001" :
            hex = "9";
            break;
        case "1010" :
            hex = "A";
            break;
        case "1011" :
            hex = "B";
            break;
        case "1100" :
            hex = "C";
            break;
        case "1101" :
            hex = "D";
            break;
        case "1110" :
            hex = "E";
            break;
        case "1111" :
            hex = "F";
            break;
    }
    return hex;
}

/*
* chang the hex into the bit(it's length = 4)
*
* return the bit(it's length = 4)
*/
function hexToBt4(hex) {
    var binary;
    switch (hex) {
        case "0" :
            binary = "0000";
            break;
        case "1" :
            binary = "0001";
            break;
        case "2" :
            binary = "0010";
            break;
        case "3" :
            binary = "0011";
            break;
        case "4" :
            binary = "0100";
            break;
        case "5" :
            binary = "0101";
            break;
        case "6" :
            binary = "0110";
            break;
        case "7" :
            binary = "0111";
            break;
        case "8" :
            binary = "1000";
            break;
        case "9" :
            binary = "1001";
            break;
        case "A" :
            binary = "1010";
            break;
        case "B" :
            binary = "1011";
            break;
        case "C" :
            binary = "1100";
            break;
        case "D" :
            binary = "1101";
            break;
        case "E" :
            binary = "1110";
            break;
        case "F" :
            binary = "1111";
            break;
    }
    return binary;
}

/*
* chang the bit(it's length = 64) into the string
*
* return string
*/
function byteToString(byteData) {
    var str = "";
    for (i = 0; i < 4; i++) {
        var count = 0;
        for (j = 0; j < 16; j++) {
            var pow = 1;
            for (m = 15; m > j; m--) {
                pow *= 2;
            }
            count += byteData[16 * i + j] * pow;
        }
        if (count != 0) {
            str += String.fromCharCode(count);
        }
    }
    return str;
}

function bt64ToHex(byteData) {
    var hex = "";
    for (i = 0; i < 16; i++) {
        var bt = "";
        for (j = 0; j < 4; j++) {
            bt += byteData[i * 4 + j];
        }
        hex += bt4ToHex(bt);
    }
    return hex;
}

function hexToBt64(hex) {
    var binary = "";
    for (i = 0; i < 16; i++) {
        binary += hexToBt4(hex.substring(i, i + 1));
    }
    return binary;
}

/*
* the 64 bit des core arithmetic
*/

function enc(dataByte, keyByte) {
    var keys = generateKeys(keyByte);
    var ipByte = initPermute(dataByte);
    var ipLeft = new Array(32);
    var ipRight = new Array(32);
    var tempLeft = new Array(32);
    var i = 0, j = 0, k = 0, m = 0, n = 0;
    for (k = 0; k < 32; k++) {
        ipLeft[k] = ipByte[k];
        ipRight[k] = ipByte[32 + k];
    }
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 32; j++) {
            tempLeft[j] = ipLeft[j];
            ipLeft[j] = ipRight[j];
        }
        var key = new Array(48);
        for (m = 0; m < 48; m++) {
            key[m] = keys[i][m];
        }
        var tempRight = xor(pPermute(sBoxPermute(xor(expandPermute(ipRight), key))), tempLeft);
        for (n = 0; n < 32; n++) {
            ipRight[n] = tempRight[n];
        }

    }


    var finalData = new Array(64);
    for (i = 0; i < 32; i++) {
        finalData[i] = ipRight[i];
        finalData[32 + i] = ipLeft[i];
    }
    return finallyPermute(finalData);
}

function dec(dataByte, keyByte) {
    var keys = generateKeys(keyByte);
    var ipByte = initPermute(dataByte);
    var ipLeft = new Array(32);
    var ipRight = new Array(32);
    var tempLeft = new Array(32);
    var i = 0, j = 0, k = 0, m = 0, n = 0;
    for (k = 0; k < 32; k++) {
        ipLeft[k] = ipByte[k];
        ipRight[k] = ipByte[32 + k];
    }
    for (i = 15; i >= 0; i--) {
        for (j = 0; j < 32; j++) {
            tempLeft[j] = ipLeft[j];
            ipLeft[j] = ipRight[j];
        }
        var key = new Array(48);
        for (m = 0; m < 48; m++) {
            key[m] = keys[i][m];
        }

        var tempRight = xor(pPermute(sBoxPermute(xor(expandPermute(ipRight), key))), tempLeft);
        for (n = 0; n < 32; n++) {
            ipRight[n] = tempRight[n];
        }
    }


    var finalData = new Array(64);
    for (i = 0; i < 32; i++) {
        finalData[i] = ipRight[i];
        finalData[32 + i] = ipLeft[i];
    }
    return finallyPermute(finalData);
}

function initPermute(originalData) {
    var ipByte = new Array(64);
    for (i = 0, m = 1, n = 0; i < 4; i++, m += 2, n += 2) {
        for (j = 7, k = 0; j >= 0; j--, k++) {
            ipByte[i * 8 + k] = originalData[j * 8 + m];
            ipByte[i * 8 + k + 32] = originalData[j * 8 + n];
        }
    }
    return ipByte;
}

function expandPermute(rightData) {
    var epByte = new Array(48);
    for (i = 0; i < 8; i++) {
        if (i == 0) {
            epByte[i * 6 + 0] = rightData[31];
        } else {
            epByte[i * 6 + 0] = rightData[i * 4 - 1];
        }
        epByte[i * 6 + 1] = rightData[i * 4 + 0];
        epByte[i * 6 + 2] = rightData[i * 4 + 1];
        epByte[i * 6 + 3] = rightData[i * 4 + 2];
        epByte[i * 6 + 4] = rightData[i * 4 + 3];
        if (i == 7) {
            epByte[i * 6 + 5] = rightData[0];
        } else {
            epByte[i * 6 + 5] = rightData[i * 4 + 4];
        }
    }
    return epByte;
}

function xor(byteOne, byteTwo) {
    var xorByte = new Array(byteOne.length);
    for (i = 0; i < byteOne.length; i++) {
        xorByte[i] = byteOne[i] ^ byteTwo[i];
    }
    return xorByte;
}

function sBoxPermute(expandByte) {

    var sBoxByte = new Array(32);
    var binary = "";
    var s1 = [
        [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
        [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
        [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
        [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13]];

    /* Table - s2 */
    var s2 = [
        [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
        [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
        [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
        [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9]];

    /* Table - s3 */
    var s3 = [
        [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8],
        [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
        [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
        [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12]];
    /* Table - s4 */
    var s4 = [
        [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15],
        [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
        [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
        [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14]];

    /* Table - s5 */
    var s5 = [
        [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
        [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
        [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
        [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3]];

    /* Table - s6 */
    var s6 = [
        [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
        [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
        [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
        [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13]];

    /* Table - s7 */
    var s7 = [
        [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
        [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
        [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
        [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12]];

    /* Table - s8 */
    var s8 = [
        [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
        [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
        [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
        [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11]];

    for (m = 0; m < 8; m++) {
        var i = 0, j = 0;
        i = expandByte[m * 6 + 0] * 2 + expandByte[m * 6 + 5];
        j = expandByte[m * 6 + 1] * 2 * 2 * 2
            + expandByte[m * 6 + 2] * 2 * 2
            + expandByte[m * 6 + 3] * 2
            + expandByte[m * 6 + 4];
        switch (m) {
            case 0 :
                binary = getBoxBinary(s1[i][j]);
                break;
            case 1 :
                binary = getBoxBinary(s2[i][j]);
                break;
            case 2 :
                binary = getBoxBinary(s3[i][j]);
                break;
            case 3 :
                binary = getBoxBinary(s4[i][j]);
                break;
            case 4 :
                binary = getBoxBinary(s5[i][j]);
                break;
            case 5 :
                binary = getBoxBinary(s6[i][j]);
                break;
            case 6 :
                binary = getBoxBinary(s7[i][j]);
                break;
            case 7 :
                binary = getBoxBinary(s8[i][j]);
                break;
        }
        sBoxByte[m * 4 + 0] = parseInt(binary.substring(0, 1));
        sBoxByte[m * 4 + 1] = parseInt(binary.substring(1, 2));
        sBoxByte[m * 4 + 2] = parseInt(binary.substring(2, 3));
        sBoxByte[m * 4 + 3] = parseInt(binary.substring(3, 4));
    }
    return sBoxByte;
}

function pPermute(sBoxByte) {
    var pBoxPermute = new Array(32);
    pBoxPermute[0] = sBoxByte[15];
    pBoxPermute[1] = sBoxByte[6];
    pBoxPermute[2] = sBoxByte[19];
    pBoxPermute[3] = sBoxByte[20];
    pBoxPermute[4] = sBoxByte[28];
    pBoxPermute[5] = sBoxByte[11];
    pBoxPermute[6] = sBoxByte[27];
    pBoxPermute[7] = sBoxByte[16];
    pBoxPermute[8] = sBoxByte[0];
    pBoxPermute[9] = sBoxByte[14];
    pBoxPermute[10] = sBoxByte[22];
    pBoxPermute[11] = sBoxByte[25];
    pBoxPermute[12] = sBoxByte[4];
    pBoxPermute[13] = sBoxByte[17];
    pBoxPermute[14] = sBoxByte[30];
    pBoxPermute[15] = sBoxByte[9];
    pBoxPermute[16] = sBoxByte[1];
    pBoxPermute[17] = sBoxByte[7];
    pBoxPermute[18] = sBoxByte[23];
    pBoxPermute[19] = sBoxByte[13];
    pBoxPermute[20] = sBoxByte[31];
    pBoxPermute[21] = sBoxByte[26];
    pBoxPermute[22] = sBoxByte[2];
    pBoxPermute[23] = sBoxByte[8];
    pBoxPermute[24] = sBoxByte[18];
    pBoxPermute[25] = sBoxByte[12];
    pBoxPermute[26] = sBoxByte[29];
    pBoxPermute[27] = sBoxByte[5];
    pBoxPermute[28] = sBoxByte[21];
    pBoxPermute[29] = sBoxByte[10];
    pBoxPermute[30] = sBoxByte[3];
    pBoxPermute[31] = sBoxByte[24];
    return pBoxPermute;
}

function finallyPermute(endByte) {
    var fpByte = new Array(64);
    fpByte[0] = endByte[39];
    fpByte[1] = endByte[7];
    fpByte[2] = endByte[47];
    fpByte[3] = endByte[15];
    fpByte[4] = endByte[55];
    fpByte[5] = endByte[23];
    fpByte[6] = endByte[63];
    fpByte[7] = endByte[31];
    fpByte[8] = endByte[38];
    fpByte[9] = endByte[6];
    fpByte[10] = endByte[46];
    fpByte[11] = endByte[14];
    fpByte[12] = endByte[54];
    fpByte[13] = endByte[22];
    fpByte[14] = endByte[62];
    fpByte[15] = endByte[30];
    fpByte[16] = endByte[37];
    fpByte[17] = endByte[5];
    fpByte[18] = endByte[45];
    fpByte[19] = endByte[13];
    fpByte[20] = endByte[53];
    fpByte[21] = endByte[21];
    fpByte[22] = endByte[61];
    fpByte[23] = endByte[29];
    fpByte[24] = endByte[36];
    fpByte[25] = endByte[4];
    fpByte[26] = endByte[44];
    fpByte[27] = endByte[12];
    fpByte[28] = endByte[52];
    fpByte[29] = endByte[20];
    fpByte[30] = endByte[60];
    fpByte[31] = endByte[28];
    fpByte[32] = endByte[35];
    fpByte[33] = endByte[3];
    fpByte[34] = endByte[43];
    fpByte[35] = endByte[11];
    fpByte[36] = endByte[51];
    fpByte[37] = endByte[19];
    fpByte[38] = endByte[59];
    fpByte[39] = endByte[27];
    fpByte[40] = endByte[34];
    fpByte[41] = endByte[2];
    fpByte[42] = endByte[42];
    fpByte[43] = endByte[10];
    fpByte[44] = endByte[50];
    fpByte[45] = endByte[18];
    fpByte[46] = endByte[58];
    fpByte[47] = endByte[26];
    fpByte[48] = endByte[33];
    fpByte[49] = endByte[1];
    fpByte[50] = endByte[41];
    fpByte[51] = endByte[9];
    fpByte[52] = endByte[49];
    fpByte[53] = endByte[17];
    fpByte[54] = endByte[57];
    fpByte[55] = endByte[25];
    fpByte[56] = endByte[32];
    fpByte[57] = endByte[0];
    fpByte[58] = endByte[40];
    fpByte[59] = endByte[8];
    fpByte[60] = endByte[48];
    fpByte[61] = endByte[16];
    fpByte[62] = endByte[56];
    fpByte[63] = endByte[24];
    return fpByte;
}

function getBoxBinary(i) {
    var binary = "";
    switch (i) {
        case 0 :
            binary = "0000";
            break;
        case 1 :
            binary = "0001";
            break;
        case 2 :
            binary = "0010";
            break;
        case 3 :
            binary = "0011";
            break;
        case 4 :
            binary = "0100";
            break;
        case 5 :
            binary = "0101";
            break;
        case 6 :
            binary = "0110";
            break;
        case 7 :
            binary = "0111";
            break;
        case 8 :
            binary = "1000";
            break;
        case 9 :
            binary = "1001";
            break;
        case 10 :
            binary = "1010";
            break;
        case 11 :
            binary = "1011";
            break;
        case 12 :
            binary = "1100";
            break;
        case 13 :
            binary = "1101";
            break;
        case 14 :
            binary = "1110";
            break;
        case 15 :
            binary = "1111";
            break;
    }
    return binary;
}

/*
* generate 16 keys for xor
*
*/
function generateKeys(keyByte) {
    var key = new Array(56);
    var keys = new Array();

    keys[0] = new Array();
    keys[1] = new Array();
    keys[2] = new Array();
    keys[3] = new Array();
    keys[4] = new Array();
    keys[5] = new Array();
    keys[6] = new Array();
    keys[7] = new Array();
    keys[8] = new Array();
    keys[9] = new Array();
    keys[10] = new Array();
    keys[11] = new Array();
    keys[12] = new Array();
    keys[13] = new Array();
    keys[14] = new Array();
    keys[15] = new Array();
    var loop = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

    for (i = 0; i < 7; i++) {
        for (j = 0, k = 7; j < 8; j++, k--) {
            key[i * 8 + j] = keyByte[8 * k + i];
        }
    }

    var i = 0;
    for (i = 0; i < 16; i++) {
        var tempLeft = 0;
        var tempRight = 0;
        for (j = 0; j < loop[i]; j++) {
            tempLeft = key[0];
            tempRight = key[28];
            for (k = 0; k < 27; k++) {
                key[k] = key[k + 1];
                key[28 + k] = key[29 + k];
            }
            key[27] = tempLeft;
            key[55] = tempRight;
        }
        var tempKey = new Array(48);
        tempKey[0] = key[13];
        tempKey[1] = key[16];
        tempKey[2] = key[10];
        tempKey[3] = key[23];
        tempKey[4] = key[0];
        tempKey[5] = key[4];
        tempKey[6] = key[2];
        tempKey[7] = key[27];
        tempKey[8] = key[14];
        tempKey[9] = key[5];
        tempKey[10] = key[20];
        tempKey[11] = key[9];
        tempKey[12] = key[22];
        tempKey[13] = key[18];
        tempKey[14] = key[11];
        tempKey[15] = key[3];
        tempKey[16] = key[25];
        tempKey[17] = key[7];
        tempKey[18] = key[15];
        tempKey[19] = key[6];
        tempKey[20] = key[26];
        tempKey[21] = key[19];
        tempKey[22] = key[12];
        tempKey[23] = key[1];
        tempKey[24] = key[40];
        tempKey[25] = key[51];
        tempKey[26] = key[30];
        tempKey[27] = key[36];
        tempKey[28] = key[46];
        tempKey[29] = key[54];
        tempKey[30] = key[29];
        tempKey[31] = key[39];
        tempKey[32] = key[50];
        tempKey[33] = key[44];
        tempKey[34] = key[32];
        tempKey[35] = key[47];
        tempKey[36] = key[43];
        tempKey[37] = key[48];
        tempKey[38] = key[38];
        tempKey[39] = key[55];
        tempKey[40] = key[33];
        tempKey[41] = key[52];
        tempKey[42] = key[45];
        tempKey[43] = key[41];
        tempKey[44] = key[49];
        tempKey[45] = key[35];
        tempKey[46] = key[28];
        tempKey[47] = key[31];
        switch (i) {
            case 0:
                for (m = 0; m < 48; m++) {
                    keys[0][m] = tempKey[m];
                }
                break;
            case 1:
                for (m = 0; m < 48; m++) {
                    keys[1][m] = tempKey[m];
                }
                break;
            case 2:
                for (m = 0; m < 48; m++) {
                    keys[2][m] = tempKey[m];
                }
                break;
            case 3:
                for (m = 0; m < 48; m++) {
                    keys[3][m] = tempKey[m];
                }
                break;
            case 4:
                for (m = 0; m < 48; m++) {
                    keys[4][m] = tempKey[m];
                }
                break;
            case 5:
                for (m = 0; m < 48; m++) {
                    keys[5][m] = tempKey[m];
                }
                break;
            case 6:
                for (m = 0; m < 48; m++) {
                    keys[6][m] = tempKey[m];
                }
                break;
            case 7:
                for (m = 0; m < 48; m++) {
                    keys[7][m] = tempKey[m];
                }
                break;
            case 8:
                for (m = 0; m < 48; m++) {
                    keys[8][m] = tempKey[m];
                }
                break;
            case 9:
                for (m = 0; m < 48; m++) {
                    keys[9][m] = tempKey[m];
                }
                break;
            case 10:
                for (m = 0; m < 48; m++) {
                    keys[10][m] = tempKey[m];
                }
                break;
            case 11:
                for (m = 0; m < 48; m++) {
                    keys[11][m] = tempKey[m];
                }
                break;
            case 12:
                for (m = 0; m < 48; m++) {
                    keys[12][m] = tempKey[m];
                }
                break;
            case 13:
                for (m = 0; m < 48; m++) {
                    keys[13][m] = tempKey[m];
                }
                break;
            case 14:
                for (m = 0; m < 48; m++) {
                    keys[14][m] = tempKey[m];
                }
                break;
            case 15:
                for (m = 0; m < 48; m++) {
                    keys[15][m] = tempKey[m];
                }
                break;
        }
    }
    return keys;
}

//end-------------------------------------------------------------------------------------------------------------
/*
function test() {

 var msg = "abcdefgh";
 var bt = strToBt(msg);

 var key = "12345678";
 var keyB = strToBt(key);

 var encByte = enc(bt,keyB);

 var enchex  = bt64ToHex(encByte);
 endata.value=enchex;

 var encStr = hexToBt64(enchex);
 alert("encStr="+encStr);
 var eByte = new Array();
 for(m=0;m<encStr.length;m++){
   eByte[m] = parseInt(encStr.substring(m,m+1));
 }
 var decbyte= dec(eByte,keyB)
 var decmsg= byteToString(decbyte);
 alert("decbyte="+decbyte);
 alert("decmsg="+decmsg);
}*/

var data = '0AA5DE07B0DC77420D3F581B900D99FA72014D62D43553919882C8475F2BACCE732F788574E8E11563522E9822D68F18E50399E7ED7781919126D3B0F5C87270354E0560E39FD4A1DD95AE96231AAB53A3438BA3F3415E86E90F9CFD714D456D46446DEA5BEDF409D57732B10FE80BF3E0EA3DF207BE4526DEF9D2D08C2331B9D20A4F62061C5766C9C9BCC7643A1EF0A92D677155282F5B54E5A23F59EFA45DD94F52DD118E8B3819E47044F90208E5A7DF782494A7D6C463823C2EEA037AA93F8037A4FDCD1418DB43C8DF622F7B569243D13F1AC950CBD161E229F27A124B176207834FDD7141163133076FEA27D3B751F0E2F5A1197FD113D7E8320676427B434F5C1ECC46B51D46597E44F605B3BE2695F674C4683E57017AC95EE57A9B5CCB37418E404393675618DC24D9D6570781CA7566DF44E71D41B244172696EF0F61923D459660BA8A4BC3AFF71AFB8A4E0DB984676036E2949D50808145A6955C3E7C65814F235E7190DF8604B7DCBBC64D5C461E08908868A92270DD8D0500FB8CC5631F1DB4B48C7B4D3DE6E0B20B2DD0E062C57A5A8236CBEDA96B1134DB09534F4CB48E57D6EB3FED7C7CD589BCE1BF4E019B10FF01A8CD592F5533A872468D0B887BE630AC45408AE922E9211CC4C8261E14AF6DDB09534F4CB48E57D6217AB93D3E8E1ADF7ED1A9E69241D34F9FCB784A1D2BA8DFA8C002B6B2CB25A40781CA7566DF44E71D41B244172696EF9243D13F1AC950CB86693DE0AF50F92151BC90B588EC76B326F3E06AD8BBADAA113E5F74FF75D57276A7110B341533E00AD86BA5004B27378EB4A55453D97160C64D5C461E089088F50CB7C11A40FADF19E47044F90208E5A7DF782494A7D6C49649EF445BD6291B910813AF1D9FB05CDB43C8DF622F7B569243D13F1AC950CB551AE8B7AA48176DF5FEE0062F0E3C88D060F2FA6EDBB7FCC2AD8DA5DCCE2BEF2D95E9076F52AEC69EE0225D7706CADA09534F4CB48E57D6FE29F76B39024D01C1875E218F671F66CE18E5AEF94CEBD1A892B720EA4354A810764D99E0A577CDE5E3B9D18770013257FDD4942BB31711A046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F8069F328596026BB50294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCF5FEE0062F0E3C886F3D7E9FED6816EBB53553CD81DF5E391CF284D3F21E2AC04A0F244764553109F22B62ED483697C939F875A97CC35D0A89A45481C0751C4E55AE298707EE77F467E1F48CAF3713FDF63D4DC9617585F58947B36BADF2E7FCF0A0DB97240531C6B2491E548EA85C089BC7AAA20CCDDCF2E0EA3DF207BE4526DEF9D2D08C2331B9D20A4F62061C576675A1D631D29CBF05A046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F80DBE7110C4067A6FE3AEF7AC4E20E8CCE8947B36BADF2E7FCF0A0DB97240531C67C5EED79EBD717DC52062178BB0EE941E2BBA3294AF35F57294A7588404B9E62E56B494D5A455B8D25FDF48FEE4F6714FB02B4B5F1F53BBA9454ADC991B465BE2387F8054687C5AA2D95E9076F52AEC69EE0225D7706CADA09534F4CB48E57D6FE29F76B39024D01C1875E218F671F66F43F9BE5F8EFA429A892B720EA4354A810764D99E0A577CDE5E3B9D1877001321AA40BDFBD1C08BEA046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F801BF5A039CA6F0D3B294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCF5FEE0062F0E3C886F3D7E9FED6816EB8E3DA8B2C284995941B788DBE4BE957E4A0F244764553109F22B62ED483697C9166C6D85A469BF0C3DF4602AC3831A4B1D17A37CD6354A4D2D95E9076F52AEC69EE0225D7706CADA09534F4CB48E57D6FE29F76B39024D01C1875E218F671F66AA99A07368746D97A892B720EA4354A810764D99E0A577CDE5E3B9D1877001322BD77015F163759CA046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F80EED29AE23D634857294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCD3D31543153B1AA06F3D7E9FED6816EBD7AA64FB8F65A60D41B788DBE4BE957E4A0F24476455310932B563F8F3AC67B9873AFC3EB65CBEAF5A2E62579CECDAB5AF0FBF307F8048E82D95E9076F52AEC69EE0225D7706CADA09534F4CB48E57D6FE29F76B39024D01C1875E218F671F66A421F41C7805752CA892B720EA4354A810764D99E0A577CDE5E3B9D1877001320390C12302A5269DA046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F808E5C4D05D2C09D1D3AEF7AC4E20E8CCE8947B36BADF2E7FCF0A0DB97240531C62545C32912A46CEC52062178BB0EE941E20FB22DC327DEFC294A7588404B9E62E56B494D5A455B8D19667C2AD9B885D9F763CFFAD370BCAD1AF468D4C4725C6A692CA482DD0D8DAF0781CA7566DF44E71D41B244172696EF9243D13F1AC950CB86693DE0AF50F92151BC90B588EC76B353BE2DDE6B5C1A8F113E5F74FF75D57276A7110B341533E00FC3CA52511B7AD297232C2791FE9194C64D5C461E089088F50CB7C11A40FADF19E47044F90208E5A7DF782494A7D6C4D65C39B84C4397AD1B2724D4BEE652DEDB43C8DF622F7B569243D13F1AC950CB551AE8B7AA48176DF5FEE0062F0E3C8824C746A325DA8D9D4613B94DBB44F07FC4C8261E14AF6DDB09534F4CB48E57D6E7F7CEE46C46238DCB62CD7517F4F2B29E529C1355A9892767E1F48CAF3713FDF63D4DC9617585F58947B36BADF2E7FCF0A0DB97240531C6B2491E548EA85C084971C2EE9CD073FFE0EA3DF207BE4526DEF9D2D08C2331B9D20A4F62061C576658D4CBBC7D4645FEDD7F7D2DEAC193C4391ABEEC6F62A09C19E47044F90208E5A7DF782494A7D6C49345A052EA2A7443E239FBC5B8ABF184DB43C8DF622F7B569243D13F1AC950CB551AE8B7AA48176DF5FEE0062F0E3C88810468D098B78CB462B6D00EF339BFA01BF4CCE7064A08067B434F5C1ECC46B51D46597E44F605B37E82443D7A90F0D7A5EF7B06B28445A2FEAEDE6EF990432AE90F9CFD714D456D46446DEA5BEDF4099CEF984C126B43FCB5D20011DDDAA0023C83B6611BF32D432D5DF2B6521EE7C04E0DB984676036E2AD259E7F72F76C96441AFDF9E6F1CACC8ED9769D5B93AAA57996C78F54786C36AF26449410E18E19676C3541BBB499A595303C5A2296E512F2D37360C93AD6BC36CBEDA96B1134DB09534F4CB48E57D6EC3EE4E69D3E80DC82599DF315BA1D0FFDD16AC8EEFBFF8D0D5AFB27181F67987B434F5C1ECC46B51D46597E44F605B374F592D330EDE64A7B8B2F34428678DD2A82DC47459A2BEBFEAEDE6EF990432AE90F9CFD714D456D46446DEA5BEDF4099CEF984C126B43FCB5D20011DDDAA0023C83B6611BF32D4341B788DBE4BE957E4E0DB984676036E2949D50808145A695E03FF7CFC6256296DD7F7D2DEAC193C4150D83DA681EB62268A92270DD8D0500FB8CC5631F1DB4B48C7B4D3DE6E0B20B1D37B6EE0CF397D63AEF7AC4E20E8CCE8947B36BADF2E7FCF0A0DB97240531C62545C32912A46CEC52062178BB0EE941EA9D1E38968BB71DEF4E13AD1AF327CC2E16AFF8A6CB26984A0F244764553109F22B62ED483697C939F875A97CC35D0A53CE691A48D55920E6FD9AC49F9C1B3D67E1F48CAF3713FDF63D4DC9617585F58947B36BADF2E7FCF0A0DB97240531C6B2491E548EA85C0860DEF5CCA234F9BAE0EA3DF207BE4526DEF9D2D08C2331B9D20A4F62061C57660D8AC90FBE261E8BDD7F7D2DEAC193C4391ABEEC6F62A09C19E47044F90208E5A7DF782494A7D6C4A90F15757CCAEFFA294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCF5FEE0062F0E3C886F3D7E9FED6816EB901FAB2EA842C15841B788DBE4BE957E4A0F244764553109F22B62ED483697C939F875A97CC35D0AA11B565FB9A3656CE25B1B6524EBE46A67E1F48CAF3713FDF63D4DC9617585F58947B36BADF2E7FCF0A0DB97240531C6B2491E548EA85C0870F13C68B99DC9EFE0EA3DF207BE4526DEF9D2D08C2331B9D20A4F62061C57668316955E3B35C416A046B67FB076FAB5E933A0BDDDCC7C062C27C43529E00BCE2762773BA3A26F80CBE13DE4F05F38FC294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCF5FEE0062F0E3C886F3D7E9FED6816EB7F4BCEA0FDC13E68D80B904A118B818D76ACB621F39B227EC4C8261E14AF6DDB09534F4CB48E57D6217AB93D3E8E1ADFA86C437A6F237B83303B4463F2A377CBFEAEDE6EF990432AE90F9CFD714D456D46446DEA5BEDF4099CEF984C126B43FCB5D20011DDDAA002F5C78E2EB54484DA1CF284D3F21E2AC04E0DB984676036E2AD259E7F72F76C96DC655863ABBD6F4E8ED9769D5B93AAA52E1D90B7799164D3EB909AD95F7F879B2C27C43529E00BCE2762773BA3A26F8079F9949619DB1365294A7588404B9E6249D39F69B0A5A4869CEF984C126B43FCF5FEE0062F0E3C886F3D7E9FED6816EB79E08D62934B6FD5DC322E27A4D855DA76ACB621F39B227EC4C8261E14AF6DDB09534F4CB48E57D6217AB93D3E8E1ADF167B2C7EF054E3A033857073E60456AB593FB1E3F81AF3B0';
var firstKey = 'huin@liuou';
var secondKey = 'liu0133xin';
var thirdKey = '0772';
var ret = strDec(data, firstKey, secondKey, thirdKey);
console.log(ret);