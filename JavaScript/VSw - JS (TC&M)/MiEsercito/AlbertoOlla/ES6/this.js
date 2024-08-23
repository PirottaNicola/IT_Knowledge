//es5
const foot = {
    kick: function() {
        this.yelp = "ouch!";
        setImmediate(function() {
            console.log(this.yelp);
        });
    }
};
foot.kick();


//es6
const foot = {
    kick: function() {
        this.yelp = "ouch!";
        setImmediate(() => ole.log(this.yelp));
    }

};
foot.kick();