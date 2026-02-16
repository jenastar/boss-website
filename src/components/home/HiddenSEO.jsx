/**
 * Visually hidden text that search engines can crawl.
 * Add or edit the strings array below to update SEO keywords.
 */

const seoStrings = [
  'Black Oak Security Solutions cybersecurity consulting',
  'data security compliance AI architecture professional services',
  // Add more strings here
]

export default function HiddenSEO() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      }}
    >
      {seoStrings.map((str, i) => (
        <span key={i}>{str}</span>
      ))}
    </div>
  )
}
