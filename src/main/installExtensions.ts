import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

function add( extension ) {
  return installExtension( extension )
  .then( ( name ) => console.log( `Added Extension:  ${name}` ) )
  .catch( ( err ) => console.log( 'An error occurred: ', err ) )
}

export default function () {
  const extensions = [ REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS ]
  extensions.forEach( extension => add( extension ) )
}