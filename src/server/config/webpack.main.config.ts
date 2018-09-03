import PATHS from "../constants/paths"
import { MAIN_OUTPUT_FILE_NAME } from "../constants/names"
import { __DEV__ } from "../store/global"
const {
  MAIN_ENTRY,
  MAIN_OUTPUT,
  MAIN_TS_CONFIG
} = PATHS

const webpackMainConfig = {
  mode  : 'development',
  target: 'electron-main',
  entry : MAIN_ENTRY,
  output: {
    path    : MAIN_OUTPUT,
    filename: MAIN_OUTPUT_FILE_NAME,
  },
  devtool: __DEV__ ? 'source-map' : false,
  module : {
    rules: [
      {
        test: /\.ts$/,
        use : {
          loader : 'ts-loader',
          options: {
            configFile: MAIN_TS_CONFIG
          },
        },
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json'
    ]
  },
}


export default webpackMainConfig