'use client' // Error boundaries must be Client Components
 
export default function NotFound() {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Page not found!</h2>
        <button>Try again</button>
      </body>
    </html>
  )
}