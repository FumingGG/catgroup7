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

const knowledge = {
  approach:{
    icon:"✋", label:"APPROACH", title:"เข้าใกล้อย่างใจเย็น",
    intro:"แมวที่เราไม่คุ้นเคยอาจตกใจได้ง่าย การเปิดโอกาสให้แมวเลือกเข้าหาเองช่วยลดความเครียดและลดโอกาสเกิดการกัดหรือข่วน",
    good:["เดินเข้าใกล้ช้า ๆ จากด้านข้าง","ย่อตัวลงและเว้นระยะให้แมวมีทางหนี","ยื่นหลังมือให้แมวดมก่อนสัมผัส"],
    avoid:["วิ่งเข้าหาหรือไล่ตาม","อุ้มทันทีโดยไม่ดูปฏิกิริยา","ปิดทางหนีหรือรุมล้อมแมว"],
    action:"ถ้าแมวถอย หูลู่ ตัวเกร็ง หรือส่งเสียงขู่ ให้หยุดและเพิ่มระยะห่างทันที"
  },
  body:{
    icon:"👀", label:"BODY LANGUAGE", title:"อ่านภาษากายของแมว",
    intro:"การดูท่าทางทั้งตัวสำคัญกว่าดูเพียงหางหรือหูอย่างเดียว เพราะพฤติกรรมของแมวเปลี่ยนตามบริบทและระดับความเครียด",
    good:["ท่าทางผ่อนคลายและเคลื่อนไหวเป็นธรรมชาติ","หางยกหรือเข้ามาถูตัวอาจบอกว่าเปิดรับการมีปฏิสัมพันธ์","กระพริบตาช้า ๆ มักพบในช่วงที่แมวผ่อนคลาย"],
    avoid:["หูลู่แนบศีรษะ","หางฟาดแรงหรือตัวเกร็ง","ขู่ ฟ่อ หรือพยายามหลบหนี"],
    action:"ถ้าสัญญาณหลายอย่างบ่งชี้ว่าไม่สบายใจ ให้หยุดสัมผัสและปล่อยให้แมวเป็นฝ่ายตัดสินใจต่อ"
  },
  touch:{
    icon:"🤍", label:"TOUCH", title:"สัมผัสอย่างเหมาะสม",
    intro:"แมวแต่ละตัวชอบการสัมผัสไม่เหมือนกัน แม้เป็นแมวที่ดูเป็นมิตรก็ควรเริ่มจากการสัมผัสสั้น ๆ และสังเกตการตอบสนอง",
    good:["เริ่มบริเวณแก้ม ใต้คาง หรือด้านข้างศีรษะ","ลูบสั้น ๆ แล้วหยุดดูว่าแมวเข้าหาต่อหรือไม่","เคารพข้อมูลข้อควรระวังในโปรไฟล์ของแมวแต่ละตัว"],
    avoid:["จับท้อง อุ้งเท้า หรือหางโดยไม่จำเป็น","กอดรัดแน่นหรืออุ้มนาน","ปลุกหรือจับแมวขณะกำลังนอน"],
    action:"ถ้าแมวหันมากัดเบา ๆ สะบัดหาง หรือเดินหนี ให้ถือว่าเป็นสัญญาณให้หยุดสัมผัส"
  },
  food:{
    icon:"🍽️", label:"FOOD", title:"ให้อาหารอย่างรับผิดชอบ",
    intro:"การให้อาหารควรสอดคล้องกับผู้ดูแลและข้อมูลสุขภาพของแมว เพราะการให้อาหารซ้ำหรืออาหารที่ไม่เหมาะสมอาจกระทบสุขภาพได้",
    good:["เลือกอาหารแมวและน้ำสะอาด","เช็กโปรไฟล์ว่ามีข้อจำกัดด้านสุขภาพหรือไม่","สอบถามผู้ดูแลหากมีการให้อาหารเป็นเวลาอยู่แล้ว"],
    avoid:["ช็อกโกแลต หัวหอม กระเทียม องุ่น ลูกเกด และคาเฟอีน","อาหารปรุงรสจัดหรือกระดูกชิ้นเล็ก","วางอาหารทิ้งไว้จนเสียหรือรบกวนพื้นที่ส่วนกลาง"],
    action:"ถ้าไม่แน่ใจว่าแมวกินอะไรได้ ให้เลือกไม่ให้อาหารและแจ้งหรือสอบถามทีมดูแลก่อน"
  },
  vaccine:{
    icon:"💉", label:"HEALTH RECORD", title:"วัคซีนและการทำหมัน",
    intro:"MDCU CATalogue ใช้ข้อมูลวัคซีนและการทำหมันเป็นส่วนหนึ่งของเวชระเบียน เพื่อให้ผู้ใช้งานและทีมดูแลเห็นสถานะล่าสุดของแมวแต่ละตัวได้ง่ายขึ้น",
    good:["ดูวันที่อัปเดตข้อมูลในโปรไฟล์","แยกสถานะ 'ยืนยันแล้ว' กับ 'อยู่ระหว่างตรวจสอบ' ให้ชัดเจน","แจ้งทีมเมื่อมีข้อมูลใหม่จากผู้ดูแลหรือหน่วยงานที่เกี่ยวข้อง"],
    avoid:["ถือว่าข้อมูลที่ไม่ทราบเท่ากับฉีดแล้ว","ใช้สีหรือลักษณะภายนอกเพื่อเดาสถานะสุขภาพ","แก้ข้อมูลโดยไม่มีแหล่งยืนยัน"],
    action:"หากสถานะยังไม่ยืนยัน ให้ปฏิบัติด้วยความระมัดระวังและอ้างอิงข้อมูลจากผู้ดูแลหรือบุคลากรที่เกี่ยวข้อง"
  },
  scratch:{
    icon:"🩹", label:"BITE & SCRATCH", title:"เมื่อถูกแมวกัดหรือข่วน",
    intro:"แผลจากการกัดหรือข่วนควรได้รับการดูแลทันที เพราะแม้แผลจะดูเล็กก็อาจมีความเสี่ยงต่อการติดเชื้อได้",
    good:["ล้างแผลทันทีด้วยน้ำไหลและสบู่ให้ทั่ว","หลีกเลี่ยงการปิดแผลแน่นเกินไปและเฝ้าดูอาการ","จดจำหรือเปิดโปรไฟล์แมวตัวที่เกี่ยวข้องเพื่อดูข้อมูลประกอบ"],
    avoid:["ปล่อยแผลไว้โดยไม่ล้าง","ใช้ข้อมูลวัคซีนของแมวแทนการประเมินทางการแพทย์","รอให้อาการหนักก่อนขอคำแนะนำ"],
    action:"หากเป็นแผลลึก เลือดออกมาก บวมแดงปวดมาก หรือมีข้อกังวลเรื่องบาดทะยัก/พิษสุนัขบ้า ควรไปพบแพทย์เพื่อประเมินโดยเร็ว"
  }
};

const grid = document.getElementById("catGrid");
const search = document.getElementById("searchInput");
const buttons = document.querySelectorAll(".filter");
const modal = document.getElementById("profileModal");
const modalContent = document.getElementById("modalContent");
const knowledgeModal = document.getElementById("knowledgeModal");
const knowledgeModalContent = document.getElementById("knowledgeModalContent");
let activeFilter = "all";

function render(){
  if(!grid || !search) return;
  const q = search.value.trim().toLowerCase();
  const filtered = cats.filter(cat => {
    const text = [cat.name,cat.color,cat.area,cat.personality,cat.short].join(" ").toLowerCase();
    return text.includes(q) && (activeFilter === "all" || cat.tags.includes(activeFilter));
  });

  grid.innerHTML = filtered.map(cat => `
    <article class="cat-card" data-id="${cat.id}" tabindex="0">
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
    card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openProfile(card.dataset.id); } });
  });
}

function profileUrl(id){
  const url = new URL(window.location.href);
  url.hash = "";
  url.searchParams.set("cat",id);
  return url.toString();
}

function openProfile(id, updateUrl=true){
  const cat = cats.find(c => c.id === id);
  if(!cat || !modal || !modalContent) return;
  modalContent.innerHTML = `
    <div class="profile-top">
      <div class="profile-avatar">${cat.emoji}</div>
      <div>
        <span class="eyebrow">CAT PROFILE · MDCU CATALOGUE</span>
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
      <strong>ลิงก์เฉพาะตัวสำหรับ QR</strong><br>
      ${profileUrl(cat.id)}
    </div>
  `;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  if(updateUrl){
    const url = new URL(window.location.href);
    url.hash = "";
    url.searchParams.set("cat",cat.id);
    history.replaceState({},"",url);
  }
}

function closeProfile(){
  if(!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
  const url = new URL(window.location.href);
  url.searchParams.delete("cat");
  history.replaceState({},"",url);
}

document.querySelectorAll("[data-close='true']").forEach(el => el.addEventListener("click", closeProfile));

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});
if(search) search.addEventListener("input", render);
render();

function openKnowledge(id){
  const item = knowledge[id];
  if(!item || !knowledgeModal || !knowledgeModalContent) return;
  const list = arr => arr.map(x => `<li>${x}</li>`).join("");
  knowledgeModalContent.innerHTML = `
    <div class="knowledge-modal-head">
      <div class="knowledge-modal-icon">${item.icon}</div>
      <div>
        <span class="eyebrow">${item.label}</span>
        <h2>${item.title}</h2>
      </div>
    </div>
    <p class="knowledge-modal-intro">${item.intro}</p>
    <div class="knowledge-detail-grid">
      <div class="knowledge-detail good"><h3>✓ ควรทำ</h3><ul>${list(item.good)}</ul></div>
      <div class="knowledge-detail avoid"><h3>× ควรหลีกเลี่ยง</h3><ul>${list(item.avoid)}</ul></div>
    </div>
    <div class="knowledge-action"><strong>จำไว้</strong><p>${item.action}</p></div>
  `;
  knowledgeModal.classList.remove("hidden");
  knowledgeModal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeKnowledge(){
  if(!knowledgeModal) return;
  knowledgeModal.classList.add("hidden");
  knowledgeModal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".knowledge-card").forEach(card => {
  card.addEventListener("click", () => openKnowledge(card.dataset.knowledge));
  card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openKnowledge(card.dataset.knowledge); } });
});
document.querySelectorAll("[data-knowledge-close='true']").forEach(el => el.addEventListener("click", closeKnowledge));

document.addEventListener("keydown", e => {
  if(e.key === "Escape"){
    if(modal && !modal.classList.contains("hidden")) closeProfile();
    if(knowledgeModal && !knowledgeModal.classList.contains("hidden")) closeKnowledge();
  }
});

const progress = document.getElementById("scrollProgress");
function updateProgress(){
  if(!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
}
window.addEventListener("scroll",updateProgress,{passive:true});
updateProgress();

const revealItems = document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.08,rootMargin:"0px 0px -20px 0px"});
  revealItems.forEach(el => observer.observe(el));
}else{
  revealItems.forEach(el => el.classList.add("visible"));
}

const initialCat = new URLSearchParams(window.location.search).get("cat");
if(initialCat && cats.some(c => c.id === initialCat)){
  setTimeout(() => openProfile(initialCat,false),100);
}
