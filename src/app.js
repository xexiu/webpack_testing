// src/app.js
import {groupBy} from 'lodash/collection';
import people from './people';
import './style.scss';
const managerGroups = groupBy(people, 'manager')

// img
import codeURL from './code.png';
const img = document.createElement('img');
img.src = codeURL;
img.style.backgroundColor = '#2B3A42';
img.style.padding = '20px';
img.width = 32;
document.body.appendChild(img);

const root = document.querySelector('#root')
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

// D3
const routes = {
  dashboard: () => {
    System.import('./dashboard').then((dashboard) => {
      dashboard.draw()
    }).catch((err) => {
      console.log("Chunk loading failed")
    })
  }
}

// demo async loading with a timeout
setTimeout(routes.dashboard, 1000)
