const sketch = (p) => {
  let canvas;

  p.setup = () => {
    canvas = p.createCanvas(window.innerWidth, window.outerHeight);
    p.noStroke();
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.background('rgba(36, 0, 56, 0.9)');
    console.log(canvas);
  }

  p.draw = () => {
    
    p.ellipse(150, 100, 100, 100);
  }

  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(canvas) //Make sure the canvas has been created
      p.fill(newProps.color);
    
  }
}

export default sketch;