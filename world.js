class World {
  constructor() {
    this.particles = []
    for (let i = 0; i < 100; ++i) {
      this.particles.push({
        id: i,
        x: Math.random(),
        y: Math.random(),
        dx: (Math.random() - 0.5) / 100,
        dy: (Math.random() - 0.5) / 100,
      })
    }
  }

  register(callback) {
    this.callback = callback
  }

  start() {
    requestAnimationFrame(::this.update)
  }

  update() {
    const nextState = this.particles.map(({id, x, y, dx, dy}) => {
      dx = x < 0 || 1 < x ? -dx : dx
      dy = y < 0 || 1 < y ? -dy : dy
      return {
        id,
        x: x + dx,
        y: y + dy,
        dx, dy,
      }
    })
    this.particles = nextState

    this.callback(this.particles)
    requestAnimationFrame(::this.update)
  }
}

export default new World()

// vim: set ts=2 sw=2 et: