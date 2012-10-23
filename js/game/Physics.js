(function(root) {

/* 
 * Basic physics movement minus collision detection.
 * Extend to add collision detection.
 */
var Physics = Class.extend({

    // public properties
    entity: null,
    drag: 1,
    velocityX: 0,
    velocityY: 0,

    // constructor
    init: function(entity)
    {
        this.entity = entity;
    },

    update: function()
    {
        this.entity.getBody().x += this.velocityX;
        this.entity.getBody().y += this.velocityY;

        this.velocityX *= this.drag;
        this.velocityY += this.drag;
    },

    thrust: function(power)
    {
        this.velocityX += Math.sin( -this.entity.getBody().angle ) * power;
        this.velocityY += Math.sin( -this.entity.getBody().angle ) * power;
    }

});

root.MultiAsteroid.Physics = Physics;

})(window);