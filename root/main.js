import { component } from 'riot'
import application from './application.riot'
import registerComponents from 'riot:components'

// register
registerComponents()

// mount the root tag
component( application )( document.body )
