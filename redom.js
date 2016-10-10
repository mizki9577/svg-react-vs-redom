import { el, svg, list, mount } from 'redom'
import world from './world'

class Particle {
  constructor() {
    this.el = svg('circle', { r: 0.01 })
  }

  update(data) {
    this.el.setAttribute('cx', data.x)
    this.el.setAttribute('cy', data.y)
    this.el.style.fill = data.color
  }
}

const app = list(svg('svg', { width: 800, height: 800, viewBox: '0 0 1 1' }), Particle, 'id')
world.register(::app.update)

document.addEventListener('DOMContentLoaded', () => {
  mount(document.getElementById('root'), app)
  world.start()
})

// vim: set ts=2 sw=2 et:
