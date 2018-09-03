const webpack = require( "webpack" )
import webpackConfig from "./config/webpack.main.config"
import { __DEV__ } from "./store/global"

export default function( callback ) {
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
    const watching = compiler.watch(
      {
        aggregateTimeout: 300,
        poll            : undefined
      },
      ( err, stats ) => {
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

        callback()
      }
    )
  }
}
