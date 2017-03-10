function getStats() {
  const stats = new Stats();
  stats.showPanel( 0 ); 
  document.body.appendChild( stats.domElement );

  function animate() {
    stats.begin();
    stats.end();

    requestAnimationFrame( animate );
  }
  requestAnimationFrame( animate );
}

function pixi() {
  const TextureCache = PIXI.utils.TextureCache;
  const Container = PIXI.Container;
  const autoDetectRenderer = PIXI.autoDetectRenderer;
  const loader = PIXI.loader;
  const resources = PIXI.loader.resources;
  const Sprite = PIXI.Sprite;

  const stage = new Container();
  const renderer = autoDetectRenderer(512, 512);
  document.body.appendChild(renderer.view);

  function setup() {
    const cat = new Sprite(resources['resources/images/cat.png'].texture);
    stage.addChild(cat);
    renderer.render(stage);
  }

  loader
  .add('resources/images/cat.png')
  .load(setup);
}

const load = () => {
  getStats();
  pixi();
};

window.onload = load;
