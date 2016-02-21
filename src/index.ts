import 'babel-polyfill'
import {Sandbox} from './Sandbox'

const sandbox = new Sandbox
const greeting = sandbox.hello('world')

console.log(greeting)
