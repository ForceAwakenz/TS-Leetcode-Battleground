// =================== STRINGS ===================

// 1614. Maximum Nesting Depth of the Parentheses
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// My solution:
// Runtime: top 75%, memory: top 47%

export function maxDepth(targetString: string): number {
	let nest = 0;
	let maxNest = 0;

	for (let char of targetString) {
		if (char === '(') {
			nest++;
			if (nest > maxNest) maxNest++;
		} else if (char === ')') {
			nest--;
		}
	}
	return maxNest;
}

// Functional version
export function maxDepthFunctional(targetString: string): number {
	return targetString
		.replace(/[^()]/, '')
		.split('')
		.map(bracket => (bracket === '(' ? 1 : -1))
		.reduce<number[]>((acc, curr, idx) => {
			return acc.concat(curr + (idx ? acc[idx - 1] : 0));
		}, [])
		.reduce((acc, curr) => Math.max(acc, curr), 0);
}

// ==================================================
