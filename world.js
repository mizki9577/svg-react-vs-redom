class World {
  constructor() {
    this.particles = []
    for (let id = 0; id < 100; ++id) {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      const a = (r + g + b) / 765
      const color = `rgba(${[r, g, b, a].join(', ')})`
      this.particles.push({
        id, color,
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
    const nextState = this.particles.map(({x, y, dx, dy, ...rest}) => {
      dx = x < 0 || 1 < x ? -dx : dx
      dy = y < 0 || 1 < y ? -dy : dy
      x += dx
      y += dy
      return { x, y, dx, dy, ...rest }
    })
    this.particles = nextState

    this.callback(this.particles)
    requestAnimationFrame(::this.update)
  }
}

export default new World()

// vim: set ts=2 sw=2 et:
