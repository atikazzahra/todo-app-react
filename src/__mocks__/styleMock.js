module.exports = {
  process(_src, filename, _config, _options) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
