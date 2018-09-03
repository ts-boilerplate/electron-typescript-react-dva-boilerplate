import * as PATH from 'path'
import { MAIN_OUTPUT_FILE_NAME, TSCONFIG_FILE_NAME } from './names'
const { resolve } = PATH



class PATHS_CLASS {
  ROOT = resolve( __dirname, '../../../' )

  // src
  SRC = resolve( this.ROOT, 'src' )

  RENDERER = resolve( this.SRC, 'renderer' )
  RENDERER_ENTRY_FILE = resolve( this.RENDERER, 'entry.tsx' )
  RENDERER_INDEX_HTML = resolve( this.RENDERER, 'index.html' )

  MAIN = resolve( this.SRC, 'main' )
  MAIN_ENTRY = resolve( this.MAIN, 'index.ts' )

  SERVER = resolve( this.SRC, 'server' )
  SERVER_ELECTRON_ENTRY_FILE = resolve( this.SERVER, 'main.js' )
  // SERVER_ELECTRON_ENTRY_FILE = resolve( this.ROOT, 'main.js' )


  // output
  RENDERER_OUTPUT = resolve( this.ROOT, 'build-renderer' )
  
  RENDERER_OUTPUT_INDEX_HTML = resolve( this.RENDERER_OUTPUT, 'index.html' )

  MAIN_OUTPUT = resolve( this.ROOT, 'build-main' )
  MAIN_OUTPUT_FILE = resolve( this.MAIN_OUTPUT, MAIN_OUTPUT_FILE_NAME )


  // webpack
  WEBPACK_HOT_MIDDLEWARE = `webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000`



  // tsconfig
  MAIN_TS_CONFIG = resolve( this.MAIN, TSCONFIG_FILE_NAME )

  RENDERER_TS_CONFIG = resolve( this.RENDERER, TSCONFIG_FILE_NAME )
}

const PATHS: PATHS_CLASS = new PATHS_CLASS()
export default PATHS