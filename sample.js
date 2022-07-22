const lonestPal = (str) => {
    let palindrome;
    const n = str.length;
    let dp = Array(n).fill(0).map(() => Array(n).fill(false));
    console.log("dp1", dp);
    //case one: "a", "b"
    for (i = 0; i < n; i++) {
        dp[i][i] = true;
        palindrome = str[i]
    }

    //case two: "ab", "aa"
    for (let r = 0; r < n; r++) {
        for (let c = r + 1; c > r; c--) {
            if (str[r] == str[c]) {
                dp[r][c] = true;
                palindrome = str.substring(r, c + 1);
            }
        }
    }

    //case three: "cbdb", "babad", "auhuhub", "aaaabbaa"
    for (let c = 2; c < n; c++) {
        for (let r = 0; r + c < n; r++) {
            const w = r + c;
            if (str[r] == str[w] && dp[r + 1][w - 1]) {
                console.log("c", c);
                console.log("w", w);
                dp[r][w] = true;
                const newPal = str.substring(r, w + 1);
                if (newPal.length > palindrome.length) {
                    palindrome = newPal;
                }
            }
        }
    }
    console.log("dp2", dp);

    return palindrome;
}

// console.log({
// ['a']: lonestPal("a"),
// ['ac']: lonestPal("ac"),
// ['aa']: lonestPal("aa"),
// ['aaa']: lonestPal('aaa')
// ['cbbd']: lonestPal("cbbd"),
// ['babad']: lonestPal("babad"),
// ['aaaabbaa']: lonestPal("aaaabbaa")
// })


const longestPalSubStr = (str) => {
    let palindrome;
    let n = str.length;
    let dp = Array(n).fill(0).map(() => Array(n).fill(0));
    let palWord = '';
    palWord.length = n;
    console.log("dp1", dp);

    for (let i = 0; i < n - 1; i++) {
        dp[i][i] = 1;
    }

    for (let c = 1; c < n; c++) {
        for (let r = 0; r + c < n; r++) {
            let w = r + c;
            if (str[r] == str[w]) {
                dp[r][w] = dp[r + 1][w - 1] + 2;
                // palWord = [palWord.slice(0, r+1),str[r+1],palWord.slice(w-1,n)].join("");
                // palWord = str.slice(r, w+1);
                // console.log("r+1", r+1);
                // console.log("w-1", w-1);
                // console.log("str",str);
                // console.log("str.slice(r, w)", str.slice(r, w+1));
            } else {
                dp[r][w] = Math.max(dp[r][w - 1], dp[r + 1][w])
                // if(dp[r][w-1] > dp[r+1][w]){
                //     palWord = [palWord.slice(0, r),str[r],palWord.slice(w-1,n)].join("");
                // } else {
                //     palWord = [palWord.slice(0, r+1),str[r+1],palWord.slice(w,n)].join("");
                // }
            }
        }
    }

    console.log("dp2", dp);

    return dp[0][n - 1];
    // return palWord;
}

// console.log({
// ["bbab"]: longestPalSubStr("bbab"),
// ["bbbab"]: longestPalSubStr("bbbab"),
// ["cbbd"]: longestPalSubStr("cbbd"),
// ["ab"]: longestPalSubStr("ab"),
// ["aa"]: longestPalSubStr("aa"),
// ["a"]: longestPalSubStr("a"),
// ["abcdef"]: longestPalSubStr("abcdef"),
// ["agbdba"]: longestPalSubStr("agbdba")
// })

/************************ --- 0/1 KnapSack DP Problem --- *********************************/
// A Dynamic Programming based solution
// for 0-1 Knapsack problem

// A utility function that returns
// maximum of two integers
function max(a, b, i, w) {
    // console.log("a", a);
    // console.log("b", b);
    if ((a && a > 0) && (b && b > 0)) {
        return (a > b) ? a : b;
    } else {
        return (a && (a > 0)) ? a : b;
    }

}

// Returns the maximum value that can
// be put in a knapsack of capacity W
function knapSack(W, wt, val, n) {
    let i, w;
    let K = new Array(n + 1).fill(0).map(() => new Array(W + 1).fill(0));

    // Build table K[][] in bottom up manner
    for (i = 0; i <= n; i++) {
        // K[i] = new Array(W + 1);
        for (w = 0; w <= W; w++) {
            // console.log("i", i);
            // console.log("w", w);
            // console.log("K", K);
            if (i == 0 || w == 0)
                K[i][w] = 0;
            else if (wt[i - 1] <= w) {
                K[i][w]
                    = max(val[i - 1]
                        + K[i - 1][w - wt[i - 1]],
                        K[i - 1][w], i, w);
                // K[i][w]
                //     = max(K[i - 1, w],
                //         + K[i - 1][w - wt[i]] + val[i], i, w);

                console.log(`K[i][w] K[${i}][${w}] = ${K[i][w]}`);
            }
            else
                K[i][w] = K[i - 1][w];
        }

        // console.log("i",i);
        // console.log("K",K);
        // console.log("wt",wt);
    }

    return K[n][W];
}

function knapSackCustom(W, wt, val, n) {
    let dp = Array(n + 1).fill(0).map(() => Array(W + 1).fill(0));
    for (let i = 0; i < n + 1; i++) {
        for (let w = 0; w < W + 1; w++) {
            // console.log(`(i,w) (${i},${w})`);
            // console.log("dp", dp);
            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - wt[i]] + val[i], i, w);
        }
    }

    return dp[n][W];
}

let val = [60, 100, 120];
let wt = [1, 2, 3];
let W = 5;
let n = val.length;
// console.log(knapSackCustom(W, wt, val, n));
/************************ --- 0/1 KnapSack DP Problem --- *********************************/


/************************ --- Sudset Sum DP Problem --- *********************************/
subsetSum = (subset, total, n) => {
    let dp = Array(n + 1).fill(0).map(() => Array(total + 1).fill(0));

    //fill 1st row as false
    for (let i = 0; i < total + 1; i++) {
        dp[0][i] = false;
    }

    //fill 1st column as true
    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = true;
    }

    //DP solution for subset sum
    for (let r = 1; r < n + 1; r++) {
        for (let c = 1; c < total + 1; c++) {
            // fill the above row value
            dp[r][c] = dp[r - 1][c];

            //DP solution
            if (dp[r][c] == false && c >= subset[r - 1]) {
                dp[r][c] = dp[r - 1][c] || dp[r - 1][c - subset[r - 1]]
            }
        }
    }

    console.log("dp", dp);
    return dp[n][total];
}
let subset = [3, 2, 7, 1];
let total = 5;
let nos = subset.length;
// console.log({
//     subset: [3,2,7,1],
//     total: 5,
//     nos: subset.length,
//     ans: subsetSum(subset, total, nos)
// })
/************************ --- Sudset Sum DP Problem --- *********************************/

/************************ --- LEETCODE - 198 - House Robber --- *********************************/
robberMoneyWithoutCaught = (moneyInHouse) => {

    if (!moneyInHouse.length) return 0;
    if (moneyInHouse.length == 1) return moneyInHouse[0];
    if (moneyInHouse.length == 2) return Math.max(moneyInHouse[0], moneyInHouse[1]);

    let dp = Array(2).fill(0).map(() => Array(moneyInHouse.length).fill(0));
    //fill the value in first row
    dp[0] = dp[0].map((v, i) => {
        return moneyInHouse[i];
    });

    //DP solution
    /*for(let c=0; c<moneyInHouse.length; c++){
        if(c < 2){
            dp[1][c] = dp[0][c];
        } else {
            c == 2 ?
            dp[1][c] = dp[0][c] + dp[1][c-2]
            :
            dp[1][c] = dp[0][c] + Math.max(dp[1][c-2], dp[1][c-3])                    
        }        
    }*/
    for (let i = 2; i < moneyInHouse.length; i++) {
        moneyInHouse[i] = Math.max(moneyInHouse[i - 2] + moneyInHouse[i], (moneyInHouse[i - 3] || 0) + moneyInHouse[i]);
    }
    /*console.log("dp",dp);*/
    console.log("moneyInHouse", moneyInHouse);
    /*console.log("Maximum money Can robber is : ",Math.max(dp[1][moneyInHouse.length - 1], dp[1][moneyInHouse.length - 2]))*/
    console.log("Maximum money Can robber is : ", Math.max(moneyInHouse[moneyInHouse.length - 1], moneyInHouse[moneyInHouse.length - 2]));
}

let moneyInHouse = [2, 1, 2, 1, 1, 2, 1, 2, 1, 2];
// let moneyInHouse = [2,7,9,3,1];
// robberMoneyWithoutCaught(moneyInHouse);
/************************ --- LEETCODE - 198 - House Robber --- *********************************/

/************************ --- Coin Changing Minimum Number of Coins --- *********************************/

coinChangeMinCoin = (coins, coinsTotal) => {
    let noOfCoins = coins.length;
    let dp = Array(noOfCoins).fill(false).map(() => Array(coinsTotal).fill(false));
    //fill first column as 0
    for (let r = 0; r < noOfCoins; r++) {
        dp[r][0] = 0;
    }

    for (let r = 0; r < noOfCoins; r++) {
        for (let c = 0; c < coinsTotal; c++) {
            console.log("r", r);
            console.log("c", c);
            console.log("dp", dp);
            if (c <= coins[r]) {
                if (r > 0)
                    dp[r][c] = dp[r][c - coins[r]];
                else
                    dp[r][c] = Math.min(dp[r][c - coins[r]], 0)
            } else {
                dp[r][c] = dp[r - 1][c];
            }
        }
    }

    console.log("dp", dp);
    console.log("Minimum No.Of coins that sums to ", coinsTotal, " is ", dp[noOfCoins][coinsTotal]);
}

let coins = [1, 5, 6, 8];
let coinsTotal = 11;
// coinChangeMinCoin(coins, coinsTotal);
/************************ --- Coin Changing Minimum Number of Coins --- *********************************/

/************************ --- CTCI - Big O - VI.9 -57 --- *********************************/
copyArray = (arr) => {
    let copy = new Int32Array(0);
    for (let value of arr) {
        copy = appendToNew(copy, arr);
    }
    return copy;
}

appendToNew = (arr, value) => {
    bigger = new Int32Array(arr.length + 1);
    for(let i =0 ; i< arr.length; i++){
        bigger[i] = arr[i];
    }

    bigger[bigger.length - 1] = value;
    return bigger;
}
console.log(copyArray([1,2,3,4,5,6]));
/************************ --- CTCI - Big O - VI.9 -57 --- *********************************/

