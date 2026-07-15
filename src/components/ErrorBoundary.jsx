import { Component } from 'react'

// Catches runtime render errors anywhere in the tree and shows a recoverable
// fallback instead of a blank white screen. Styles are inline on purpose so the
// fallback still renders even if the stylesheet failed to load.
//
// To wire an external monitor (e.g. Sentry) later, send the error from
// componentDidCatch — the hook is marked below.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Logged to the browser console AND visible in Vercel's runtime logs.
    console.error('[TMS] Runtime error caught by ErrorBoundary:', error, info)
    // --- optional external monitoring hook ---
    // window.Sentry?.captureException(error)
  }

  handleReload = () => {
    this.setState({ hasError: false })
    window.location.reload()
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div style={{
        minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px 20px', fontFamily: 'system-ui, Arial, sans-serif', textAlign: 'center',
      }}>
        <div style={{ maxWidth: 460 }}>
          <div style={{ fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', color: '#c1272d', marginBottom: 14 }}>
            Something went wrong
          </div>
          <h1 style={{ fontSize: 28, color: '#1a1a1a', margin: '0 0 12px', lineHeight: 1.2 }}>
            We hit an unexpected error
          </h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, margin: '0 0 24px' }}>
            Sorry about that — the page couldn't load correctly. Please reload, or reach us
            directly at <a href="mailto:ayoubwagih@tms-eg.com" style={{ color: '#c1272d' }}>ayoubwagih@tms-eg.com</a>.
          </p>
          <button
            type="button"
            onClick={this.handleReload}
            style={{
              background: '#c1272d', color: '#fff', border: 'none', padding: '14px 28px',
              fontSize: 15, fontWeight: 700, cursor: 'pointer',
            }}
          >
            Reload page
          </button>
        </div>
      </div>
    )
  }
}
