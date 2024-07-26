// program1.js

function getTotalIsles(grid) {
  if (!grid || grid.length === 0){
    return 0;
  } 

  let totalIsles = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to perform DFS on the grid
  function dfs(i, j) {
      // Check for out-of-bounds or water
      if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W'){
        return;
      } 

      // Mark the cell as visited by changing 'L' to 'W'
      grid[i][j] = 'W';

      // Explore all four directions
      dfs(i - 1, j); 
      dfs(i + 1, j); 
      dfs(i, j - 1); 
      dfs(i, j + 1); 
  }

  // Iterate over each cell in the grid
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 'L') {
              // Found an unvisited island part
              totalIsles++;
              dfs(i, j); // Perform DFS to mark the entire island
          }
      }
  }

  return totalIsles;
}

module.exports = getTotalIsles;
