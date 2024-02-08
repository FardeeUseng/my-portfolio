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
]

const activityContainer = document.getElementById("activity-content");

// create element for show activity items
const showActivityItems = (lastIndex) => {
  activityContainer.innerHTML = "";

  activitySections.slice(0, lastIndex).forEach(activity => {
    const activityItem = document.createElement("div");
    activityItem.classList.add('min-h-[400px]', 'w-full', 'rounded-lg', 'p-6', 'bg-white', 'shadow-2xl', 'shadow-slate-300');
    activityItem.innerHTML = `
      <h3 class="text-3xl truncate">${activity.title}</h3>
      <p class="max-w-full max-h-72px line-clamp-2 overflow-hidden my-4 indent-5">
        ${activity.content}
      </p>
      <div class="relative">
        <img src="${activity.imageUrl}" alt="activity" class="w-full h-[300px] object-cover">
        <button onClick="window.open('${activity.activityLink}', '_blank')" class="text-white absolute bottom-2 right-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 w-32 ml-1">
          Preview
        </button>
      </div>
    `
    activityContainer.appendChild(activityItem);
  });
}

// loop activity item
showActivityItems(3);

// start user click to see more activity
const showActivityMoreBtn = document.getElementById("more-acctivity");

let isExpended = false;

showActivityMoreBtn.addEventListener('click', () => {
  
  if (!isExpended) {
    showActivityItems(activitySections.length);
    
    showActivityMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-up mr-2"></i> Less';
    isExpended = true;
  } else {
    showActivityItems(3);

    showActivityMoreBtn.innerHTML = '<i id="more-icon" class="fa-solid fa-arrow-down mr-2"></i> More';
    isExpended = false;
  }
})
// end user click to see more activity

// end activity section