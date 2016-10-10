class World {
  constructor() {
    this.particles = []
    for (let id = 0; id < 1000; ++id) {
      const red   = Math.floor(Math.random() * 256)
      const green = Math.floor(Math.random() * 256)
      const blue  = Math.floor(Math.random() * 256)
      const alpha = (red + green + blue) / 765
      const color = `rgba(${[red, green, blue, alpha].join(', ')})`

      this.particles.push({
        id, color,
        x: Math.random(),
        y: Math.random(),
        r: 0.01,
        dx: (Math.random() - 0.5) / 100,
        dy: (Math.random() - 0.5) / 100,
      })
    }
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

    if (this.callback) {
      this.callback(this.particles)
    }
    requestAnimationFrame(::this.update)
  }
}

export default new World()

// vim: set ts=2 sw=2 et:
