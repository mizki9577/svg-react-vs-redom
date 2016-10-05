import React from 'react'
import { render } from 'react-dom'
import world from './world'

class App extends React.Component {
  constructor() {
    super()
    this.state = { particles: [] }
    world.register(::this.handleUpdate)
  }

  componentDidMount() {
    world.start()
  }

  handleUpdate(particles) {
    this.setState({ particles })
  }

  render() {
    return (
      <svg width={800} height={800} viewBox="0 0 1 1">
        { this.state.particles.map(({id, x, y}) => (
          <circle key={id} cx={x} cy={y} r={0.01} />
        )) }
      </svg>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'))
})

// vim: set ts=2 sw=2 et: