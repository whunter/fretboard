var FretboardHandler = {
  $fretboard: null,
  width: null,
  height: null,
  drawer: null,
  init: function() {
    this.$fretboard = $('#fretboard');
    this.width = this.$fretboard.width();
    this.height = this.$fretboard.height();
    this.drawer = FretboardDrawer;
    this.drawer.init(this.$fretboard, this.width, this.height);
    this.drawer.draw();
  }
}