// start navbar
const sections = [
  "profile", "about-me", "education", "activity",
  "medium", "experience", "skill", "language", "contact-me"
];

const navigationContaner = document.getElementById("navigation");

sections.forEach(section => {
  const link = document.createElement("a");
  link.href = `#${section}`;
  link.className = "font-medium hover:text-blue-700";
  link.textContent = section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ");

  navigationContaner.appendChild(link);
})

// random user name
const user = [
  {
    name: "สุดหล่อ",
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
  },
  {
    name: "สุดสวย",
    imageUrl: "https://cdn.pixabay.com/photo/2022/03/22/07/46/woman-7084501_960_720.png"
  },
  {
    name: "สุดเท่",
    imageUrl: "https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027365_960_720.png"
  },
  {
    name: "นิรนาม",
    imageUrl: "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833_960_720.png"
  },
];

// for desktop
const userNameEl = document.getElementById("user-name");
const userAvatarEl = document.getElementById("user-avatar");

const getRandomUser = () => {
  const randomIndex = Math.floor(Math.random() * user.length);

  userNameEl.textContent = user[randomIndex].name;
  userAvatarEl.src = user[randomIndex].imageUrl;
};

getRandomUser()

// end navbar

// start activity section
const activitySections = [
  {
    title: "องค์การบริหารนักศึกษาชาย มหาวิทยาลัยฟาฏอนี",
    content: "ได้เป็นคณะกรรมการองค์การบริหารนักศึกษาชาย มหาวิทยาลัยฟาฏอนี ประจำปีการศึกษา 2563",
    imageUrl: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/140946789_2366597896797815_6741291298662478466_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0bb214&_nc_ohc=E2swt-XuuioAX8kB9W1&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfDPttSoL-nMpkHbgaT-qWB9ZEY6NeHUJGbnD33LnazWIg&oe=65EC5F0C",
    activityLink: "https://www.facebook.com/media/set/?set=a.2366601853464086&type=3"
  },
  {
    title: "Barcamp Pattani",
    content: "ได้เป็น staff โครงการ Barcamp ที่ Pattani ซึ่งจัดโดย Digital4Peace ดิจิทัลเพื่อสันติภาพ",
    imageUrl: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.6435-9/69215641_506382556762656_7055421027148365824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=OrtSYmAhVKgAX8yGpqU&_nc_ht=scontent.fbkk5-3.fna&oh=00_AfBDb6ZpBB_YkEjfnnmbMIRZwJ0OwLHFfULrqMMlxSOU5g&oe=65EC6210",
    activityLink: "https://www.facebook.com/barcamppattani/posts/pfbid02aW3HR948KXzQnXrVr4a5Dtjfu2rPDgEb8B3GCz31XT9Mnb3pjESaP3LLXkqvENkRl"
  },
  {
    title: "Kids Code 2",
    content: "ได้เป็น staff โครงการ Kids Code ครั้งที่2 ซึ่งจัดโดย Digital4Peace ดิจิทัลเพื่อสันติภาพ",
    imageUrl: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.6435-9/59973138_596092584234444_8308246279968784384_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=4dc865&_nc_ohc=zV-eNlQsZPIAX87PzA-&_nc_ht=scontent.fbkk5-8.fna&oh=00_AfAuOEi6RHhSrP4pietRUeBK1tRDtLE8UnYZ0-dI_GCWgw&oe=65EC3CFC",
    activityLink: "https://www.facebook.com/photo/?fbid=596089564234746&set=a.596087680901601"
  },
  {
    title: "สโมสรนักศึกษาชาย คณะวิทยาศาสตร์และเทคโนโลยี",
    content: "ได้เป็นคณะกรรมการสโมสรนักศึกษาชาย คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยฟาฏอนี ประจำปีการศึกษา 2563",
    imageUrl: "./assets/activity/semo63.jpg",
    activityLink: ""
  },
  {
    title: "ประธานโครงการพี่ให้น้องครั้งที่4",
    content: "ได้เป็นประธานโครงการพี่ให้น้องครั้งที่4 ของสโมสรคณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยฟาฏอนี ประจำปีการศึกษา 2562",
    imageUrl: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/87394723_2618586118424618_852805536607895552_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=wqLulx5DJksAX9S8vAZ&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfBLcML72rJRI8Dq8HrkSUQRhAXEOHzuOStRmKaT9-HlVg&oe=65EC57D5",
    activityLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid021XfNZTXjUrTpjc1stmhoPAb9jqy9knvHDsnENo7vN9p8zfzoDb8jk8xqU8zezPjol&id=100008197663891"
  },
  {
    title: "ชุมนุมสาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์และเทคโนโลยี",
    content: "ได้เป็นคณะกรรมการชุมนุมนักศึกษาชาย สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยฟาฏอนี ประจำปีการศึกษา 2562",
    imageUrl: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/70430496_106018370791690_7908066224037167104_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=18p3nskMPSsAX8o2TGH&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfB0c9eiIB_8XvKlPlhH2RKPNaak_DkGjqTXihJzu8ussA&oe=65EC28FF",
    activityLink: "https://www.facebook.com/photo/?fbid=106018367458357&set=a.106017684125092"
  }
];

const windowSize = window.innerWidth;

const activityContainer = document.getElementById("activity-content");

// create element for show activity items
const showActivityItems = (lastIndex) => {
  activityContainer.innerHTML = "";

  activitySections.slice(0, lastIndex).forEach(activity => {
    const activityItem = document.createElement("div");
    activityItem.classList.add('min-h-[300px]', 'lg:min-h-[380px]', 'xl:min-h-[400px]', 'w-full', 'rounded-lg', 'p-6', 'bg-white', 'shadow-2xl', 'shadow-[var(--shadow-primary)]');
    activityItem.innerHTML = `
      <h3 class="text-2xl lg:text-3xl truncate">${activity.title}</h3>
      <p class="max-w-full max-h-72px line-clamp-2 overflow-hidden my-4 indent-5">
        ${activity.content}
      </p>
      <div class="relative">
        <img src="${activity.imageUrl}" alt="activity" class="w-full h-[270px] md:h-[180px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px] w-full object-cover" alt="${activity.title}">
        <button onClick="window.open('${activity.activityLink}', '_blank')" class="text-white absolute bottom-2 right-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 w-32">
          Preview
        </button>
      </div>
    `;

    activityContainer.appendChild(activityItem);
  });
}

// loop activity item
if (windowSize >= 1280) {
  showActivityItems(3);
} else {
  showActivityItems(4);
}

// start user click to see more activity
const showActivityMoreBtn = document.getElementById("more-acctivity");

let isActivityExpended = false;

showActivityMoreBtn.addEventListener('click', () => {
  if (!isActivityExpended) {
    showActivityItems(activitySections.length);
    
    showActivityMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-up mr-2"></i> Less';
    isActivityExpended = true;
  } else {
    if (windowSize >= 1280) {
      showActivityItems(3);
    } else {
      showActivityItems(4);
    }

    showActivityMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-down mr-2"></i> More';
    isActivityExpended = false;
  }
})
// end activity section

// start medium
const mediumSections = [
  {
    title: "มาทำความรู้จัก CSS Animation พื้นฐานโดยปราศจาก JavaScript กันเถอะ",
    content: "CSS Animation คือการใช้ CSS ในการกำหนดการเคลื่อนไหวของ Element นั้น ๆ ทำให้ Element นั้นเคลื่อนไหวตามที่เรากำหนด โดย Property ที่เกี่ยวข้องกับ CSS Animation คราว ๆ จะมีดังนี้",
    imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*_LHvXQ_b_OvNwu9IPSFT_A.png",
    mediumLink: "https://medium.com/@fardee.tat/%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-css-animation-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99-%E0%B9%86-%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%A8%E0%B8%88%E0%B8%B2%E0%B8%81-javascript-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-09d7b43ec947"
  },
  {
    title: "ลองทำ Responsive Web Design เล่น ๆ กันเถอะ",
    content: "Medium นี้เราจะมาลองทำ Responsive Web Design แบบง่าย ๆ ด้วย HTML และ CSS โดยที่เราจะสร้างหน้าเว็บให้รองรับการแสดงผลทุกขนาดหน้าจอหรือหน้าเว็บจะปรับขนาดการแสดงผลให้เหมาะสมเมื่อมีการเปลี่ยนขนาดหน้าจอ โดยที่เราจะใช้ CSS Media Queries",
    imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*NOCLxS0V1PDeMeO2znyWcQ.png",
    mediumLink: "https://medium.com/@fardee.tat/%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B3-web-responsive-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99-%E0%B9%86-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-651bd713083d"
  },
  {
    title: "กว่าจะมาเป็น Front-end Developer",
    content: "ก่อนอื่นต้องบอกเลยผมเองเป็นเด็กจาก3จังหวัดที่ตั้งแต่เล็กจนจะเข้าเรียนมหาลัยแทบไม่มีพื้นฐานทางด้าน IT อะไรเลย ตอนนั้นยังจำได้ตอนที่รุ่นพี่มาแนะแนวมหาลัยเอกชนแห่งหนึ่งแล้วมีการแนะนำสาขาเทคโนโลยีสารสนเทศ สำหรับเราที่เป็นเด็กบ้านนอกแล้วที่ได้ยินสาขานี้ รู้สึกได้เลย ตอนนั้น โอโฮ้!! สาขานี้เจ่งอ่ะ น่าเข้าอ่ะ ก็เลยสมัครเข้ารอบแรก แล้วก็ติดเลย เพราะด้วยเป็นมหาลัยเอกชนแล้วก็ต้องการคนด้วย ก็เลยติดสาขานั้นอย่างง่ายดาย",
    imageUrl: "./assets/profile/profile2Row.jpg",
    mediumLink: "https://medium.com/@fardee.tat/%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99-front-end-developer-efa01ed932e9"
  },
  {
    title: "Position ใน CSS อีหยั๋งเอ๋ย",
    content: "Property position ใช้ในการกำหนดตำแหน่งให้กับ element ซึ่งที่เราจะเห็นบ่อยก็จะมีพวกการทำ navbar, sidebar หรืออื่นๆ ที่เราต้องกำหนด position ให้กับมัน โดย property position จะมีค่าดังนี้",
    imageUrl: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*Rnm-9JiQKpXDYJOmWyjpEA.png",
    mediumLink: "https://medium.com/@fardee.tat/position-%E0%B9%83%E0%B8%99-css-%E0%B8%AD%E0%B8%B5%E0%B8%AB%E0%B8%A2%E0%B8%B1%E0%B9%8B%E0%B8%87%E0%B9%80%E0%B8%AD%E0%B9%8B%E0%B8%A2-fc379133bd0e"
  },
  {
    title: "Display Grid อีหยั๋งเอ๋ย",
    content: "CSS Grid layout มีไว้สำหรับจัดวาง element(องค์ประกอบ) ต่างๆ บนเว็บของเราให้เป็น columns(แนวตั้ง)และ rows(แนวนอน)ได้เช่นเดียวกันกับตาราง ซึ่งเราสามารถจัดวาง element ต่างๆ ไว้ในตำแหน่งที่เราต้องการได้ ทำให้เว็บได้มีความสวยงานและสมดุลยิ่งขึ้น",
    imageUrl: "https://miro.medium.com/v2/resize:fit:2000/format:webp/1*xa1QD015EXtwnzY1MvPMXw.png",
    mediumLink: "https://medium.com/@fardee.tat/display-grid-%E0%B8%AD%E0%B8%B5%E0%B8%AB%E0%B8%A2%E0%B8%B1%E0%B9%8B%E0%B8%87%E0%B9%80%E0%B8%AD%E0%B9%8B%E0%B8%A2-17b7fc0e11f6"
  },
  {
    title: "Display ใน CSS อีหยั๊งเอ๋ย",
    content: "display คือ Property(คุณสมบัติ) ที่ใช้ในการกำหนดการแสดงผลและการจัดวาง Element(องค์ประกอบ) ต่าง ๆใน HTML โดยที่เราสามารถที่กำหนดค่าเพื่อเปลี่ยนวิธีการแสดงผลของ Element นั้น ๆได้ โดย Display Property จะมีหลายตัวแต่ในบทนี้จะอธิบายแค่ตัวพื้นฐานที่เราใช้กันบ่อย โดยจะมีดังต่อไปนี้",
    imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*DvoEWFnYXwKp6zNnjKMdlw.jpeg",
    mediumLink: "https://medium.com/@fardee.tat/display-css-%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%B1%E0%B9%8A%E0%B8%87%E0%B9%80%E0%B8%AD%E0%B9%8B%E0%B8%A2-b5df4251923a"
  }
];

const mediumContainer = document.getElementById("medium-content");

const showMediumItems = (lastIndex) => {
  mediumContainer.innerHTML = "";

  mediumSections.slice(0, lastIndex).forEach(medium => {
    const mediumItem = document.createElement("div");
    mediumItem.classList.add('min-h-[300px]', 'lg:min-h-[380px]', 'xl:min-h-[400px]', 'w-full', 'rounded-lg', 'p-6', 'bg-white', 'shadow-2xl', 'shadow-[var(--shadow-primary)]');

    mediumItem.innerHTML = `
      <h3 class="text-2xl lg:text-3xl truncate">
        ${medium.title}
      </h3>
      <p class="text-base max-w-full max-h-72px line-clamp-2 lg:line-clamp-3 xl:line-clamp-2 2xl:line-clamp-3 overflow-hidden my-4 indent-5">
        ${medium.content}
      </p>
      <div class="relative flex justify-center">
        <img src="${medium.imageUrl}" alt="activity" class="h-[270px] md:h-[180px] lg:h-[220px] xl:h-[250px] 2xl:h-[300px] w-full object-cover" alt="${medium.title}">
        <button onClick="window.open('${medium.mediumLink}', '_blank')" class="text-white absolute bottom-2 right-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 w-32 ml-1">
          Preview
        </button>
      </div>
    `;

    mediumContainer.appendChild(mediumItem);
  })
}

if (windowSize >= 1280) {
  showMediumItems(3);
} else {
  showMediumItems(4);
}

// start user click to see more activity
const showMediumMoreBtn = document.getElementById("more-medium");

let isMediumExpended = false;

showMediumMoreBtn.addEventListener('click', () => {
  if (!isMediumExpended) {
    showMediumItems(mediumSections.length);
    
    showMediumMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-up mr-2"></i> Less';
    isMediumExpended = true;
  } else {
    if (windowSize >= 1280) {
      showMediumItems(3);
    } else {
      showMediumItems(4);
    }

    showMediumMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-down mr-2"></i> More';
    isMediumExpended = false;
  }
});

// check mode
const savedMode = localStorage.getItem("mode");
const modeToggleBtn = document.getElementById("modeToggleBtn");

if (savedMode) {
  setMode(savedMode);
} else {
  setMode('light');
}

function setMode(mode) {
  // เซ็ตโหมด
  document.body.classList.toggle("dark-mode", mode === "dark");

  localStorage.setItem("mode", mode);

  if (mode === "light") {
    document.documentElement.style.setProperty("--bg-primary", "#000000");
    document.documentElement.style.setProperty("--bg-secondary", "#000000");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    document.documentElement.style.setProperty("--shadow-primary", "#020617");
    modeToggleBtn.innerHTML = `<i class="fa-regular fa-lightbulb"></i>`
  } else {
    document.documentElement.style.setProperty("--bg-primary", "#ffffff");
    document.documentElement.style.setProperty("--bg-secondary", "#f3f4f6");
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty("--shadow-primary", "#f1f5f9");
    modeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
  }
}

// mode toggle
modeToggleBtn.addEventListener("click", function() {
  const body = document.body;
  const currentMode = body.classList.contains("dark-mode") ? "dark" : "light";
  setMode(currentMode)

  // สลับคลาส dark-mode บน body
  body.classList.toggle("dark-mode");

  // สลับ CSS Variables ตามโหมด
  if (currentMode === "light") {
    document.documentElement.style.setProperty("--bg-primary", "#000000");
    document.documentElement.style.setProperty("--bg-secondary", "#000000");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
    modeToggleBtn.innerHTML = `<i class="fa-regular fa-lightbulb"></i>`
  } else {
    document.documentElement.style.setProperty("--bg-primary", "#ffffff");
    document.documentElement.style.setProperty("--bg-secondary", "#f3f4f6");
    document.documentElement.style.setProperty("--text-color", "#000000");
    modeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
  }
});

// scroll to top button
const backToTopBtn = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
