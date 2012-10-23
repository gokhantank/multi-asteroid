(function(root) {

var Weapon = Class.extend({

    // public properties
    entity: null,
    ammo: 0,

    // constructor
    init: function(entity)
    {
        this.entity = entity;
    },

    fire: function()
    {
        this.ammo -= 1;
    }

});

root.MultiAsteroid.Weapon = Weapon;

})(window);