import React from 'react'
import { render } from 'react-dom'
import TheApp from './components/TheApp';
import { hot } from 'react-hot-loader'
import dva, { connect, Router } from "dva"
import models from "./models/index"
import mapValues from 'lodash/mapValues'


const TheHotApp = hot(module)(connect(props => props)(TheApp))

const app = dva()

mapValues(models, model => app.model(model))


app.router(() => <TheHotApp />)

app.start("#app")