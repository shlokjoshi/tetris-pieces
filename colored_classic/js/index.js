

function square(context, x, y, width, height) {

  var unitWidth = 0.125 * width;
  
  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#EDBF3B";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

}

function jay(context, x, y, width, height) {

  var unitWidth = 0.125 * width;

  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#3B78A7";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#fff";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function ell(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);
  
  context.fillStyle = "#B82C2D";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

}

function zee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#EDBF3B";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
  
}

function ess(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#C24175";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#fff";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function tee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#498E4D";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#fff";

  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, height - unitWidth * 4);
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth * 4, unitWidth);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 5, unitWidth * 4, unitWidth);
  context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 3, unitWidth, unitWidth * 3);

}

var eyes = [
  //h1
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 3, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 3, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);

    
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 7, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);
    

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;

    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 7, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);
  },

  // v1
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth, unitWidth, unitWidth);
    
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 3, height * y, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 7, unitWidth, unitWidth);
  
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 3, height * y, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 7, unitWidth, unitWidth);
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height - unitWidth);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
  }
]

var drawFunctions = [

  square,

  jay,

  ell,

  zee,

  ess,

  tee,

  eyes

]

function DrawFunctions(){};

DrawFunctions.prototype.getDrawFunction = function(index){

  if( drawFunctions[index]) {
    return drawFunctions[index];
  } else {
    return drawFunctions[5];
  }
}
/**
 * Grid
 * - Manages the state of the grid
 */

// Init
function Grid(rows, columns){
  
  this.rows = rows;
  this.columns = columns;
  this.cells = new Array(rows);

  // For each row!
  // Has a column
  // Which has X cells in it.
  for (var r = 0; r < this.rows; r++) {
    
    this.cells[r] = new Array(this.columns);
    for(var c = 0; c < this.columns; c++){
      this.cells[r][c] = 0;
    }
  }

};

// Methods
Grid.prototype.clone = function(){
  var _grid = new Grid(this.rows, this.columns);
  for (var r = 0; r < this.rows; r++) {
    for(var c = 0; c < this.columns; c++){
      _grid.cells[r][c] = this.cells[r][c];
    }
  }
  return _grid;
};

// Clear spaces in the grid, including when the blocks "fall"
Grid.prototype.clearLines = function(){
  
  var distance = 0;
  var row = new Array(this.columns);
  
  for(var r = this.rows - 1; r >= 0; r--){
  
    // Clear full line
    if (this.isLine(r)){
      
      distance++;
      for(var c = 0; c < this.columns; c++){
      this.cells[r][c] = 0;
      }

    // Clear moved spaces
    } else if (distance > 0) {
      
      for(var c = 0; c < this.columns; c++){
        this.cells[r + distance][c] = this.cells[r][c];
        this.cells[r][c] = 0;
      }
    }
  }
};

// If every item in the row has an item!
Grid.prototype.isLine = function(row){
  for(var c = 0; c < this.columns; c++){
  if (this.cells[row][c] == 0){
    return false;
  }
  }
  return true;
};

Grid.prototype.isEmptyRow = function(row){
  for(var c = 0; c < this.columns; c++){

    // TH: != 0 rather than == 1
    if (this.cells[row][c] != 0){
      return false;
    }
  }
  return true;
};

Grid.prototype.exceeded = function(){
  return !this.isEmptyRow(0) || !this.isEmptyRow(1);
};

Grid.prototype.height = function(){
  var r = 0;
  for(; r < this.rows && this.isEmptyRow(r); r++);
  return this.rows - r;
};

Grid.prototype.lines = function(){
  var count = 0;
  for(var r = 0; r < this.rows; r++){
    if (this.isLine(r)){
      count++;
    }
  }
  return count;
};

Grid.prototype.holes = function(){
  var count = 0;
  
  for(var c = 0; c < this.columns; c++){
    var block = false;
    for(var r = 0; r < this.rows; r++){
      
      // TH: != 0 rather than == 1
      if (this.cells[r][c] != 0) {
        block = true;
      }else if (this.cells[r][c] == 0 && block){
        count++;
      }
    }
  }
  return count;
};

Grid.prototype.blockades = function(){
  var count = 0;
  
  for(var c = 0; c < this.columns; c++){
    var hole = false;
    for(var r = this.rows - 1; r >= 0; r--){
      if (this.cells[r][c] == 0){
        hole = true;

      // TH: != 0 rather than == 1
      }else if (this.cells[r][c] != 0 && hole){
        count++;
      }
    }
  }
  return count;
}

Grid.prototype.aggregateHeight = function(){
  var total = 0;
  
  for(var c = 0; c < this.columns; c++){
    total += this.columnHeight(c);
  }
  return total;
};

Grid.prototype.bumpiness = function(){
  var total = 0;
  for(var c = 0; c < this.columns - 1; c++){
    total += Math.abs(this.columnHeight(c) - this.columnHeight(c+ 1));
  }
  return total;
}

Grid.prototype.columnHeight = function(column){
  var r = 0;

  for(; r < this.rows && this.cells[r][column] == 0; r++);
  return this.rows - r;
};

// Piece
Grid.prototype.addPiece = function(piece) {

  for(var r = 0; r < piece.cells.length; r++) {
    for (var c = 0; c < piece.cells[r].length; c++) {
      
      var _r = piece.row + r;
      var _c = piece.column + c;

      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0 && _r >= 0){

        // TH: Updates color, rather than 1
        if (piece.cells[r][c] > 1) {
          var num = piece.cells[r][c] - 2;
          this.cells[_r][_c] = piece.color[num];
        } else {
          this.cells[_r][_c] = piece.color;
        }
      }

    }
  }
};

Grid.prototype.valid = function(piece){
  
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c < this.columns && _r < this.rows && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveDown = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r + 1;
      var _c = piece.column + c;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0 && _r >= 0){
        
        if (!(_r < this.rows && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveLeft = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c - 1;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c >= 0 && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveRight = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c + 1;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c >= 0 && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.rotateOffset = function(piece){
  
  console.log("rotate?");

  var _piece = piece.clone();
  _piece.rotate(1);
  if (this.valid(_piece)) {
    return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
  }

  // Kicking
  var initialRow = _piece.row;
  var initialCol = _piece.column;

  for (var i = 0; i < _piece.dimension - 1; i++) {
    _piece.column = initialCol + i;
    if (this.valid(_piece)) {
      return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
    }

    for (var j = 0; j < _piece.dimension - 1; j++) {
      _piece.row = initialRow - j;
      if (this.valid(_piece)) {
        return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
      }
    }
    _piece.row = initialRow;
  }
  _piece.column = initialCol;

  for (var i = 0; i < _piece.dimension - 1; i++) {
    _piece.column = initialCol - i;
    if (this.valid(_piece)) {
      return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
    }

    for (var j = 0; j < _piece.dimension - 1; j++) {
      _piece.row = initialRow - j;
      if (this.valid(_piece)) {
        return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
      }
    }
    _piece.row = initialRow;
  }
  _piece.column = initialCol;

  return null;
};

/**
 * Piece
 * - Represents a single piece on the board.
 */

// Object that represents a single piece & its properties.
function Piece(cells, color){
  this.cells = cells;
  this.dimension = this.cells.length;
  this.row = 0;
  this.column = 0;
  this.color = color;
};

Piece.fromIndex = function(index, color){
  
  var cells

  switch (index){
    case 0:// O
      cells = [
        [1, 1],
        [1, 1]
      ];
      break;
    case 1: // J
      cells = [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 2: // L
      cells = [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 3: // Z
      cells = [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 4: // S
      cells = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ];
      break;
    case 5: // T
      cells = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 6: // I
      cells = [
        [0, 0, 0, 0],
        [2, 3, 4, 5],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      break;

  }

  var piece = new Piece(cells, color);

  piece.row = 0;
  piece.column = Math.floor((10 - piece.dimension) / 2); // Centralize
  return piece;
};

Piece.prototype.clone = function(){
  
  var _cells = new Array(this.dimension);
  for (var r = 0; r < this.dimension; r++) {
    _cells[r] = new Array(this.dimension);
    for(var c = 0; c < this.dimension; c++){
      _cells[r][c] = this.cells[r][c];
    }
  }

  var piece = new Piece(_cells, this.color);
  piece.row = this.row;
  piece.column = this.column;
  return piece;
};

Piece.prototype.rotate = function(rotations){
  for(var i = 0; i < rotations; i++) {
    var _cells = new Array(this.dimension);
    for (var r = 0; r < this.dimension; r++) {
      _cells[r] = new Array(this.dimension);
    }

    switch (this.dimension) { // Assumed square matrix
      case 2:
        _cells[0][0] = this.cells[1][0];
        _cells[0][1] = this.cells[0][0];
        _cells[1][0] = this.cells[1][1];
        _cells[1][1] = this.cells[0][1];
        break;
      case 3:
        _cells[0][0] = this.cells[2][0];
        _cells[0][1] = this.cells[1][0];
        _cells[0][2] = this.cells[0][0];
        _cells[1][0] = this.cells[2][1];
        _cells[1][1] = this.cells[1][1];
        _cells[1][2] = this.cells[0][1];
        _cells[2][0] = this.cells[2][2];
        _cells[2][1] = this.cells[1][2];
        _cells[2][2] = this.cells[0][2];
        break;
      case 4:
        _cells[0][0] = this.cells[3][0];
        _cells[0][1] = this.cells[2][0];
        _cells[0][2] = this.cells[1][0];
        _cells[0][3] = this.cells[0][0];
        _cells[1][3] = this.cells[0][1];
        _cells[2][3] = this.cells[0][2];
        _cells[3][3] = this.cells[0][3];
        _cells[3][2] = this.cells[1][3];
        _cells[3][1] = this.cells[2][3];
        _cells[3][0] = this.cells[3][3];
        _cells[2][0] = this.cells[3][2];
        _cells[1][0] = this.cells[3][1];

        _cells[1][1] = this.cells[2][1];
        _cells[1][2] = this.cells[1][1];
        _cells[2][2] = this.cells[1][2];
        _cells[2][1] = this.cells[2][2];
        break;
    }

    this.cells = _cells;
  }
};

/**
 * Game manager, manages flow and updating of game.
 */

function GameManager(){

  this.gridCanvas = document.getElementById('grid-canvas');

  this.gravityUpdater = new Updater();

  this.gravityUpdater.onUpdate(function(){
    self.applyGravity();
    self.actuate();
  });

  var self = this;
  this.setup();
  this.startAI();
  this.gravityUpdater.checkUpdate(Date.now());
};

GameManager.prototype.setup = function(){

  this.baseColumns = 8;

  this.pieceWidth = window.innerWidth / this.baseColumns;
  this.pieceHeight = this.pieceWidth;

  this.displacementWidth = Math.floor(this.pieceWidth / 4);

  var canvasHeightPieces = Math.ceil(window.innerHeight / this.pieceHeight) + 2;

  this.gridCanvas.width = window.innerWidth;
  this.gridCanvas.height = canvasHeightPieces * this.pieceHeight;

  this.grid = new Grid(canvasHeightPieces, this.baseColumns);
  this.rpg = new RandomPieceGenerator();
  this.ai = new AI(0.510066, 0.760666, 0.35663, 0.184483);
  
  this.workingPieces = [this.rpg.nextPiece(), this.rpg.nextPiece()];
  this.workingPiece = this.workingPieces[0];

  this.isOver = true;

  this.stopAI();
  this.actuate();
};

GameManager.prototype.actuate = function(){
  
  var _grid = this.grid.clone();
  
  if (this.workingPiece != null) {
    _grid.addPiece(this.workingPiece);
  }

  var context = this.gridCanvas.getContext('2d');
  context.save();
  
  context.clearRect(0, 0, this.gridCanvas.width, this.gridCanvas.height);
  
  for(var r = 2; r < _grid.rows; r++){
    
    for(var c = 0; c < _grid.columns; c++){
      
      if (_grid.cells[r][c] != 0){


        // console.log(_grid.cells[r], _grid.cells[r][c]);
        _grid.cells[r][c](context, c, r, this.pieceWidth, this.pieceHeight);
        
      }
    }
  }

  context.restore();
};

GameManager.prototype.startAI = function(){
  this.aiActive = true;
};

GameManager.prototype.stopAI = function(){
  this.aiActive = false;
};

GameManager.prototype.setWorkingPiece = function(){

  this.grid.addPiece(this.workingPiece);
  this.grid.clearLines();

  if (!this.grid.exceeded()){
    
    for(var i = 0; i < this.workingPieces.length - 1; i++){
      this.workingPieces[i] = this.workingPieces[i + 1];
    }

    this.workingPieces[this.workingPieces.length - 1] = this.rpg.nextPiece();
    this.workingPiece = this.workingPieces[0];

    if (this.aiActive) {
      this.aiMove();
    }

    // I piece
    if( this.workingPiece.cells.length > 3) {

      if( this.workingPiece.cells[0][2] !== 0 ) {
        this.workingPiece.cells[0][2] = 6;
        this.workingPiece.cells[1][2] = 7;
        this.workingPiece.cells[2][2] = 8;
        this.workingPiece.cells[3][2] = 9;
      }
    }
  }

  // TODO: NO WAYYYY
  else{

  }
};

GameManager.prototype.applyGravity = function(){
  
  if (this.grid.canMoveDown(this.workingPiece)) {
    this.workingPiece.row++;
  }else{
    this.setWorkingPiece();
  }

};

GameManager.prototype.drop = function(){
  while(this.grid.canMoveDown(this.workingPiece)){
    this.workingPiece.row++;
  }
};

GameManager.prototype.moveLeft = function(){
  if (this.grid.canMoveLeft(this.workingPiece)){
    this.workingPiece.column--;
  }
};

GameManager.prototype.moveRight = function(){
  if (this.grid.canMoveRight(this.workingPiece)){
    this.workingPiece.column++;
  }
};

GameManager.prototype.rotate = function(){
  var offset = this.grid.rotateOffset(this.workingPiece);
  if (offset != null){
    this.workingPiece.rotate(1);
    this.workingPiece.row += offset.rowOffset;
    this.workingPiece.column += offset.columnOffset;
  }
};

GameManager.prototype.aiMove = function(){
  this.workingPiece = this.ai.best(this.grid, this.workingPieces, 0).piece;
};

function RandomPieceGenerator(){
  Math.seed
  this.bag = [0, 1, 2, 3, 4, 5, 6];
  this.shuffleBag();
  this.index = -1;

  this.drawFunctions = new DrawFunctions();
};

RandomPieceGenerator.prototype.nextPiece = function(){
  
  this.index++;
  if (this.index >= this.bag.length){
    this.shuffleBag();
    this.index = 0;
  }

  return Piece.fromIndex(this.bag[this.index], this.drawFunctions.getDrawFunction(this.bag[this.index]));

};

RandomPieceGenerator.prototype.shuffleBag = function() {
  var currentIndex = this.bag.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.bag[currentIndex];
    this.bag[currentIndex] = this.bag[randomIndex];
    this.bag[randomIndex] = temporaryValue;
  }
};
function AI(heightWeight, linesWeight, holesWeight, bumpinessWeight){
  
  this.heightWeight = heightWeight;
  this.linesWeight = linesWeight;
  this.holesWeight = holesWeight;
  this.bumpinessWeight = bumpinessWeight;

};

AI.prototype.best = function(grid, workingPieces, workingPieceIndex){
  
  var best = null;
  var bestScore = null;
  var workingPiece = workingPieces[workingPieceIndex];

  for(var rotation = 0; rotation < 4; rotation++){
    var _piece = workingPiece.clone();
    _piece.rotate(rotation);

    while(grid.canMoveLeft(_piece)){
      _piece.column --;
    }

    while(grid.valid(_piece)){
      var _pieceSet = _piece.clone();
      while(grid.canMoveDown(_pieceSet)){
        _pieceSet.row++;
      }

      var _grid = grid.clone();
      _grid.addPiece(_pieceSet);

      var score = null;
      if (workingPieceIndex == (workingPieces.length - 1)) {
        score = -this.heightWeight * _grid.aggregateHeight() + this.linesWeight * _grid.lines() - this.holesWeight * _grid.holes() - this.bumpinessWeight * _grid.bumpiness();
      }else{
        score = this.best(_grid, workingPieces, workingPieceIndex + 1).score;
      }

      if (score > bestScore || bestScore == null){
        bestScore = score;
        best = _piece.clone();
      }

      _piece.column++;
    }
  }

  return {piece:best, score:bestScore};
};
/**
 * Updater, controls time and speed.
 */

function Updater() {
  this.lastUpdateTime = Date.now();
  this.deltaThreshold = 250; // MS before each update
  this.updateCallback = null;

  window.requestAnimFrame = (function() {
    // Polyfill
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
}

Updater.prototype.onUpdate = function(callback) {
  this.updateCallback = callback;
};

Updater.prototype.doUpdate = function(timestamp) {
  if (this.updateCallback != null) {
    this.updateCallback();
  }

  this.lastUpdateTime = timestamp;
};

Updater.prototype.checkUpdate = function(timestamp) {
  var self = this;
  var delta = timestamp - this.lastUpdateTime;

  if (delta > this.deltaThreshold) {
    this.doUpdate(timestamp);
  }

  window.requestAnimFrame(function() {
    self.checkUpdate(Date.now());
  });
};
