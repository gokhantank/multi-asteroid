(function(root) {

var View = Class.extend({

    // public properties
    entity: null,
    scale: 1,
    alpha: 0,
    sprite: null,

    // constructor
    init: function(entity)
    {
        this.entity = entity;
    },

    render: function()
    {
        // replace with canvas rendering logic

        /*sprite.x = entity.body.x;
        sprite.y = entity.body.y;
        sprite.rotation = entity.body.angle * (180 / Math.PI);
        sprite.alpha = alpha;
        sprite.scaleX = scale;
        sprite.scaleY = scale;*/
    }

});

root.MultiAsteroid.View = View;

})(window);