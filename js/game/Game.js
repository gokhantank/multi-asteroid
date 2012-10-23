function constructor(){
    render();
}

function startGame () {
    // It will be overwritten from the SpaceShipGame class
}
function stopGame () {
    // loop the entities and removechild them
}

function render () {
    // loop the entities and trigger their render() func.
}

function addEntity (entity) {
    // add to entities list
    entity.on('destroyed', onEntityDestroyed);
    // if a visible entity, add to stage
}

function onEntityDestroy (entity) {
    // remove event listener
    // remove from entities list
    // remove from stage (canvas)
}
