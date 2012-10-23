(function(root) {

/* 
 * Filling an entity's Body slot enables it to take physical form
 * in the simulation. The entity will still need a View to be rendered.
 */
var Game = Class.extend({

    // public properties
    entities: [],
    isPaused: false,

    // constructor
    init: function()
    {
        this.loop();
        // @TODO: canvas, what goes here?
        // addEventListener(Event.ADDED_TO_STAGE, onAddedToStage);
    },

    loop: function()
    {
        if ( this.isPaused ) return;

        this.update();
        this.render();

        requestAnimFrame( this.loop );
    },

    update: function()
    {
        for (var i = 0, l = this.entities.length; i < l; i++) {
            this.entities[i].update();
        }
    },

    render: function()
    {
        for (var i = 0, l = this.entities.length; i < l; i++) {
            this.entities[i].render();
        }
    },

    onAddedToStage: function()
    {
        // @TODO: canvas, what goes here?
        //Game.stage = stage;
        //startGame();
    },

    startGame: function()
    {
        // It will be overwritten from the SpaceShipGame class
    },

    stopGame: function()
    {
        for (var i = 0, l = this.entities.length; i < l; i++) {
            var entView = this.entities[i].getView();
            if ( entView) {
                // @TODO: what goes here for canvas?
                // removeChild( entView.sprite );
            }
        }
    },

    addEntity: function(entity)
    {
        this.entities.push( entity );
        // @TODO: do we want to order by z-index here?
        entity.sub('destroyed', function(destroyedEntity) {
            this.onEntityDestroyed( destroyedEntity );
        });
        // @TODO: whaaa?
        // entity.entityCreated.add(addEntity);
        if ( entity.getView() ) {
            // @TODO: canvas, what to do here?
            // addChild(entity.view.sprite);
        }

        return entity;
    },

    onEntityDestroyed: function(entity)
    {
        // remove the entity reference from our entity list
        this.entities.splice( entities.indexOf( entity ), 1 );

        // remove the entity from the canvas stage
        if ( entity.getView() ) {
            // @TODO: canvas, what to do here?
            // addChild(entity.view.sprite);
        }

        // @TODO: unbind entity event listeners
        // my pubsub implementation doesn't have an unbind method :(
    }

});

// static var
Game.stage = null;

root.MultiAsteroid.Game = Game;

})(window);