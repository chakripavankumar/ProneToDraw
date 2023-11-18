// next.config.js
module.exports = {
  // Other configurations...
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, '/');
    return config;
  },
};

