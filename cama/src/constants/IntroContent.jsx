import vsImage from "../assets/vs.png";
import mainImage from "../assets/main.png";
import groupImage from "../assets/group.png";
import certificationImage from "../assets/certification.png";
import homeImage from "../assets/home.png";
import questImage from "../assets/quest.png";

// 아이콘 import 추가
import vsIcon from "../assets/icons/vs_active.svg";
import ploggingIcon from "../assets/icons/group_active.svg";
import certificationIcon from "../assets/icons/store_active.svg";
import homeIcon from "../assets/icons/home_active.svg";
import questIcon from "../assets/icons/my_active.svg";


export const INTRO_CONTENT = [
  {
    mainTitle: "VS",
    text: "함께하는 즐거움",
    subText:
      "개인과 그룹 간의 경쟁을 통해 재미있게 환경 보호에 참여할 수 있습니다",
    boldText:
      "협동과 경쟁을 통해 환경에 긍정적인 영향을 미치고, 성취감을 느낄 수 있습니다",
    image: mainImage,
    icon: vsIcon,
  },
  {
    mainTitle: "Plogging",
    text: "혼자도 좋지만, 함께라면 더 즐거운 환경 보호",
    subText: "지역 랭킹을 확인하며 협력의 즐거움을 느껴보세요",
    boldText:
      "팀원들과 함께 달리며 환경 보호의 가치를 나누고, 더 큰 동기부여를 얻을 수 있습니다",
    image: groupImage,
    icon: ploggingIcon,
  },
  {
    mainTitle: "인증",
    text: "환경 보호를 게임처럼 즐겨보세요",
    subText: "거리, 시간, 활동 사진을 기록하고 SNS에 인증해보세요",
    boldText:
      "기록을 통해 성취감을 느끼고, 더 많은 사람들과 환경 보호를 공유할 수 있습니다",
    image: certificationImage,
    icon: certificationIcon,
  },
  {
    mainTitle: "Home",
    text: "지구의 미소를 확인하세요",
    subText: "당신의 플로깅 활동이 지구의 표정으로 표현됩니다",
    boldText:
      "환경 기여도를 시각적으로 확인하며 지속적인 동기를 얻을 수 있습니다",
    image: homeImage,
    icon: homeIcon,
  },
  {
    mainTitle: "Quest",
    text: "매일 달성하는 작은 목표, 쌓여가는 큰 기쁨",
    subText: "출석 체크와 일일 퀘스트로 꾸준히 환경 보호를 실천해보세요",
    boldText: "일상의 작은 실천이 꾸준한 성취감으로 이어집니다",
    image: questImage,
    icon: questIcon,
  },
];

// EXTRA_MESSAGES와 BUTTON_LABELS는 그대로 유지