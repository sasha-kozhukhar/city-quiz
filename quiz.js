const CITIES = {
  ВЕЛ: { name: 'Велигама',       flag: '🇱🇰', image: 'images/veligama.jpg' },
  СТА: { name: 'Стамбул',        flag: '🇹🇷', image: 'images/istanbul.jpg' },
  ТБЛ: { name: 'Тбилиси',        flag: '🇬🇪', image: 'images/tbilisi.jpg' },
  БАТ: { name: 'Батуми',         flag: '🇬🇪', image: 'images/batumi.jpg' },
  ЕРВ: { name: 'Ереван',         flag: '🇦🇲', image: 'images/yerevan.jpg' },
  МСК: { name: 'Москва',         flag: '🇷🇺', image: 'images/moscow.jpg' },
  БДВ: { name: 'Будва',          flag: '🇲🇪', image: 'images/budva.jpg' },
  БЛГ: { name: 'Белград',        flag: '🇷🇸', image: 'images/belgrade.jpg' },
  БШК: { name: 'Бишкек',         flag: '🇰🇬', image: 'images/bishkek.jpg' },
  МДР: { name: 'Мадрид',         flag: '🇪🇸', image: 'images/madrid.jpg' },
  АГД: { name: 'Агадир',         flag: '🇲🇦', image: 'images/agadir.jpg' },
  БРЛ: { name: 'Берлин',         flag: '🇩🇪', image: 'images/berlin.jpg' },
  ЛДН: { name: 'Лондон',         flag: '🇬🇧', image: 'images/london.jpg' },
  КПТ: { name: 'Кейптаун',       flag: '🇿🇦', image: 'images/capetown.jpg' },
  ВНА: { name: 'Вена',           flag: '🇦🇹', image: 'images/vienna.jpg' },
  ЕГР: { name: 'Слонёнок Егор',  flag: '🧸',  image: 'images/egor.jpg' },
};

const DESCRIPTIONS = {
  ВЕЛ: 'Ты именно тот, кто может доедать последний хуй без соли — и при этом спокойно заказать самое дорогое блюдо из меню. Несостыковки в твоей жизни существуют, но вопросов к ним ни у кого не возникает (у тебя тоже не возникает, естественно), потому что это как-то всё равно органично складывается. Проблемы завтрашнего дня — это проблемы завтрашнего тебя. Сегодня слишком хорошо, чтобы об этом думать.',
  СТА: 'Люди, которые с тобой плохо знакомы, иногда думают, что ты просто никогда не слушаешь. На самом деле у тебя в голове происходит столько всего одновременно, что вопросы «как дела?» или «какие планы на вечер?» просто не успевают обработаться. На самом деле ты человек увлеченный и увлекающийся с набором очень специальных интересов — и не дай бог кому-то про них спросить. Но те, кому это подходит или кто случайно разделяет с тобой твои интересы от тебя уже никуда не денутся.',
  ТБЛ: 'Со стороны ты выглядишь немного снобом — но это только потому, что ты сначала смотришь, а потом открываешься. Те, с кем ты хорошо знаком, понимают: ты один из самых общительных людей в комнате. Просто это надо заслужить. Ты комфортик и плюс вайбик (г-спди прости) — но показывать это будешь только своим.',
  БАТ: 'Ты живёшь в режиме «как-нибудь получится» — и, странным образом, получается. Твой modus vivendi, да и operandi тоже — «срала, мазала, лепила» (без негатива!). У тебя внутри какой-то постоянный штиль, и это немного раздражает тех, у кого его нет.',
  ЕРВ: 'Ты говоришь «нормально» таким тоном, что сразу понятно — имеется в виду что-то другое. Да и вообще, ты на любителя. Но все мы тут на любителя, мы не $100, ясно вам? Ты пережил достаточно, чтобы не паниковать по мелочам. А уж тех, кто тебя не любит, ты точно переживёшь. Не нравится? Вас тут никто не держит.',
  МСК: 'Ты знаешь, как должно быть — и именно поэтому тебя всё бесит. Не потому что плохо, а потому что ты помнишь, как было хорошо. «Нормально» в твоём исполнении — это целая философия. Но ты, конечно, сильно позврослел и резко изменился. Иной раз вообще непонятно, кто ты такой, но ты и сам наверное это замечаешь (а может тебе это замечает кто-то другой?). Но иной раз посмотришь на тебя — а ты всё такой же как раньше. Что же с тобой случилось, дружочек?',
  БДВ: 'У тебя нет ни одной проблемы, и это не потому что ты их все решил. Ты медленный, немного ленивый и при этом совершенно доволен. В этом баре нормальное пиво стоит треть твоей зарплаты? Ну и что. Всё равно приду снова. Ты не игнорируешь проблемы — ты просто не считаешь их проблемами.',
  БЛГ: 'Тебя надо немного расшевелить — но как только это случилось, ты уже на волне. Ты пережил всякое, переварил, и теперь просто живёшь. У тебя за спиной есть история, которую ты не забыл, но и не таскаешь с собой как груз. Оттерапевтировался что ли? Ну, молодец, хвалим (точнее валидируем)!',
  БШК: 'Ты обычный парень, без выпендрёжа и понтов. Немного грубоватый, немного неуклюжий. Но за большим столом ты свой, да ты походу вообще везде свой, тебя понимают без слов. Зачем тебе какой-то план, если есть плов.',
  МДР: 'Ты отличный хост и требовательный гость. Всё должно быть по-твоему — и это оправдано, потому что у тебя действительно лучше. Ужинать в 22:00? Это не поздно, это правильно. Ты модный, громкий, почти безупречный — и совершенно не планируешь меняться ради тех, кто не разобрался.',
  АГД: 'Братан, тебя нормально так помотало! Где ты был? Что с тобой случилось? Откуда этот прикид? Ладно, давай по порядку: ты уже как будто пришёл в себя, ты уже даже почти выглядишь, как человек! Расслабься, отдышись, прокашляйся — всё нормально будет.',
  БРЛ: 'Ты объяснишь, почему опоздал на три часа — и при этом будешь прав. Ты стоишь в очереди в клуб с десяти вечера (уже светает), но официальная жалоба на шум уже подана. Всё это одновременно — и тебе самому кажется, что это логично. Ты на велосипеде, в секонде, с оформленным договором аренды на 25 лет. У тебя всё под контролем. У тебя действительно всё под контролем?',
  ЛДН: 'Ты умеешь поговорить ни о чём так, что это кажется важным разговором. Ты знал на что шёл — и цены не стали сюрпризом. Визу ты ждал полгода, документы собирал ещё дольше, и если честно — оно того стоило. Или нет. Но ты не скажешь, потому что это уже не вписывается в формат смолл-тока.',
  КПТ: 'Ты из тех, кто красиво живёт с пониманием, что в любой момент может что-то случиться. Это не тревожность — это реализм. Ты заряжаешь телефон заранее, знаешь обходные маршруты, читаешь обстановку — и при этом искренне любуешься закатом. Тебя пугали, но ты приехал и остался.',
  ВНА: 'Ты живёшь правильно. Договор подписан, маршрут выверен, жалоба уже в трёх экземплярах. Ты не скучный — ты просто знаешь, как надо. Коктейль за 30 евро? Логично, ты так и рассчитывал. У тебя холодно и ветрено или жарко и ветрено, но это закаляет. И вообще ты культурный человек. Главная твоя проблема в том, что все вокруг недостаточно стараются.',
  ЕГР: 'Тебя везут. Ты не знаешь куда. Тебя это совершенно не беспокоит — потому что ты Слонёнок Егор. У тебя нет документов, нет плана, нет мнения о пятничном вечере, но тебе ничего из этого не нужно. У тебя есть кто-то, кто тебя любит достаточно, чтобы тащить с собой везде (пусть даже в вакуумном пакете). Это, пожалуй, лучший результат из всех.',
};

const QUESTIONS = [
  {
    text: 'Незнакомый человек на вечеринке спрашивает «как дела?». Дальше:',
    options: [
      { letter: 'А', text: 'Начинаю отвечать — и выясняется, что у меня очень много всяких дел. Через полчаса этот человек знает про меня всё', scores: { СТА: 3, БАТ: 2 } },
      { letter: 'Б', text: '«Нормально, спасибо» — и смотрю на него. Мяч на его стороне', scores: { ТБЛ: 3, БРЛ: 1, ВНА: 2 } },
      { letter: 'В', text: 'Осматриваюсь сначала. Оцениваю. Потом «хорошо!» — уже проще, когда понял что ему можно доверять', scores: { БЛГ: 1, АГД: 1, КПТ: 3 } },
      { letter: 'Г', text: '«Отлично! А вы давно здесь? Кстати, вы уже пробовали эти закусочки?»', scores: { МДР: 3, ЛДН: 3 } },
      { letter: 'Д', text: '«Нормально» — говорю привычно. Но это слово теперь значит немного другое', scores: { ЕРВ: 1, МСК: 3 } },
      { letter: 'Е', text: 'Меня нет на вечеринке', scores: { ЕГР: 3 } },
    ],
  },
  {
    text: 'Что-то пошло не по плану. Твоя реакция:',
    options: [
      { letter: 'А', text: 'Разберусь завтра — сегодня слишком хорошо чтобы об этом думать', scores: { ВЕЛ: 3, МДР: 2 } },
      { letter: 'Б', text: 'Пожимаю плечами. Ну и ладно, никто особо никуда не спешил', scores: { БДВ: 3, КПТ: 2 } },
      { letter: 'В', text: 'Попереживал. Попил кофе. Как-то само отпустило', scores: { СТА: 2, ТБЛ: 2, ЕРВ: 1, БЛГ: 3, АГД: 2 } },
      { letter: 'Г', text: 'Раньше такого не было', scores: { МСК: 3 } },
      { letter: 'Д', text: 'А зачем вообще был план?', scores: { БАТ: 3, БШК: 3, ЕГР: 5 } },
      { letter: 'Е', text: 'Открываю ноутбук. Пишу новый план. Ставлю будильник', scores: { БРЛ: 3, ЛДН: 1 } },
    ],
  },
  {
    text: 'Официант приносит счёт. Смотришь в него:',
    options: [
      { letter: 'А', text: 'Логично — хлебная тарелка за 40 евро и коктейль за 20 евро', scores: { МСК: 2, ВНА: 2 } },
      { letter: 'Б', text: 'Это самое дорогое пиво которое я когда-либо пил. Всё равно приду снова', scores: { БДВ: 3 } },
      { letter: 'В', text: 'Ожидаемо — знал на что шёл', scores: { ЛДН: 3 } },
      { letter: 'Г', text: 'Всё было бы отлично, если бы не это пиво', scores: { МДР: 3 } },
      { letter: 'Д', text: 'Дешевле чем казалось снаружи', scores: { СТА: 1, ТБЛ: 2, БАТ: 1, БЛГ: 2, БРЛ: 1, КПТ: 2 } },
      { letter: 'Е', text: 'Думаю где бы достать лоперамид, или имодиум, или гевискон, или…', scores: { ЕРВ: 2, БШК: 2, АГД: 2 } },
    ],
  },
  {
    text: 'Завтрак — это:',
    options: [
      { letter: 'А', text: 'Большой стол: всего понемногу и всё своё — лаваш или лепёшка, сыр, зелень, что-то сладкое. Минимум полчаса', scores: { ВЕЛ: 3, СТА: 3, ТБЛ: 3, ЕРВ: 3 } },
      { letter: 'Б', text: 'Горячее и плотное. Одно блюдо, зато нормальное — не кофе с печенькой', scores: { БАТ: 2, БШК: 2, МДР: 2, АГД: 2 } },
      { letter: 'В', text: 'Specialty кофе, правильный хлеб, правильное место. Это тоже завтрак', scores: { БРЛ: 3 } },
      { letter: 'Г', text: 'Кофе. И идём', scores: {} },
      { letter: 'Д', text: 'Я Стасон', scores: { ЕГР: 5 } },
    ],
  },
  {
    text: 'Пятница вечером. Ты:',
    options: [
      { letter: 'А', text: 'В очереди в клуб ещё часа на 3. Могут не пустить. Всё равно доволен', scores: { БРЛ: 3 } },
      { letter: 'Б', text: 'На реке — гриль, сосиски, пиво — это и есть земля обетованная', scores: { БЛГ: 3 } },
      { letter: 'В', text: 'Ужинать — но не раньше 22:00', scores: { СТА: 2, МДР: 3 } },
      { letter: 'Г', text: 'На набережной с бокалом, смотрю в сторону воды', scores: { ТБЛ: 1, БАТ: 2, БДВ: 3, МДР: 3, КПТ: 2 } },
      { letter: 'Д', text: 'За большим столом. Одно главное блюдо на всех — и как иначе', scores: { ЕРВ: 3, БШК: 3, АГД: 3 } },
      { letter: 'Е', text: 'Дома. Это тоже культурная программа', scores: { МСК: 1, ЛДН: 1, ВНА: 2 } },
      { letter: 'Ж', text: 'Я Стасон', scores: { ЕГР: 5 } },
    ],
  },
  {
    text: 'Ты выходишь на улицу. За окном:',
    options: [
      { letter: 'А', text: '+30 и влажность 100% — я в своей стихии', scores: { ВЕЛ: 3, АГД: 1 } },
      { letter: 'Б', text: '+35 и сухо — главное не потеть', scores: { ЕРВ: 3, МДР: 3 } },
      { letter: 'В', text: 'Дождь. Снова.', scores: { БАТ: 3, БРЛ: 1, ЛДН: 3 } },
      { letter: 'Г', text: 'Холодно и ветрено. Говорят, тут всегда так', scores: { ВНА: 3 } },
      { letter: 'Д', text: '+25, лёгкий ветер, закат — вот это жизнь', scores: { СТА: 1, ТБЛ: 1, БДВ: 2, БШК: 2, КПТ: 3 } },
      { letter: 'Е', text: 'Жара. Очень тяжёлая — надо было взять воду', scores: { ЕРВ: 1, МДР: 2, АГД: 3, БШК: 2 } },
      { letter: 'Ж', text: 'Люблю, когда есть смена — осень так осень, зима так зима. Не парилка 24/7', scores: { МСК: 2, БЛГ: 2 } },
    ],
  },
  {
    text: 'Свет отключили. Твои действия:',
    options: [
      { letter: 'А', text: 'Главное, что пока есть интернет — продолжаем работу', scores: { ВЕЛ: 3, БАТ: 2, БЛГ: 2 } },
      { letter: 'Б', text: 'Пишу жалобу. В письменном виде. В трёх экземплярах', scores: { МСК: 2, БРЛ: 1, ЛДН: 1, ВНА: 3 } },
      { letter: 'В', text: 'Было бы странно если бы не отключили', scores: { СТА: 2, ЕРВ: 2, БШК: 1, КПТ: 3 } },
      { letter: 'Г', text: 'Зажигаю свечи, открываю что-то охлаждённое', scores: { ТБЛ: 2, БДВ: 1, МДР: 1, АГД: 2 } },
    ],
  },
  {
    text: 'Передвигаешься по городу на:',
    options: [
      { letter: 'А', text: 'Чём угодно, что само остановилось', scores: { ВЕЛ: 3, БАТ: 1, БШК: 1 } },
      { letter: 'Б', text: 'Велосипеде', scores: { БРЛ: 3 } },
      { letter: 'В', text: 'Метро, если оно работает, конечно', scores: { МСК: 2, ЛДН: 3 } },
      { letter: 'Г', text: 'Метро — так быстрее всего', scores: { МСК: 1, МДР: 1, ВНА: 3 } },
      { letter: 'Д', text: 'Такси', scores: { СТА: 2, ТБЛ: 2, ЕРВ: 1, МСК: 1, БЛГ: 3, КПТ: 1 } },
      { letter: 'Е', text: 'Пешком. Случайно добрёл до соседнего города', scores: { БДВ: 3, КПТ: 1 } },
      { letter: 'Ж', text: 'В машине. Смотрю в окно. Куда — узнаю потом', scores: { АГД: 1, ЕГР: 3 } },
    ],
  },
  {
    text: 'Что у тебя с документами?',
    options: [
      { letter: 'А', text: 'Какие документы — я просто прилетел, и всё', scores: { ВЕЛ: 2, ТБЛ: 2, БАТ: 1, БДВ: 2, БЛГ: 2 } },
      { letter: 'Б', text: 'Нормально, но пришлось постараться', scores: { СТА: 2, АГД: 2, КПТ: 2 } },
      { letter: 'В', text: 'Квест на полгода, три визовых центра и один конкретный фотограф', scores: { ЛДН: 3 } },
      { letter: 'Г', text: 'У меня всё в порядке — я просто европеец', scores: { МДР: 2, БРЛ: 2, ВНА: 2 } },
      { letter: 'Д', text: 'Документы есть — работают через раз', scores: { ЕРВ: 2, МСК: 3, БШК: 3 } },
      { letter: 'Е', text: 'Меня везут в чемодане', scores: { ЕГР: 5 } },
    ],
  },
  {
    text: 'Кейс: снимаешь квартиру. Хозяин берёт деньги — договор не предлагает. Ты:',
    options: [
      { letter: 'А', text: 'Плачу. Человек вроде нормальный — разберёмся если что', scores: { ВЕЛ: 2 } },
      { letter: 'Б', text: 'Прошу хотя бы расписку', scores: { ЕРВ: 2, МДР: 1, КПТ: 2 } },
      { letter: 'В', text: 'Без бумаги — без сделки. Ухожу', scores: { МСК: 3, БРЛ: 3, ЛДН: 3, ВНА: 3 } },
      { letter: 'Г', text: 'Договор? Тут так никто не делает', scores: { СТА: 3, ТБЛ: 2, БАТ: 3, БДВ: 2, БЛГ: 2, БШК: 3, АГД: 2 } },
    ],
  },
  {
    text: 'Как у тебя с опасностью?',
    options: [
      { letter: 'А', text: 'Не думаю о таких пустяках', scores: { ВЕЛ: 3, ТБЛ: 2, БАТ: 2, МСК: 1 } },
      { letter: 'Б', text: 'Осведомлён, значит предупреждён', scores: { АГД: 2, БРЛ: 1, ЛДН: 1, КПТ: 2 } },
      { letter: 'В', text: 'Игнорирую', scores: { БДВ: 3, БЛГ: 2, МДР: 1 } },
      { letter: 'Г', text: 'Я и есть опасность', scores: { СТА: 1, МСК: 1, БШК: 2 } },
      { letter: 'Д', text: 'Мне никогда ничего не угрожает', scores: { ЕРВ: 2, ВНА: 2, ЕГР: 5 } },
    ],
  },
];

// ─── State ───────────────────────────────────────────

let currentQuestion = 0;
let scores = {};

function initScores() {
  scores = {};
  Object.keys(CITIES).forEach(key => { scores[key] = 0; });
}

// ─── DOM refs ─────────────────────────────────────────

const screenIntro   = document.getElementById('screen-intro');
const screenQuiz    = document.getElementById('screen-quiz');
const screenResult  = document.getElementById('screen-result');

const progressFill     = document.getElementById('progress-fill');
const questionCounter  = document.getElementById('question-counter');
const questionText     = document.getElementById('question-text');
const optionsList      = document.getElementById('options-list');

const resultImg         = document.getElementById('result-img');
const resultPlaceholder = document.getElementById('result-placeholder');
const resultCityName    = document.getElementById('result-city-name');
const resultDescription = document.getElementById('result-description');

// ─── Navigation ──────────────────────────────────────

function showScreen(from, to) {
  from.classList.remove('active');
  to.classList.add('active', 'screen-fade-in');
  to.addEventListener('animationend', () => to.classList.remove('screen-fade-in'), { once: true });
}

// ─── Quiz logic ───────────────────────────────────────

const needsTwemoji = navigator.userAgent.includes('Windows');

function applyEmoji(el) {
  if (needsTwemoji && window.twemoji) {
    twemoji.parse(el || document.body, { folder: 'svg', ext: '.svg' });
  }
}

function track(path, title) {
  // Primary: GoatCounter JS (full metadata)
  if (window.goatcounter?.count) {
    window.goatcounter.count({ path, title, event: true });
    return;
  }
  // Fallback: direct request to count endpoint.
  // Helps when gc.zgo.at CDN script is blocked but the custom domain isn't.
  const url = 'https://city-quiz.goatcounter.com/count'
    + '?p=' + encodeURIComponent(path)
    + '&t=' + encodeURIComponent(title)
    + '&e=1';
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url);
  } else {
    new Image().src = url;
  }
}

function todayDate() {
  return new Date().toISOString().split('T')[0];
}

function startQuiz() {
  initScores();
  currentQuestion = 0;
  const d = todayDate();
  track('quiz_start',  'Quiz Started');
  track('open/' + d,   'Daily Open');
  showScreen(screenIntro, screenQuiz);
  renderQuestion();
}

// Apply emoji after intro renders
document.addEventListener('DOMContentLoaded', () => applyEmoji(document.body));

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];
  const total = QUESTIONS.length;

  progressFill.style.width = ((currentQuestion / total) * 100) + '%';
  questionCounter.textContent = `${currentQuestion + 1} / ${total}`;
  questionText.textContent = q.text;

  optionsList.innerHTML = '';
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${opt.letter})</span>${opt.text}`;
    btn.addEventListener('click', () => selectOption(opt.scores, btn));
    optionsList.appendChild(btn);
  });
  applyEmoji(optionsList);
}

function selectOption(optionScores, btn) {
  // Visual feedback
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Add scores
  Object.entries(optionScores).forEach(([city, pts]) => {
    scores[city] = (scores[city] || 0) + pts;
  });

  // Next question after short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < QUESTIONS.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 280);
}

// ─── Result ───────────────────────────────────────────

function showResult() {
  progressFill.style.width = '100%';

  const winner = getWinner();
  const city = CITIES[winner];

  // Reset orientation class from previous result
  screenResult.classList.remove('portrait-layout');

  resultPlaceholder.textContent = city.flag;
  resultPlaceholder.style.display = 'flex';
  resultImg.style.display = 'block';
  resultImg.alt = city.name;
  resultImg.src = city.image;

  resultImg.onload = () => {
    resultPlaceholder.style.display = 'none';
    if (resultImg.naturalHeight > resultImg.naturalWidth) {
      screenResult.classList.add('portrait-layout');
    }
  };
  resultImg.onerror = () => {
    resultImg.style.display = 'none';
    resultPlaceholder.style.display = 'flex';
  };

  resultCityName.textContent = `${city.flag} ${city.name}`;
  resultDescription.textContent = DESCRIPTIONS[winner];

  const d = todayDate();
  track('result/' + winner, 'Result: ' + city.name);
  track('done/' + d,        'Daily Done');

  showScreen(screenQuiz, screenResult);
  applyEmoji(screenResult);
}

function getWinner() {
  return Object.entries(scores).reduce((best, [city, pts]) => {
    return pts > scores[best] ? city : best;
  }, Object.keys(scores)[0]);
}

// ─── Events ───────────────────────────────────────────

document.getElementById('btn-start').addEventListener('click', startQuiz);

document.getElementById('btn-restart').addEventListener('click', () => {
  showScreen(screenResult, screenIntro);
});
