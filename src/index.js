module.exports = function (bundler) {
    bundler.addAssetType('sve', require.resolve('./SvelteAsset'));
};
