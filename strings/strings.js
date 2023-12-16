"use strict";
// =================== STRINGS ===================
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxDepthFunctional = exports.maxDepth = void 0;
// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
// My solution:
// Runtime: top 75%, memory: top 47%
function maxDepth(targetString) {
    var nest = 0;
    var maxNest = 0;
    for (var _i = 0, targetString_1 = targetString; _i < targetString_1.length; _i++) {
        var char = targetString_1[_i];
        if (char === '(') {
            nest++;
            if (nest > maxNest)
                maxNest++;
        }
        else if (char === ')') {
            nest--;
        }
    }
    return maxNest;
}
exports.maxDepth = maxDepth;
// Functional version
function maxDepthFunctional(targetString) {
    return targetString
        .replace(/[^()]/, '')
        .split('')
        .map(function (bracket) { return (bracket === '(' ? 1 : -1); })
        .reduce(function (acc, curr, idx) {
        return acc.concat(curr + (idx ? acc[idx - 1] : 0));
    }, [])
        .reduce(function (acc, curr) { return Math.max(acc, curr); }, 0);
}
exports.maxDepthFunctional = maxDepthFunctional;
// ==================================================
