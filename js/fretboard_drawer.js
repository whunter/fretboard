var FretboardDrawer = {
  width: null,
  height: null,
  $fretboard: null,
  $fretboardCanvas: null,
  fretboardCtx: null,
  stringData: null
  init: function(fretboard, width, height) {
    this.$fretboard = fretboard;
    this.width = width;
    this.height = height;
    this.stringData = {
      E:{},a:{},d:{},g:{},b:{},e:{}
    };
  },
  draw: function() {
    this.createCanvas();
    this.drawStrings();
  },
  createCanvas: function() {
    this.$fretboardCanvas = $('<canvas>');
    this.fretboardCtx = this.$fretboardCanvas[0].getContext('2d')
    this.$fretboardCanvas.attr('width', this.width);
    this.$fretboardCanvas.attr('height', this.height);
    this.$fretboard.append(this.$fretboardCanvas);
  },
  drawStrings: function() {
    var yInterval = this.height / 5;
    
  }
}