(function(root) {

var Entity = Class.extend({

    _body: null,
    _physics: null,
    _health: null,
    _weapon: null,
    _view: null,
    // @TODO: vectors? can we use TypedArray()
    _targets: null,
    _group: null,

    init: function()
    {
    },

    destroy: function()
    {
        PubSub.pub('destroyed', this);

        if ( this._group ) {
            this._group.splice( this._group.indexOf(this), 1 );
        }
    },

    update: function()
    {
        if (this._physics) {
            this._physics.update();
        }
    },

    render: function()
    {
        if (this._view) {
            this._view.render();
        }
    },

    // getters/setters
    // @TODO: try with EcmaScript 5 getters/setters
    getBody: function()
    {
        return this._body;
    },

    setBody: function(value)
    {
        this._body = value;
    },

    getPhysics: function()
    {
        return this._physics;
    },

    setPhysics: function(value)
    {
        this._physics = value;
    },

    getHealth: function()
    {
        return this._health;
    },

    setHealth: function(value)
    {
        this._health = value;
    },

    getWeapon: function()
    {
        return this._weapon;
    },

    setWeapon: function(value)
    {
        this._weapon = value;
    },

    getView: function()
    {
        return this._view;
    },

    setView: function(value)
    {
        this._view = value;
    },

    getTargets: function()
    {
        return this._targets;
    },

    setTargets: function(value)
    {
        this._targets = value;
    },

    getGroup: function()
    {
        return this._group;
    },

    setGroup: function(value)
    {
        this._group = value;
    }

});

root.MultiAsteroid.Entity = Entity;

})(window);