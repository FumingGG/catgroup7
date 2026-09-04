const cats = [
  {
    id:"somjeed", name:"ส้มจี๊ด", color:"ส้มลายขาว", sex:"ผู้", age:"ประมาณ 3 ปี",
    area:"หน้าอาคารเรียนรวม", personality:"ขี้อ้อน ชอบเดินมาหาคน แต่ไม่ชอบถูกอุ้มนาน",
    vaccination:"ฉีดวัคซีนพื้นฐานแล้ว", neutered:"ทำหมันแล้ว", health:"แข็งแรงทั่วไป",
    caution:"สามารถลูบได้ แต่ควรหลีกเลี่ยงการจับหาง", tags:["friendly"], emoji:"🐈",
    updated:"4 ก.ย. 2026", short:"แมวส้มประจำหน้าอาคาร เป็นมิตรกับคนและชอบนอนใกล้ทางเดิน"
  },
  {
    id:"mali", name:"มะลิ", color:"ขาวเทา", sex:"เมีย", age:"ประมาณ 2 ปี",
    area:"สวนข้างห้องสมุด", personality:"ค่อนข้างขี้อาย ต้องใช้เวลาสักพักก่อนจะยอมเข้าใกล้",
    vaccination:"อยู่ระหว่างตรวจสอบ", neutered:"ทำหมันแล้ว", health:"แข็งแรงทั่วไป",
    caution:"ไม่ควรไล่จับหรือเดินเข้าหาเร็ว", tags:["shy"], emoji:"🐱",
    updated:"1 ก.ย. 2026", short:"ชอบอยู่บริเวณเงียบ ๆ และมักหลบคนที่ไม่คุ้นเคย"
  },
  {
    id:"tua-dam", name:"ถั่วดำ", color:"ดำสนิท", sex:"ผู้", age:"ประมาณ 4 ปี",
    area:"ลานจอดรถด้านหลัง", personality:"สุขุม เป็นมิตรเฉพาะคนคุ้นเคย",
    vaccination:"ฉีดแล้วบางรายการ", neutered:"ทำหมันแล้ว", health:"มีรอยแผลเก่าที่หูซ้าย",
    caution:"ไม่ควรแตะบริเวณศีรษะจากด้านบนทันที", tags:["cautious"], emoji:"🐈‍⬛",
    updated:"3 ก.ย. 2026", short:"แมวดำตัวใหญ่ สุขุม และมักอยู่บริเวณลานจอดรถช่วงเย็น"
  },
  {
    id:"nomyen", name:"นมเย็น", color:"ครีมแต้มส้ม", sex:"เมีย", age:"ประมาณ 1 ปี",
    area:"โรงอาหาร", personality:"ขี้เล่น ชอบคนและชอบเดินตาม",
    vaccination:"ฉีดวัคซีนพื้นฐานแล้ว", neutered:"ยังไม่ทราบ", health:"แข็งแรงทั่วไป",
    caution:"ไม่ควรให้อาหารคนโดยตรง", tags:["friendly"], emoji:"😺",
    updated:"2 ก.ย. 2026", short:"แมววัยเด็กพลังงานสูง เจอได้บ่อยบริเวณโรงอาหาร"
  },
  {
    id:"mocha", name:"มอคค่า", color:"น้ำตาลเทา", sex:"ผู้", age:"ประมาณ 5 ปี",
    area:"อาคารกิจกรรมนิสิต", personality:"นิ่ง ชอบนอน และไม่ค่อยสนใจคน",
    vaccination:"ยังไม่มีข้อมูล", neutered:"ทำหมันแล้ว", health:"ควรติดตามน้ำหนัก",
    caution:"ไม่ควรปลุกหรือจับขณะนอน", tags:["shy"], emoji:"😽",
    updated:"31 ส.ค. 2026", short:"แมวรุ่นใหญ่ใจเย็น ชอบหามุมเงียบ ๆ นอนช่วงกลางวัน"
  },
  {
    id:"oreo", name:"โอรีโอ", color:"ดำขาว", sex:"เมีย", age:"ประมาณ 3 ปี",
    area:"หน้าห้องแลบชั้น 1", personality:"เป็นมิตร แต่ตกใจง่ายเมื่อมีเสียงดัง",
    vaccination:"ฉีดวัคซีนพื้นฐานแล้ว", neutered:"ทำหมันแล้ว", health:"แข็งแรงทั่วไป",
    caution:"ควรเข้าหาจากด้านหน้าและไม่ส่งเสียงดัง", tags:["friendly","cautious"], emoji:"🐾",
    updated:"4 ก.ย. 2026", short:"ดำขาวจำง่าย ชอบนั่งหน้าห้องแลบและเข้าหาคนที่นั่งนิ่ง ๆ"
  }
];

const grid = document.getElementById("catGrid");
const search = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filter");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
document.getElementById("catCount").textContent = cats.length;

let activeFilter = "all";

function render(){
  const q = search.value.trim().toLowerCase();
  const filtered = cats.filter(cat => {
    const text = [cat.name,cat.color,cat.area,cat.personality,cat.short].join(" ").toLowerCase();
    const matchSearch = text.includes(q);
    const matchFilter = activeFilter === "all" || cat.tags.includes(activeFilter);
    return matchSearch && matchFilter;
  });

  grid.innerHTML = filtered.map(cat => `
    <article class="cat-card" data-id="${cat.id}">
      <div class="cat-photo">${cat.emoji}</div>
      <div class="cat-body">
        <div class="cat-title">
          <div>
            <h3>${cat.name}</h3>
            <div class="meta">${cat.color} • ${cat.sex}</div>
          </div>
          <span class="status">${cat.vaccination.includes("พื้นฐานแล้ว") ? "มีข้อมูลวัคซีน" : "กำลังอัปเดต"}</span>
        </div>
        <p class="cat-desc">${cat.short}</p>
        <div class="tag-row">
          <span class="tag">📍 ${cat.area}</span>
          <span class="tag">🐾 ${cat.age}</span>
        </div>
        <div class="cat-footer">
          <span>อัปเดต ${cat.updated}</span>
          <span>ดูโปรไฟล์ →</span>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".cat-card").forEach(card => {
    card.addEventListener("click", () => openProfile(card.dataset.id));
  });
}

function openProfile(id){
  const cat = cats.find(c => c.id === id);
  modalContent.innerHTML = `
    <div class="profile-top">
      <div class="profile-avatar">${cat.emoji}</div>
      <div>
        <span class="eyebrow">CAT PROFILE</span>
        <h2>${cat.name}</h2>
        <div class="profile-sub">${cat.color} • ${cat.sex} • ${cat.age}</div>
        <p>${cat.personality}</p>
      </div>
    </div>
    <div class="profile-grid">
      <div class="info-box"><span>บริเวณที่พบประจำ</span><strong>${cat.area}</strong></div>
      <div class="info-box"><span>วัคซีน</span><strong>${cat.vaccination}</strong></div>
      <div class="info-box"><span>การทำหมัน</span><strong>${cat.neutered}</strong></div>
      <div class="info-box"><span>สุขภาพเบื้องต้น</span><strong>${cat.health}</strong></div>
    </div>
    <div class="note-box"><strong>ข้อควรรู้ก่อนเข้าใกล้</strong><br>${cat.caution}</div>
    <div class="qr-link">
      ตัวอย่าง URL สำหรับ QR:<br>
      <strong>yourwebsite.com/cat/${cat.id}</strong>
    </div>
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

document.querySelectorAll("[data-close='true']").forEach(el => {
  el.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden","true");
  });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

search.addEventListener("input", render);
render();
