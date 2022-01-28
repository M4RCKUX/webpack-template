// Modulo principal
import './styles.css';

import { App, Model, View } from './classes';

const model = new Model();
const view = new View(document);
const app = new App(model, view);

app.run();
