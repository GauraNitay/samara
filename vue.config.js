const { defineConfig } = require('@vue/cli-service')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/samara/'
    : '/'
};
