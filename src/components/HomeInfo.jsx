import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
      return (
        <h1 className='font-["gothic"] sm:text-xl sm:leading-snug text-center neo-brutalism-emerald py-8 px-14 text-white mx-5'>
          안녕하세요 저희는
          <span className='font-["gothic"] mx-2 text-white'>쇼르디 입니다. 👋</span>
        </h1>
      );
  
    if (currentStage === 2) {
      return (
        <div className='info-box'>
          <p className='font-["gothic"] sm:text-xl text-center'>
          쇼르디가 뭐하는 집현인가요? 🤔
          </p>
  
          <Link to='/about' className='font-["gothic"] neo-brutalism-white neo-btn'>
          더 알아보기
          </Link>
        </div>
      );
    }
  
    if (currentStage === 3) {
      return (
        <div className='info-box'>
          <p className='font-["gothic"] text-center sm:text-xl'>
          하나고에서 길을 찾고 싶을때 쇼르디를 사용해보세요! 👍
          </p>
  
          <Link to='/projects' className='font-["gothic"] neo-brutalism-white neo-btn'>
          사용하러 가기
          </Link>
        </div>
      );
    }
  
    // if (currentStage === 4) {
    //   return (
    //     <div className='info-box'>
    //     <p className='font-["gothic"] sm:text-xl text-center'>
    //       쇼르디의 멤버를 소개합니다. 👨‍💻
    //     </p>
  
    //     <Link to='/contact' className='font-["gothic"] neo-brutalism-white neo-btn'>
    //       Contact
    //     </Link>
    //   </div>
    //   );
    // }
  
    return null;
  };
  

export default HomeInfo