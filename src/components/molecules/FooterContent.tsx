import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/colored_logo.png';
import FooterHeading from '../atoms/FooterHeading';
import Text from '../atoms/Text';
import IconCode from '../../assets/svgs/footer/icon-code.svg';
import IconAvatar from '../../assets/svgs/footer/icon-avatar.svg';
import IconKOR from '../../assets/svgs/footer/KOR.svg';
import IconSetting from '../../assets/svgs/footer/icon-setting.svg';
import RightArrow from '../../assets/svgs/footer/Arrow-Right-Square.svg';

const iconsData = [
  {
    src: IconCode,
    alt: 'Icon Code',
    heading: '해외 개발자 원격 채용',
    linkText: '바로가기',
  },
  {
    src: IconAvatar,
    alt: 'Icon Avatar',
    heading: '외국인 원격 채용 (비개발)',
    linkText: '바로가기',
  },
  {
    src: IconKOR,
    alt: 'Icon KOR',
    heading: '한국어 가능 외국인 채용',
    linkText: '바로가기',
  },
  {
    src: IconSetting,
    alt: 'Icon Setting',
    heading: '해외 개발자 활용 서비스',
    linkText: '바로가기',
  },
];

const FooterContent: React.FC = () => (
  <>
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="lg:w-2/6">
          <Image className="mb-3" src={Logo} alt="Hyperhire" priority />
          <FooterHeading content="우리는 국가의 장벽을 넘어 최고의 인재를 매" />
          <FooterHeading className="mb-5" content="칭해드립니다." />

          <Text className="mb-2" content="010-0000-0000" />
          <Text content="aaaaa@naver.com" />
        </div>
        <div className="lg:w-4/6 flex flex-wrap md:flex-nowrap gap-4">
          {iconsData.map((icon, index) => (
            <div key={index} className="bg-white rounded-xl p-5 w-[calc(50%-10px)] md:w-1/4">
              <div className="bg-[#EFF1F6] rounded-lg flex items-center justify-center mb-3 w-10 h-10">
                <Image src={icon.src} alt={icon.alt} priority />
              </div>
              <FooterHeading className="mb-4" content={icon.heading} />
              <div className="flex items-center gap-2">
                <Text content={icon.linkText} />
                <Image className="cursor-pointer" src={RightArrow} alt="Arrow Right" priority />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="lg:w-2/6 flex gap-5">
          <div>
            <FooterHeading className="text-[12px] mb-3" content="상호명" />
            <Text className="mb-1" content="하이퍼하이어" />
            <Text content="Hyperhire India Private Limited" />
          </div>
          <div>
            <FooterHeading className="text-[12px] mb-3" content="대표 CEO" />
            <Text className="mb-1" content="하이퍼하이어" />
            <Text content="Juhyun Kim" />
          </div>
        </div>
        <div className="lg:w-4/6 flex flex-col md:flex-row gap-8">
          <div>
            <FooterHeading className="text-[12px] mb-3" content="사업자등록번호 CIN" />
            <Text className="mb-1" content="427-86-01187" />
            <Text content="U74110DL2016PTC290812" />
          </div>
          <div>
            <FooterHeading className="text-[12px] mb-3" content="주소 ADDRESS" />
            <Text className="mb-1" content="서울특별시 강남대로 479, 지하 1층 238호 " />
            <Text content="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi," />
            <Text content="110053 India" />
          </div>
        </div>
      </div>
      <div className="text-[13px] font-black text-normalText">ⓒ 2023 Hyperhire</div>
    </div>
  </>
);

export default FooterContent;
