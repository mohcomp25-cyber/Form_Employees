/* ── CONFIG ── */
const WEBHOOK_URL = "https://dwadawdawd.app.n8n.cloud/webhook-test/2954b5e3-4c30-4c96-a60c-afd19992ee60";

/* ── STATE ── */
let currentLang = 'ar';
let currentPayType = 'bank';

/* ── TRANSLATIONS ── */
const T = {
  ar: {
    dir: 'rtl',
    progress: 'اكتمال النموذج',
    sec1: 'المعلومات الشخصية', sec1d: 'البيانات الأساسية للموظف',
    sec2: 'المعلومات البنكية', sec2d: 'بيانات الراتب والدفع',
    sec3: 'الطوارئ والعنوان', sec3d: 'معلومات التواصل والسكن',
    sec4: 'المستندات المطلوبة', sec4d: 'صور الوثائق الرسمية',
    fullname: 'الاسم الكامل (كما في الإقامة)', fullname_ph: 'الاسم الرباعي كما هو في الإقامة',
    iqamanum: 'رقم الإقامة', iqamanum_ph: 'XXXXXXXXXX',
    phone: 'رقم الجوال', phone_ph: '05XXXXXXXX',
    email: 'البريد الإلكتروني', email_ph: 'example@email.com',
    dob: 'تاريخ الميلاد',
    workplace: 'جهة العمل (الفرع)', workplace_ph: 'اسم الفرع أو الشركة',
    jobtitle: 'المسمى الوظيفي', jobtitle_ph: 'مثال: مشغّل منصة، محاسب...',
    paytype: 'طريقة استلام الراتب',
    btn_bank: 'تحويل بنكي', btn_cash: 'كاش',
    iban: 'رقم الآيبان', iban_hint: 'أدخل الأرقام فقط — SA مضافة تلقائياً',
    bank: 'اسم البنك', bank_ph: 'اختر البنك...',
    accnum: 'رقم الحساب', accnum_ph: 'رقم الحساب البنكي',
    cash_title: 'تم اختيار الدفع كاش', cash_sub: 'سيتم تسليم الراتب نقداً — لا حاجة لبيانات بنكية',
    homeaddress: 'عنوانك في بلد الأصل', homeaddress_ph: 'الدولة، المدينة، الحي، الشارع...',
    emergency: 'رقم الطوارئ في بلدك', emergency_ph: '+92 0300 000 0000',
    up_iqama: 'رفع صورة الإقامة', up_health: 'رفع الكرت الصحي (اختياري)', up_photo: 'رفع الصورة الشخصية',
    lbl_iqama: 'صورة الإقامة', lbl_health: 'الكرت الصحي', lbl_photo: 'الصورة الشخصية',
    iqama_note: 'إذا لم تتوفر صورة الإقامة، ارفع <strong>جواز السفر</strong> أو <strong>تأشيرة العمل</strong>',
    submit: 'إرسال البيانات ←',
    submit_note: '🔒 بياناتك محمية ومشفّرة',
    sending: 'جاري الإرسال...',
    success_title: 'تم الإرسال بنجاح! 🎉',
    success_sub: 'شكراً، سيتم مراجعة معلوماتك من قِبل الفريق قريباً.',
    err_pre: '⚠️ يرجى تعبئة: ', err_file: '⚠️ يرجى رفع: ', err_conn: 'خطأ في الاتصال. تحقق من الإنترنت وأعد المحاولة.',
    v_fullname: 'الاسم الكامل', v_iqamanum: 'رقم الإقامة', v_phone: 'رقم الجوال',
    v_email: 'البريد الإلكتروني', v_dob: 'تاريخ الميلاد', v_workplace: 'جهة العمل',
    v_jobtitle: 'المسمى الوظيفي', v_iban: 'رقم الآيبان', v_bank: 'اسم البنك',
    v_accnum: 'رقم الحساب', v_homeaddress: 'عنوان بلد الأصل', v_emergency: 'رقم الطوارئ',
    v_iqama: 'صورة الإقامة', v_photo: 'الصورة الشخصية',
    badge1: 'نموذج آمن ومشفر', badge2: 'ثلاث لغات', badge3: 'معالجة فورية',
  },
  en: {
    dir: 'ltr',
    progress: 'Form Completion',
    sec1: 'Personal Information', sec1d: 'Basic employee data',
    sec2: 'Banking Information', sec2d: 'Salary and payment details',
    sec3: 'Emergency & Address', sec3d: 'Contact and residence info',
    sec4: 'Required Documents', sec4d: 'Official document photos',
    fullname: 'Full Name (as in Iqama)', fullname_ph: 'Full name as shown on Iqama',
    iqamanum: 'Iqama Number', iqamanum_ph: 'XXXXXXXXXX',
    phone: 'Mobile Number', phone_ph: '05XXXXXXXX',
    email: 'Email Address', email_ph: 'example@email.com',
    dob: 'Date of Birth',
    workplace: 'Workplace (Branch)', workplace_ph: 'Branch or company name',
    jobtitle: 'Job Title', jobtitle_ph: 'e.g. Platform Operator, Accountant...',
    paytype: 'Salary Payment Method',
    btn_bank: 'Bank Transfer', btn_cash: 'Cash',
    iban: 'IBAN Number', iban_hint: 'Numbers only — SA is added automatically',
    bank: 'Bank Name', bank_ph: 'Select bank...',
    accnum: 'Account Number', accnum_ph: 'Bank account number',
    cash_title: 'Cash Payment Selected', cash_sub: 'Salary will be paid in cash — no bank details needed',
    homeaddress: 'Home Address (Home Country)', homeaddress_ph: 'Country, City, District, Street...',
    emergency: 'Emergency Number (Home Country)', emergency_ph: '+92 0300 000 0000',
    up_iqama: 'Upload Iqama Photo', up_health: 'Upload Health Card (optional)', up_photo: 'Upload Personal Photo',
    lbl_iqama: 'Iqama Photo', lbl_health: 'Health Card', lbl_photo: 'Personal Photo',
    iqama_note: 'If no Iqama photo available, upload <strong>Passport</strong> or <strong>Work Visa</strong> instead',
    submit: 'Submit Information →',
    submit_note: '🔒 Your data is secure and encrypted',
    sending: 'Sending...',
    success_title: 'Submitted Successfully! 🎉',
    success_sub: 'Thank you. Your information will be reviewed by the team shortly.',
    err_pre: '⚠️ Please fill in: ', err_file: '⚠️ Please upload: ', err_conn: 'Connection error. Check your internet and try again.',
    v_fullname: 'Full Name', v_iqamanum: 'Iqama Number', v_phone: 'Mobile Number',
    v_email: 'Email', v_dob: 'Date of Birth', v_workplace: 'Workplace',
    v_jobtitle: 'Job Title', v_iban: 'IBAN', v_bank: 'Bank Name',
    v_accnum: 'Account Number', v_homeaddress: 'Home Address', v_emergency: 'Emergency Number',
    v_iqama: 'Iqama Photo', v_photo: 'Personal Photo',
    badge1: 'Secure & Encrypted', badge2: 'Trilingual Form', badge3: 'Instant Processing',
  },
  ur: {
    dir: 'rtl',
    progress: 'فارم کی تکمیل',
    sec1: 'ذاتی معلومات', sec1d: 'ملازم کا بنیادی ڈیٹا',
    sec2: 'بینکنگ معلومات', sec2d: 'تنخواہ اور ادائیگی کی تفصیل',
    sec3: 'ہنگامی رابطہ اور پتہ', sec3d: 'رابطے اور رہائش کی معلومات',
    sec4: 'ضروری دستاویزات', sec4d: 'سرکاری دستاویزات کی تصاویر',
    fullname: 'پورا نام (اقامہ کے مطابق)', fullname_ph: 'اقامہ پر درج پورا نام',
    iqamanum: 'اقامہ نمبر', iqamanum_ph: 'XXXXXXXXXX',
    phone: 'موبائل نمبر', phone_ph: '05XXXXXXXX',
    email: 'ای میل', email_ph: 'example@email.com',
    dob: 'تاریخ پیدائش',
    workplace: 'کام کی جگہ (برانچ)', workplace_ph: 'برانچ یا کمپنی کا نام',
    jobtitle: 'عہدہ', jobtitle_ph: 'مثلاً: آپریٹر، اکاؤنٹنٹ...',
    paytype: 'تنخواہ وصول کرنے کا طریقہ',
    btn_bank: 'بینک ٹرانسفر', btn_cash: 'نقد',
    iban: 'آئبان نمبر', iban_hint: 'صرف نمبر درج کریں — SA خود بخود شامل ہوگا',
    bank: 'بینک کا نام', bank_ph: 'بینک منتخب کریں...',
    accnum: 'اکاؤنٹ نمبر', accnum_ph: 'بینک اکاؤنٹ نمبر',
    cash_title: 'نقد ادائیگی منتخب', cash_sub: 'تنخواہ نقد دی جائے گی — بینک تفصیل کی ضرورت نہیں',
    homeaddress: 'وطن میں پتہ', homeaddress_ph: 'ملک، شہر، علاقہ، گلی...',
    emergency: 'وطن میں ہنگامی نمبر', emergency_ph: '+92 0300 000 0000',
    up_iqama: 'اقامہ اپلوڈ کریں', up_health: 'صحت کارڈ اپلوڈ کریں (اختیاری)', up_photo: 'ذاتی تصویر اپلوڈ کریں',
    lbl_iqama: 'اقامہ تصویر', lbl_health: 'صحت کارڈ', lbl_photo: 'ذاتی تصویر',
    iqama_note: 'اگر اقامہ دستیاب نہیں، <strong>پاسپورٹ</strong> یا <strong>ورک ویزہ</strong> اپلوڈ کریں',
    submit: 'معلومات جمع کریں ←',
    submit_note: '🔒 آپ کا ڈیٹا محفوظ اور خفیہ ہے',
    sending: 'بھیجا جا رہا ہے...',
    success_title: 'کامیابی سے جمع ہو گیا! 🎉',
    success_sub: 'شکریہ، آپ کی معلومات جلد ٹیم کی طرف سے جائزہ لی جائے گی۔',
    err_pre: '⚠️ براہ کرم پُر کریں: ', err_file: '⚠️ براہ کرم اپلوڈ کریں: ', err_conn: 'کنکشن خرابی۔ انٹرنیٹ چیک کریں اور دوبارہ کوشش کریں۔',
    v_fullname: 'پورا نام', v_iqamanum: 'اقامہ نمبر', v_phone: 'موبائل نمبر',
    v_email: 'ای میل', v_dob: 'تاریخ پیدائش', v_workplace: 'کام کی جگہ',
    v_jobtitle: 'عہدہ', v_iban: 'آئبان', v_bank: 'بینک',
    v_accnum: 'اکاؤنٹ نمبر', v_homeaddress: 'وطن کا پتہ', v_emergency: 'ہنگامی نمبر',
    v_iqama: 'اقامہ تصویر', v_photo: 'ذاتی تصویر',
    badge1: 'محفوظ اور خفیہ', badge2: 'تین زبانیں', badge3: 'فوری کارروائی',
  }
};

/* ── LANG SWITCH ── */
function setLang(lang, btn) {
  currentLang = lang;
  const t = T[lang];
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyTranslations(t);
  updateProgress();
}

function applyTranslations(t) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setPH = (id, val) => { const el = document.getElementById(id); if (el) el.placeholder = val; };

  set('t-progress', t.progress);
  set('t-sec1', t.sec1); set('t-sec1d', t.sec1d);
  set('t-sec2', t.sec2); set('t-sec2d', t.sec2d);
  set('t-sec3', t.sec3); set('t-sec3d', t.sec3d);
  set('t-sec4', t.sec4); set('t-sec4d', t.sec4d);
  set('t-lbl-fullname', t.fullname); setPH('fullname', t.fullname_ph);
  set('t-lbl-iqamanum', t.iqamanum); setPH('iqamanum', t.iqamanum_ph);
  set('t-lbl-phone', t.phone); setPH('phone', t.phone_ph);
  set('t-lbl-email', t.email); setPH('email', t.email_ph);
  set('t-lbl-dob', t.dob);
  set('t-lbl-workplace', t.workplace);
  set('t-lbl-jobtitle', t.jobtitle); setPH('jobtitle', t.jobtitle_ph);
  set('t-lbl-paytype', t.paytype);
  set('t-btn-bank', t.btn_bank); set('t-btn-cash', t.btn_cash);
  set('t-lbl-iban', t.iban); set('t-iban-hint', t.iban_hint);
  set('t-lbl-bank', t.bank);
  set('t-lbl-accnum', t.accnum); setPH('accnum', t.accnum_ph);
  set('t-cash-title', t.cash_title); set('t-cash-sub', t.cash_sub);
  set('t-lbl-homeaddress', t.homeaddress); setPH('homeaddress', t.homeaddress_ph);
  set('t-lbl-emergency', t.emergency); setPH('emergency', t.emergency_ph);
  set('t-up-iqama', t.up_iqama); set('t-up-health', t.up_health); set('t-up-photo', t.up_photo);
  set('t-lbl-iqama', t.lbl_iqama); set('t-lbl-health', t.lbl_health); set('t-lbl-photo', t.lbl_photo);
  setHTML('t-iqama-note', t.iqama_note);
  set('t-submit', t.submit); set('t-submit-note', t.submit_note);
  set('t-success-title', t.success_title); set('t-success-sub', t.success_sub);
  set('t-badge1', t.badge1); set('t-badge2', t.badge2); set('t-badge3', t.badge3);

  const bankOpt = document.querySelector('#bank option[value=""]');
  if (bankOpt) bankOpt.textContent = t.bank_ph;
}

/* ── PAY TYPE ── */
function setPayType(type) {
  currentPayType = type;
  document.getElementById('btn-bank').classList.toggle('active', type === 'bank');
  document.getElementById('btn-cash').classList.toggle('active', type === 'cash');
  document.getElementById('bank-fields').style.display = type === 'bank' ? 'block' : 'none';
  document.getElementById('cash-info').style.display = type === 'cash' ? 'block' : 'none';
}

/* ── IBAN FORMAT ── */
function formatIBAN(el) {
  let v = el.value.replace(/\D/g, '');
  if (v.length > 22) v = v.slice(0, 22);
  let out = '';
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && i % 4 === 0) out += ' ';
    out += v[i];
  }
  el.value = out;
}

/* ── FILE UPLOAD ── */
function handleUpload(input, zoneId, previewId, labelId) {
  const file = input.files[0];
  if (!file) return;
  const zone = document.getElementById(zoneId);
  const preview = document.getElementById(previewId);
  const label = document.getElementById(labelId);

  zone.classList.add('has-file');
  if (label) label.textContent = file.name.length > 22 ? file.name.slice(0, 20) + '…' : file.name;

  if (preview && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
  updateProgress();
}

/* ── PROGRESS ── */
function updateProgress() {
  const requiredFields = ['fullname', 'iqamanum', 'phone', 'email', 'dob', 'workplace', 'jobtitle', 'homeaddress', 'emergency'];
  const bankFields = ['iban', 'bank', 'accnum'];
  const requiredFiles = ['f-iqama', 'f-photo'];

  let filled = 0;
  let total = requiredFields.length + requiredFiles.length + (currentPayType === 'bank' ? bankFields.length : 0);

  requiredFields.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value.trim()) filled++;
  });

  if (currentPayType === 'bank') {
    bankFields.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value.trim()) filled++;
    });
  }

  requiredFiles.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.files.length) filled++;
  });

  const pct = Math.round((filled / total) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

/* ── COMPRESS IMAGE ── */
function toBase64Compressed(file) {
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let w = img.width, h = img.height;
      const max = 900;
      if (w > max) { h = Math.round(h * max / w); w = max; }
      if (h > max) { w = Math.round(w * max / h); h = max; }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      res(canvas.toDataURL('image/jpeg', 0.72).split(',')[1]);
    };
    img.onerror = rej;
    img.src = url;
  });
}

/* ── SUBMIT ── */
async function submitForm() {
  const t = T[currentLang];
  const btn = document.getElementById('t-submit');

  const required = [
    { id: 'fullname', l: t.v_fullname }, { id: 'iqamanum', l: t.v_iqamanum },
    { id: 'phone', l: t.v_phone }, { id: 'email', l: t.v_email },
    { id: 'dob', l: t.v_dob }, { id: 'workplace', l: t.v_workplace },
    { id: 'jobtitle', l: t.v_jobtitle }, { id: 'homeaddress', l: t.v_homeaddress },
    { id: 'emergency', l: t.v_emergency }
  ];

  if (currentPayType === 'bank') {
    required.push({ id: 'iban', l: t.v_iban }, { id: 'bank', l: t.v_bank }, { id: 'accnum', l: t.v_accnum });
  }

  for (const f of required) {
    const el = document.getElementById(f.id);
    if (!el.value.trim()) {
      el.focus();
      el.classList.add('error');
      setTimeout(() => el.classList.remove('error'), 2500);
      alert(t.err_pre + f.l);
      return;
    }
  }

  const reqFiles = [{ id: 'f-iqama', l: t.v_iqama }, { id: 'f-photo', l: t.v_photo }];
  for (const f of reqFiles) {
    if (!document.getElementById(f.id).files.length) {
      alert(t.err_file + f.l);
      return;
    }
  }

  btn.textContent = t.sending;
  btn.disabled = true;

  try {
    const healthFile = document.getElementById('f-health').files[0];
    const [iqamaImg, healthImg, photoImg] = await Promise.all([
      toBase64Compressed(document.getElementById('f-iqama').files[0]),
      healthFile ? toBase64Compressed(healthFile) : Promise.resolve(null),
      toBase64Compressed(document.getElementById('f-photo').files[0])
    ]);

    const ibanRaw = currentPayType === 'bank' ? document.getElementById('iban').value.replace(/\s/g, '') : '';

    const payload = {
      fullname: document.getElementById('fullname').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      dob: document.getElementById('dob').value,
      workplace: document.getElementById('workplace').value.trim(),
      job_title: document.getElementById('jobtitle').value.trim(),
      iqama_number: document.getElementById('iqamanum').value.trim(),
      payment_type: currentPayType,
      iban: currentPayType === 'bank' ? 'SA' + ibanRaw : 'كاش',
      bank_name: currentPayType === 'bank' ? document.getElementById('bank').value : 'كاش',
      account_number: currentPayType === 'bank' ? document.getElementById('accnum').value.trim() : 'كاش',
      home_address: document.getElementById('homeaddress').value.trim(),
      emergency_number: document.getElementById('emergency').value.trim(),
      iqama_image_base64: iqamaImg,
      health_card_base64: healthImg,
      personal_photo_base64: photoImg,
      form_language: currentLang,
      submitted_at: new Date().toISOString()
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', WEBHOOK_URL, true);
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.onload = () => showSuccess();
    xhr.onerror = () => {
      btn.textContent = T[currentLang].submit;
      btn.disabled = false;
      alert(t.err_conn);
    };
    xhr.send(JSON.stringify(payload));
  } catch (err) {
    btn.textContent = T[currentLang].submit;
    btn.disabled = false;
    alert(t.err_conn);
  }
}

function showSuccess() {
  document.getElementById('form-content').style.display = 'none';
  const sm = document.getElementById('success-screen');
  sm.classList.add('show');
  launchConfetti();
}

function launchConfetti() {
  const area = document.getElementById('confetti-area');
  const colors = ['#FF6B00', '#FFB347', '#4CAF50', '#2196F3', '#9C27B0', '#FF5722', '#FFC107'];
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('div');
    s.className = 'confetti-piece';
    s.style.cssText = `
      left: ${Math.random() * 100}%;
      bottom: 0;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
      animation-delay: ${Math.random() * 0.8}s;
      animation-duration: ${0.9 + Math.random() * 0.8}s;
    `;
    area.appendChild(s);
  }
}

/* ── LIVE PROGRESS + SCROLL + INTERACTIONS ── */
document.addEventListener('DOMContentLoaded', () => {
  // Live progress
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(el => el.addEventListener('input', updateProgress));
  updateProgress();

  // Top bar scroll effect
  const topBar = document.querySelector('.top-bar');
  window.addEventListener('scroll', () => {
    topBar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Input focus ripple glow
  document.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('focus', function() {
      this.closest('.field')?.querySelector('.field-label')?.classList.add('active-label');
    });
    el.addEventListener('blur', function() {
      this.closest('.field')?.querySelector('.field-label')?.classList.remove('active-label');
    });
  });

  // Scroll reveal sections
  const sections = document.querySelectorAll('.form-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });
  sections.forEach(s => observer.observe(s));

  // Upload zone drag & drop
  document.querySelectorAll('.upload-zone').forEach(zone => {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      zone.style.borderColor = 'var(--brand-primary)';
      zone.style.background = 'var(--brand-light)';
    });
    zone.addEventListener('dragleave', () => {
      zone.style.borderColor = '';
      zone.style.background = '';
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.style.borderColor = '';
      zone.style.background = '';
      const input = zone.querySelector('input[type=file]');
      if (input && e.dataTransfer.files.length) {
        const dt = new DataTransfer();
        dt.items.add(e.dataTransfer.files[0]);
        input.files = dt.files;
        input.dispatchEvent(new Event('change'));
      }
    });
  });

  // Pay options click animation
  document.querySelectorAll('.pay-option').forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.transform = 'scale(0.96)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    });
  });

  // Submit button loading state
  document.getElementById('t-submit')?.addEventListener('click', function() {
    if (!this.disabled) {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => { this.style.transform = ''; }, 150);
    }
  });
});
