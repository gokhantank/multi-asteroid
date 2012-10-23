(function(root) {

/* 
 * Filling an entity's Body slot enables it to take physical form
 * in the simulation. The entity will still need a View to be rendered.
 */
var Body = Class.extend({

    // public properties
    entity: null,
    x: 0,
    y: 0,
    angle: 0,
    radius: 10,

    // constructor
    init: function(entity)
    {
        this.entity = entity;
    },

    testCollision: function(otherEntity)
    {
        var dx = 0,
            dy = 0;

        dx = this.x - otherEntity.getBody().x;
        dy = this.y - otherEntity.getBody().y;

        return Math.sqrt((dx * dx) + (dy * dy)) <= this.radius + otherEntity.getBody().radius;
    }

});

root.MultiAsteroid.Body = Body;

})(window);