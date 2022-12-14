const foodDb = [
  {
    name: '율천회관',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,2],
    location: ['선택안함', '후문+쪽문'],
    menu: '육회비빔밥',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2126번길 24 율천회관',
  },
  {
    name: '이라면',
    country: ['선택안함', '분식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '라면,라볶이',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2106번길 18',
  },
  {
    name: '포크포크매콤돈가스칡불냉면',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '돈냉면, 매콤돈가스',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로2106번길 14',
  },
  {
    name: '싸가정곱창&담윤순대국',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '순대국, 돼지곱창',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로2126번길 27 1층 101호',
  },
  {
    name: '본찌돈까스',
    country: ['선택안함', '일식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '돈까스,카레',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2106번길 22',
  },
  {
    name: '화원루',
    country: ['선택안함', '중식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '짜장면,짬뽕',
    dayOff: '',
    address: '경기 수원시 장안구 서부로2126번길 17',
  },
  {
    name: '생순',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '순대국',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로2126번길 38',
  },
  {
    name: '아늑',
    country: ['선택안함', '제3국'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '파스타,필라프',
    dayOff: '매월 마지막 날',
    address: '경기 수원시 장안구 서부로2106번길 36-4 1층',
  },
  {
    name: '힌카쿠',
    country: ['선택안함', '일식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '돈코츠 라멘, 가츠동',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로2126번길 10',
  },
  {
    name: '보배반점',
    country: ['선택안함', '중식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '짜장면, 짬뽕',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로 2132 2층',
  },
  {
    name: '일미닭갈비파전',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,2],
    location: ['선택안함', '후문+쪽문'],
    menu: '닭갈비',
    dayOff: '주말',
    address: '경기 수원시 장안구 서부로2106번길 26-3',
  },
  {
    name: '도레미파스타',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '파스타,리조또',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2106번길 26-15 101호',
  },
  {
    name: '청년밥상',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '제육쌈밥, 된장찌개',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2136번길 10 1층',
  },
  {
    name: '지코바치킨',
    country: ['선택안함', '인스턴트'],
    variety: ['선택안함', '밥'],
    people: [0 ,2, 4],
    location: ['선택안함', '후문+쪽문'],
    menu: '숯불양념구이',
    dayOff: '매주 월요일',
    address: '경기 수원시 장안구 서부로2126번길 17 a동 2호',
  },
  {
    name: '성대골목식당',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '닭칼국수, 닭한마리',
    dayOff: '매주 토요일',
    address: '경기 수원시 장안구 서부로2106번길 26-3 2층',
  },
  {
    name: '기똥찬고기',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,2, 4],
    location: ['선택안함', '후문+쪽문'],
    menu: '삼겹살, 막창',
    dayOff: '없음',
    address: '경기 수원시 장안구 화산로213번길 29-6 기똥찬고기',
  },
  {
    name: '떡의 작품',
    country: ['선택안함', '분식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '가래떡볶이',
    dayOff: '매주 월요일',
    address: '경기 수원시 장안구 서부로2126번길 15 1층',
  },
  {
    name: '킹고하우스',
    country: ['선택안함', '분식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '떡볶이, 순대, 튀김',
    dayOff: '매주 일요일',
    address: '경기 수원시 장안구 서부로2106번길 21 왕돈까스',
  },
  {
    name: '중경마라탕',
    country: ['선택안함', '중식'],
    variety: ['선택안함', '면'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '마라탕, 꿔바로우',
    dayOff: '',
    address: '경기 수원시 장안구 서부로2106번길 10',
  },
  {
    name: '국졔식당',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '제육볶음, 수육정식',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로2126번길 29 2층 국졔식당',
  },
  {
    name: '동대문엽기떡볶이',
    country: ['선택안함', '분식'],
    variety: ['선택안함', '밥'],
    people: [0 ,2],
    location: ['선택안함', '후문+쪽문'],
    menu: '떡볶이',
    dayOff: '없음',
    address: '경기 수원시 장안구 서부로 2132',
  },
  {
    name: '꾸이꾸이돼지마을',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,2, 4],
    location: ['선택안함', '후문+쪽문'],
    menu: '갈매기살',
    dayOff: '',
    address: '경기 수원시 장안구 화산로213번길 9-3 산이슬교회',
  },
  {
    name: '노랑통닭',
    country: ['선택안함', '인스턴트'],
    variety: ['선택안함', '밥'],
    people: [0 ,2, 4],
    location: ['선택안함', '후문+쪽문'],
    menu: '치킨',
    dayOff: '없음',
    address: '경기 수원시 장안구 화산로213번길 32',
  },
  {
    name: '동자설렁탕',
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: '설렁탕, 삼계탕',
    dayOff: '없음',
    address: '경기 수원시 장안구 화산로213번길 23',
  },
  {
    name: "알촌",
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: "알밥",
    dayOff: "없음",
    address: "경기 수원시 장안구 서부로2106번길 32"
    },
    {
    name: "예국향",
    country: ['선택안함', '한식'],
    variety: ['선택안함', '밥'],
    people: [0 ,1, 2],
    location: ['선택안함', '후문+쪽문'],
    menu: "닭볶음밥, 국수",
    dayOff: "",
    address: "경기 수원시 장안구 서부로2106번길 32 예국향"
    },
    {
      name: "성대밥상",
      country: ['선택안함', '한식'],
      variety: ['선택안함', '밥'],
      people: [0 ,1, 2],
      location: ['선택안함', '후문+쪽문'],
      menu: "제육덮밥, 비빔밥",
      dayOff: "",
      address: "경기 수원시 장안구 서부로2126번길 50-10"
    },
    {
        name: "맘스터치",
        country: ['선택안함', '인스턴트'],
        variety: ['선택안함', '기타'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "햄버거, 치킨",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로 2128"
    },
    {
        name: "행컵",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1],
        location: ['선택안함', '후문+쪽문'],
        menu: "컵밥, 볶음밥",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 30"
    },
    {
        name: "부대통령",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1,2],
        location: ['선택안함', '후문+쪽문'],
        menu: "부대찌개, 제육볶음",
        dayOff: "매주 토요일",
        address: "경기 수원시 장안구 서부로 2128 3층"
    },
    {
        name: "버거운버거",
        country: ['선택안함', '인스턴트'],
        variety: ['선택안함', '기타'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "햄버거, 치킨",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 29 1층"
    },
    {
        name: "쪼꼬야끼",
        country: ['선택안함', '분식'],
        variety: ['선택안함', '기타'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "타코야끼, 떡볶이",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 38 38  103호"
    },
    {
        name: "밥은화",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "직화 덮밥",
        dayOff: "매주 일요일",
        address: "경기 수원시 장안구 서부로2106번길 26-6 1층 밥은화"
    },
    {
        name: "참바른김밥",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "김밥",
        dayOff: "없음",
        address: "경기 수원시 장안구 서부로2126번길 17 참바른김밥"
    },
    {
        name: "옛이야기덮밥",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "덮밥",
        dayOff: "매주 금요일",
        address: "경기 수원시 장안구 서부로2106번길 21"
    },
    {
        name: "우리집밥",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "된장찌개, 김치찌개",
        dayOff: "매주 금요일",
        address: "경기 수원시 장안구 서부로2106번길 26-2"
    },
    {
        name: "짱식당",
        country: ['선택안함', '한식'],
        variety: ['선택안함', '밥'],
        people: [0 ,1, 2],
        location: ['선택안함', '후문+쪽문'],
        menu: "보쌈정식",
        dayOff: "매주 토요일",
        address: "경기 수원시 장안구 서부로2126번길 42"
    }
];

const button = document.getElementById('BtnGroup');

function filterChoice() {
  const country = document.getElementById('country');
  const variety = document.getElementById('variety');
  const people = document.getElementById('people');
  const locate = document.getElementById('location');

  const selectedCountry = country.options[country.selectedIndex].value;
  const selectedVariety = variety.options[variety.selectedIndex].value;
  const selectedPeople = Number(people.options[people.selectedIndex].value);
  const selectedLocation = locate.options[locate.selectedIndex].value;

  const filteredList = [];

  for (i in foodDb) {
    //filter
    if (
      foodDb[i].country.includes(selectedCountry) &&
      foodDb[i].variety.includes(selectedVariety) &&
      foodDb[i].people.includes(selectedPeople) &&
      foodDb[i].location.includes(selectedLocation)
    ) {
      filteredList.push(i);
    }
  } 
  console.log(filteredList);
  if (filteredList.length === 0) {
    console.log('해당되는 음식점이 없습니다. 새로고침해주세요.');
  } else {
    choiceRandom(filteredList);
  }
}

function choiceRandom(list) {
  const num = Math.floor(Math.random() * list.length);
  const choicedRes = list[num];
  console.log(foodDb[choicedRes].name);
  console.log(foodDb[choicedRes].menu);
  console.log(foodDb[choicedRes].dayOff);
  console.log(foodDb[choicedRes].address);
}

button.addEventListener('click', filterChoice);
