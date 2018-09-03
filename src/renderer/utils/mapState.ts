import { connect } from "dva"

export default function ( component: any, stateFn: any = props => props ) {
  return connect( stateFn )( component )
}

