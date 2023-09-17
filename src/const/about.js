import dataConsulting from "../../public/image/solution.png";
import dataSynthetic from "../../public/image/synthetic.png";

const slogan = {
  title: "the great era of data",
  subtitle: "Welcome",
  desc: "데이터가 넘치는 빅데이터 시대. 높은 전문 지식과 기술력으로 데이터 시장을 선도합니다.",
};

const servicesInfo = [
  {
    name: "합성/재현 데이터 솔루션",
    src: dataSynthetic,
    desc: ".",
    href: "services/synthetic-data",
  },
  {
    name: "데이터 분석 솔루션",
    src: dataConsulting,
    desc: ".",
    href: "",
  },
];

const profileInfo = {
  title: "기업 정보",
  subtitle: "About Us",
};

const foundersInfo = [
  {
    name: "김현태",
    position: "Ph.D. FSA CERA",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
  },
  {
    name: "임종호",
    position: "Ph.D.",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
  },
];

export { foundersInfo, profileInfo, servicesInfo, slogan };
