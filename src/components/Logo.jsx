import logoUrl from '../assets/tms-logo.png'

// Renders the TMS logo image. Same API as before so every caller keeps working:
//   <Logo />                      -> red logo, 24px tall (header)
//   <Logo color="#fff" height=24> -> white logo (footer, on dark)
//   <Logo color="#fff" height={undefined} /> -> white, fills its container (hero watermark)
//
// The source PNG is solid red on a transparent background; passing a white color
// applies a filter that renders it white for use on dark backgrounds.
export default function Logo({ color = '#c1272d', height = 24 }) {
  const white = color === '#fff' || color === '#ffffff' || color === 'white'
  const decorative = !height // hero/phero watermarks size via their container

  return (
    <img
      src={logoUrl}
      alt={decorative ? '' : 'TMS'}
      aria-hidden={decorative ? 'true' : undefined}
      draggable={false}
      style={{
        height: height || 'auto',
        width: height ? 'auto' : '100%',
        display: 'block',
        // Turn the red PNG white on dark backgrounds; leave it red otherwise.
        filter: white ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
