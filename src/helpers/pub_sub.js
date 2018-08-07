// PubSub is an object with key value pairs where functions are the values. similar to a class with only static methods in Java 

const PubSub = {
  publish: function (channel, payload) {
      const event = new CustomEvent(channel, {
        detail: payload
      });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
