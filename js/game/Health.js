(function(root) {

var Health = Class.extend({

    // public properties
    entity: null,
    hitpoints: 0,

    // constructor
    init: function(entity)
    {
        this.entity = entity;
    },

    hit: function(damage)
    {
        this.hitpoints -= damage;
        PubSub.pub( 'hurt', this );

        if ( this.hitpoints < 0 ) {
            PubSub.pub( 'died', this );
        }
    }

});

root.MultiAsteroid.Health = Health;

})(window);