const hasPathThroughMaze = (maze, start, destination) => {
    const visited = new Array(maze.length).fill(new Array(maze[0].length));
    return dfs(maze, start, destination, visited);
};

const dfs = (maze, start, destination, visited) => {
    console.log('%c...start', 'color:gold', start)
    if (visited[start[0]][start[1]]) {
        return false;
    }

    if (start[0] === destination[0] && start[1] === destination[1]) {
        console.log('%c...start', 'color:gold', start);
        return true;
    }

    visited[start[0]][start[1]] = true;
    let right = start[1] + 1, left = start[1] - 1, up = start[0] - 1, down = start[0] + 1;

    //right
    while (right < maze[0].length && maze[start[0]][right] === 0) {
        right++;
        if (dfs(maze, [ start[0], right - 1 ], destination, visited)) {
            return true;
        }
    }

    //left
    while (left >= 0 && maze[start[0]][left] === 0) {
        left--;
    if (dfs(maze, [ start[0], left + 1 ], destination, visited)) {
        return true;
    }
    }

    //up
    while (up >= 0 && maze[up][start[1]] === 0) {
        up--;
        if (dfs(maze, [ up + 1, start[1] ], destination, visited)) {
            return true;
        }
    }

    //down
    while (down < maze.length && maze[down][start[1]] === 0) {
        down++;
        if (dfs(maze, [ down - 1, start[1] ], destination, visited)) {
            return true;
        }
    }

    return false;
};

const hasPath = hasPathThroughMaze([ [ 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 0 ], [ 1, 1, 0, 1, 1 ], [ 0, 0, 0, 0, 0 ] ],
                                   [ 0, 4 ],
                                   [ 4, 4 ]);
console.log('%c...has-path', 'color:gold', hasPath);
