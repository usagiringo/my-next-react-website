export default function Hero({ title, subtitle, imageOn = false }) {
  return (
      <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {imageOn && <figure> [画像] </figure>}
      </>
  )
}