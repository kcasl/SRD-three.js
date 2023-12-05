import React from "react";

  const About = () => {
    return (
      <section className='max-container'>
        <h1 className='head-text'>
          Hello, We are{" "}
          <span className='green-gradient_text font-semibold drop-shadow'>
            {" "}
            SRD
          </span>{" "}
          . 👋
        </h1>
  
        <div className='mt-5 flex flex-col gap-3 font-["gothic"] text-slate-500'>
          <p>
          저희 집현은 하나고 내 간편 길찾기 시스템을 제작하였습니다.
          <br/>
            <br/>
            -사용자가 원하는 목적지와 출발지를 입력하기만 하면, 시스템이 최적의 경로를 안내해줍니다.
            <br/>
            -시스템은 하나고의 건물 배치도를 바탕으로 작동합니다. 다만 조금의 오류가 있을 수 있습니다.
            <br/>
            -시스템은 상황에 맞는 다양한 경로를 선택할 수 있게 설계되었습니다.
            <br/>
            -이 시스템은 하나고 학생들의 편의를 위해 제작되었으며, 이 시스템을 통해 신입학 학생들에게 조금이나마 편리함을 제공하고자 하는 것이 저희 집현의 목표입니다.
          </p>
        </div>
  
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>Skills</h3>
          <div className='mt-5 flex flex-col gap-3 font-["gothic"] text-slate-500'>
          <p>
           AWS + React + Vite + Three.js + Tailwind CSS 
          <br/>
          <br/>
          <br/>
             </p>
        </div>
          👇
          <a className='font-["gothic"] green-gradient_text' href="https://github.com/kcasl/SRD-three.js">SRD github 바로가기 </a>
        </div>
  
        <div className='py-16'>
          <h3 className='subhead-text'>Contact</h3>
           <div className='mt-5 flex flex-col gap-3 font-["gothic"] text-slate-500'>
          <p>
          tel : 010-8486-1679
          <br/>
          <br/>
          email : has_23042@hana.hs.kr / kkcasl21331@gmail.com
          <br/>
          <br/>
          github : https://github.com/kcasl
        </p>
        </div>
        </div>
  
        <hr className='border-slate-200' />
      </section>
    );
  };
  
  export default About;