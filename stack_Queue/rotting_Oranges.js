var orangesRotting = function(grid) {
    let queue = [];  
    let maxMinutes = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col, 0]);
            }
        }
    }

    while (queue.length) {
        let [row, col, minutes] = queue.shift();
        makeOrangeRotten(row, col, minutes);
    }

    function makeOrangeRotten(row, col, minutes) {
        // top neighbor
        if (row - 1 >= 0 && grid[row - 1][col] === 1) {
            grid[row - 1][col] = 2;
            queue.push([row - 1, col, minutes + 1]);
        }
        // bottom neighbor
        if (row + 1 < grid.length && grid[row + 1][col] === 1) {
            grid[row + 1][col] = 2;
            queue.push([row + 1, col, minutes + 1]);
        }
        // left neighbor
        if (col - 1 >= 0 && grid[row][col - 1] === 1) {
            grid[row][col - 1] = 2;
            queue.push([row, col - 1, minutes + 1]);
        }
        // right neighbor
        if (col + 1 < grid[0].length && grid[row][col + 1] === 1) {
            grid[row][col + 1] = 2;
            queue.push([row, col + 1, minutes + 1]);
        }

        maxMinutes = Math.max(maxMinutes, minutes);
    }

    // Check if any fresh oranges are left
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }

    return maxMinutes;
};