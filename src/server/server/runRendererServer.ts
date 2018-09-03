import PATHS from "../constants/paths"

const express = require( "express" )
const PATH = require( "path" )
const { resolve: resolvePath } = PATH
const webpack = require( "webpack" )
import webpackConfig from "../config/webpack.renderer.config"
import { PORT } from "../../../config"
import { __DEV__ } from "../store/global"

const { RENDERER_OUTPUT, RENDERER_OUTPUT_INDEX_HTML } = PATHS

export default function() {
  const compiler = webpack( webpackConfig )

  if ( !__DEV__ ) {
    compiler.run( ( err, stats ) => {
      if ( err ) {
        console.error( err )
        return
      }

      console.log(
        stats.toString( {
          chunks: false,
          colors: true
        } )
      )
    } )
    return
  }

  if ( __DEV__ ) {
    const app = express()

    // webpck hmr
    app.use(
      require( "webpack-dev-middleware" )( compiler, {
        noInfo    : true,
        publicPath: webpackConfig.output.publicPath
      } )
    )

    app.use( require( "webpack-hot-middleware" )( compiler ) )

    app.use( "/build", express.static( RENDERER_OUTPUT ) )

    app.get( "/", ( req, res ) => {
      res.sendFile( RENDERER_OUTPUT_INDEX_HTML )
    } )

    app.listen( PORT, () => {
      console.log( `listening on the http://localhost:${PORT}` )
    } )
  }
}
