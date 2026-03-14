
/* Iterate through each row (0 to 6) of the 7x7 grid */
for(let i = 0; i < 7; i++) {
    let str = '';
    /* Iterate through each column (0 to 6) of the current row */
    for(let j = 0; j < 7; j++) {
        /* Calculate the minimum distance from current cell (i,j) to any border of the grid */
        /* - i represents distance from top border */
        /* - j represents distance from left border */
        /* - (6-i) represents distance from bottom border (since last row index is 6) */
        /* - (6-j) represents distance from right border (since last col index is 6) */
        /* Math.min() selects the closest border distance */
        const distanceFromEdge = Math.min(i, j, 6 - i, 6 - j);
        str += (4 - distanceFromEdge) + ' ';
    }
    console.log(str);
}
