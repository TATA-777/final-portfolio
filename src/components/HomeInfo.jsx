import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        안녕하세요, 저는
        <span className="font-semibold mx-2 text-white">이서진</span>
        입니다!👋
        <br />
        중부대 정보보호학과 학생입니다!
      </h1>
    )

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          저의 대한 어바웃 페이지 입니다.(그렇게 중요하지는...)
          <br /> (about 페이지로 이동)
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          ⚠️누르지 마시오⚠️
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          이번 수업을 들으며 완성한 여러 프로젝트들을 모은 페이지입니다.
          <br /> (project 페이지로 이동)
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          ⚠️누르지 말라고 했다..요⚠️
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center mt-2">
          제 미래에 대한 주저리 주저리인 상세정보 인척 하는 말 입니다요..
          <br />
          (detailed information 페이지로 이동)
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          ⚠️누르지 말라니까는..⚠️
          <img src={arrow} alt="arrow" className="w-7 h-4 object-contain" />
        </Link>
      </div>
    )
  }

  return null
}

export default HomeInfo
