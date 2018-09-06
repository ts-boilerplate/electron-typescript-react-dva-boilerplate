import PATHS from "../constants/paths"
import { RENDERER_OUTPUT_FILE_NAME } from "../constants/names"
import { __DEV__ } from "../store/global"

const webpack = require( 'webpack' )
const CopyWebpackPlugin = require( "copy-webpack-plugin" )
const CleanWebpackPlugin = require( "clean-webpack-plugin" )


const {
  RENDERER_ENTRY_FILE,
  WEBPACK_HOT_MIDDLEWARE,
  RENDERER_OUTPUT,
  RENDERER_INDEX_HTML,
  RENDERER_OUTPUT_INDEX_HTML,
  RENDERER_TS_CONFIG,
} = PATHS

const webpackClientConfig = {
  mode  : __DEV__ ? 'development' : 'production',
  target: 'electron-renderer',
  entry : {
    [ RENDERER_OUTPUT_FILE_NAME ]: [ 
      RENDERER_ENTRY_FILE,
      WEBPACK_HOT_MIDDLEWARE,   
    ]
  },
  output: {
    path      : RENDERER_OUTPUT,
    filename  : '[name]',
    publicPath: '/'
  },
  devtool: __DEV__ ? 'source-map' : false,
  module : {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use : {
          loader : 'ts-loader',
          options: {
            configFile: RENDERER_TS_CONFIG
          }
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CopyWebpackPlugin( [
      {
        from: RENDERER_INDEX_HTML,
        to  : RENDERER_OUTPUT_INDEX_HTML
      }
    ],
   ),
  ].concat(
    __DEV__ ?
     [
      new webpack.HotModuleReplacementPlugin()
    ]:
    []    
  )
}


export default webpackClientConfig