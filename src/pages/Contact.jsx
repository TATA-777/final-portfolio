const Contact = () => {
  return (
    <section className="relative flex lg:flex-row flex-col max-container mb-0">
      <div className="flex-1 min-w-[50%] flex flex-col mt-5">
        <h1 className="head-text">
          Detailed{' '}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {' '}
            information
          </span>{' '}
        </h1>
        <br />
        <p className="mt-10">
          제가 가야 할 길이 아직 완전히 그려지지는 않았지만, 그건 어쩌면 더 많은
          가능성이 열려 있다는 뜻이라고도 생각이 듭니다. 아직은 명확한
          목표보다는 다양한 경험과 도전을 통해 저 스스로에게 어울리는 길을
          천천히 만들어가는 중입니다. 언젠가는 마음에 드는 꿈과 목표를 만나게 될
          것이라 믿으며 지금은 그 과정 자체를 즐기려고 합니다.
        </p>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <img
          src="src/assets/images/hero.png"
          alt="hero"
          className="object-contain rounded-lg mt-20 ml-20 w-80 h-80"
        />
      </div>
    </section>
  )
}

export default Contact
