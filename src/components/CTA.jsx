import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        코드가 궁금하세요? <br className="sm:block hidden" />제 Github는요...
      </p>
      <Link to="https://github.com/TATA-777" className="btn">
        <img src="src/assets/icons/github.svg" alt="" />
      </Link>
    </section>
  )
}

export default CTA
