/* Body Function journal: opens each article on the homepage (no separate page).
   Add <script src="journal.js"></script> AFTER <script src="script.js"></script>.
   To add or edit an article, change the ARTICLES list below. The "title" must match
   the card's heading in index.html exactly. */
(() => {
    const ARTICLES = [
        {
            title: 'Why gradual progress matters in rehabilitation', slug: 'gradual-progress',
            intro: 'When you are recovering from an injury or a long-standing problem, it is natural to want to get back to normal as quickly as possible. But recovery rarely follows a straight line, and the way you build things back up matters as much as how hard you work.',
            s: [
                { h: 'Why your body needs time to adapt', p: ['Muscles, tendons, joints and bones respond to the demands we place on them. When those demands increase steadily, tissues tend to adapt and become more capable. When they jump suddenly, whether that is a first run after weeks off or a full gym session after an injury, the body can struggle to keep up and symptoms often flare.', 'At the other extreme, avoiding movement for too long can leave you stiffer, weaker and less confident. Good rehabilitation sits between the two: enough challenge to move you forward, not so much that you take a step back.'] },
                { h: 'What gradual progression looks like', p: ['Progressive loading simply means increasing what you ask of your body in small, planned steps. That might be more repetitions, a little more weight, a longer walk, or a more demanding position. Usually only one thing changes at a time, so you can see what your body is responding to.'], l: ['Start at a level you can repeat comfortably, not your best day', 'Change one thing at a time: how much, how often or how hard', 'Notice how you feel during the activity and over the following day', 'Keep a simple note of what you did and how it felt'] },
                { h: 'Good days, bad days and flare-ups', p: ['Progress is rarely smooth. Symptoms can vary with sleep, stress, workload and activity, and a sore day does not automatically mean you have done damage. A sensible response is usually to ease back slightly, keep gently moving, and build up again rather than stopping altogether.', 'If your symptoms keep getting worse, or you are unsure how much to do, that is a good moment to have your plan reviewed.'] },
                { h: 'Confidence is part of recovery', p: ['After an injury or a long period of pain, many people become cautious about movement. Small, achievable wins rebuild trust in your body. Completing a manageable session, then repeating it, then adding a little more, often does more for confidence than a single big effort.'] }
            ],
            take: ['Recovery is rarely a straight line, and that is normal', 'Small, planned increases usually work better than big jumps', 'A flare-up is a signal to adjust, not necessarily to stop'],
            note: 'Seek advice promptly if you develop new numbness or weakness, severe or worsening pain, pain that wakes you at night, or if you feel generally unwell.'
        },
        {
            title: 'What makes Clinical Pilates different?', slug: 'clinical-pilates',
            intro: 'Pilates is widely known as a way to improve posture, control and core strength. Clinical Pilates takes those same principles and applies them with a healthcare focus, shaped around your body, your history and your goals.',
            s: [
                { h: 'Pilates and Clinical Pilates', p: ['Traditional Pilates is built around controlled movement, breathing, alignment and awareness of how you move. Clinical Pilates uses these ideas within a rehabilitation approach. It is usually led by a physiotherapist or a suitably trained instructor and begins with an assessment, so the exercises are chosen for you rather than for a general group.'] },
                { h: 'How it is tailored', p: ['Your first session looks at how you move, where you feel restricted or unstable, and what you want to achieve. From there, exercises are adapted so they are challenging but manageable, and progressed as your control and strength improve.'], l: ['Exercises are chosen and modified around your needs', 'Movement quality and control are coached closely', 'Sessions progress as you improve', 'It can be combined with other parts of your rehabilitation'] },
                { h: 'What a session involves', p: ['Clinical Pilates is typically done on a mat, using your own body weight and sometimes simple equipment. The emphasis is on slow, precise movement and breathing rather than speed or intensity. One-to-one sessions give time to adjust positions and cues to suit you.'] },
                { h: 'Who might find it helpful', p: ['Clinical Pilates may suit people who want to build strength and control after an injury, manage ongoing musculoskeletal aches, or move with more confidence in everyday life. It is one tool among many, and whether it is the right one for you is best decided after an assessment.'] }
            ],
            take: ['Clinical Pilates starts with an individual assessment', 'Exercises are adapted to your body and goals', 'It works best as part of a wider plan'],
            note: 'If you are pregnant, recovering from surgery or managing a medical condition, mention this when you enquire so sessions can be planned appropriately.'
        },
        {
            title: 'Can neck problems contribute to headaches?', slug: 'neck-headaches',
            intro: 'Headaches have many causes, and for some people the neck plays a part. Understanding the difference matters, because the right approach depends on what is driving your symptoms.',
            s: [
                { h: 'Not every headache is the same', p: ['Common headache types include tension-type headaches, migraine and headaches that seem linked to the neck, sometimes called cervicogenic headaches. They can overlap, and it is not always obvious which one you are dealing with, which is why a careful assessment is useful.'] },
                { h: 'Signs the neck may be involved', p: ['A neck contribution is more likely when headaches are felt together with neck stiffness or discomfort, and when certain movements or sustained positions seem to bring them on.'], l: ['Headaches that start at the back of the head or neck', 'Symptoms that change with neck movement or posture', 'Stiffness or reduced movement in the neck', 'Headaches after long periods at a desk or screen'] },
                { h: 'What an assessment looks at', p: ['A physiotherapy assessment usually involves talking through your headache pattern, then looking at how your neck and upper back move, how the surrounding muscles feel and how your posture and daily habits may play a role. The aim is to work out whether musculoskeletal factors are contributing and what could help.'] },
                { h: 'What can help', p: ['Where the neck is involved, a plan may include advice on positions and habits, targeted exercises for mobility and strength, and other treatment where appropriate. Many people also benefit from looking at sleep, stress and screen breaks. If your assessment suggests another cause, you can be advised to speak to your GP.'] }
            ],
            take: ['Some headaches are linked to the neck, but not all', 'Assessment helps separate the causes', 'Exercise and habit changes are often part of the plan'],
            note: 'Seek urgent medical help for a sudden, severe headache that feels unlike any before, or a headache with fever and a stiff neck, confusion, weakness, vision changes, or after a head injury. Call 999 or NHS 111.'
        },
        {
            title: 'What to expect at your first physiotherapy appointment', slug: 'first-appointment',
            intro: 'Starting physiotherapy can feel uncertain if you have not done it before. Knowing what happens in the first session makes it easier to prepare and to get the most from your time.',
            s: [
                { h: 'Before you come', p: ['A little preparation helps. Think about what you would like to achieve, whether that is walking further, returning to a sport or simply sleeping comfortably. It also helps to wear clothes you can move in.'], l: ['Wear comfortable, loose clothing', 'Have a list of any medication you take', 'Bring any scan results or letters you have', 'Write down your main questions and goals'] },
                { h: 'The conversation', p: ['The first part of an initial assessment is mostly talking. You will be asked about your symptoms, how they started, what makes them better or worse, your general health and what matters most to you. There is no need to prepare a perfect summary; the questions guide you.'] },
                { h: 'The physical assessment', p: ['Next comes an assessment of how you move. This may include watching simple movements, checking strength and range of motion, and gently examining the area. You will be told what is being done and can stop or ask questions at any point.'] },
                { h: 'Explanation and plan', p: ['You should leave understanding what is likely to be going on, what the next steps are and what you can do yourself. That often includes a few exercises to start, advice on activity, and a suggestion for follow-up sessions. Initial assessments at Body Function last 50 minutes, with follow-ups of 30 minutes.'] },
                { h: 'Home visits', p: ['If your appointment is at home, it helps to have a clear space with room to move and, if possible, a chair and a floor area. Availability and travel coverage are confirmed before booking.'] }
            ],
            take: ['The first session is mostly listening, assessing and explaining', 'You are encouraged to ask questions at any point', 'You should leave with a clear next step'],
            note: 'If your symptoms are severe, sudden or rapidly worsening, or you are worried about your health, contact your GP, call NHS 111 or seek emergency care instead of waiting for an appointment.'
        },
        {
            title: 'Jaw pain and TMD: when to seek assessment', slug: 'jaw-pain-tmd',
            intro: 'Jaw pain is common and often settles, but it can also become persistent and interfere with eating, talking and sleep. Temporomandibular disorders, usually shortened to TMD, are a group of problems affecting the jaw joint and the muscles around it.',
            s: [
                { h: 'What TMD can feel like', p: ['Symptoms vary from person to person and may come and go.'], l: ['Aching or tenderness in the jaw, face or near the ear', 'Clicking, popping or grinding when opening the mouth', 'Difficulty opening wide or chewing comfortably', 'Jaw feeling stuck, tight or tired', 'Headaches or neck tension alongside jaw symptoms'] },
                { h: 'Why it happens', p: ['There is rarely a single cause. Clenching or grinding, stress, previous injury, changes in how the teeth meet and tension in the surrounding muscles can all contribute. The neck and jaw are closely connected, so the two often influence each other.'] },
                { h: 'When an assessment is worth having', p: ['Mild, short-lived jaw soreness often eases on its own. It is worth getting assessed if symptoms continue for more than a few weeks, keep returning, restrict how widely you can open, or affect eating, sleep or work.'] },
                { h: 'What assessment and management involve', p: ['A physiotherapy assessment looks at how the jaw opens and closes, the muscles around it, the neck and posture, and habits that may be adding strain. Management may include advice, relaxation and movement exercises, and neck or posture work where relevant. Sometimes a dentist or GP is also needed, and you can be guided on that.'] },
                { h: 'Things that may help in the meantime', p: ['These are general tips and not a replacement for assessment.'], l: ['Choose softer foods while it is sore', 'Avoid very wide yawning, gum chewing and nail biting', 'Try resting with lips together and teeth slightly apart', 'Notice whether you clench during stress or concentration'] }
            ],
            take: ['TMD affects the jaw joint and surrounding muscles', 'Many cases improve, but persistent symptoms deserve assessment', 'The neck, stress and habits often play a part'],
            note: 'Seek urgent help if your jaw will not close or open, if you have swelling with fever, or if you suspect a fracture after an injury.'
        },
        {
            title: 'Exercise and persistent lower back pain', slug: 'lower-back-pain',
            intro: 'Lower back pain is very common, and for many people it becomes a long-standing problem. The encouraging news is that, for most people, staying active and exercising in a sensible way is a key part of getting better.',
            s: [
                { h: 'What persistent means', p: ['Back pain is usually described as persistent or chronic when it lasts longer than around three months. By this stage, pain is often influenced by more than the original tissue irritation, including how much you move, sleep, stress and your confidence in your back.'] },
                { h: 'Why movement helps', p: ['Current UK guidance recommends staying active and using exercise-based approaches for lower back pain rather than prolonged rest. Exercise helps maintain strength and mobility, supports confidence, and can reduce how threatening the pain feels. It does not need to be extreme to be effective.'] },
                { h: 'Tailored rather than one-size-fits-all', p: ['There is no single best exercise. A plan usually combines several elements, chosen around what you can do now and what you want to return to.'], l: ['Walking or another form of regular, gentle activity', 'Strength work for the legs, hips, back and trunk', 'Mobility exercises where movement feels restricted', 'Control and stability work, such as Clinical Pilates', 'Gradual progress with a clear structure'] },
                { h: 'Is some discomfort acceptable?', p: ['Mild or moderate discomfort during exercise is common and is not always a sign of harm, particularly if it settles soon afterwards. Pain that sharply increases, lingers for a long time, or comes with new symptoms is worth discussing. This is where guidance helps you judge what is appropriate for you.'] },
                { h: 'Beyond exercise', p: ['Sleep, stress, work habits and pacing also affect back pain. A good plan considers these alongside the exercises, and Dionne holds a Level 4 Lower Back Pain Specialist qualification.'] }
            ],
            take: ['Staying active is generally better than prolonged rest', 'Exercise works best when it is tailored and progressive', 'Lifestyle factors matter as well as exercises'],
            note: 'Seek urgent medical help for loss of bladder or bowel control, numbness around the groin or inner thighs, leg weakness that is getting worse, back pain after a significant injury, or back pain with fever or unexplained weight loss.'
        }
    ];

    const cards = Array.from(document.querySelectorAll('.jcard'));
    if (!cards.length) return;

    const words = a => (a.intro + a.s.map(x => x.h + x.p.join(' ') + (x.l || []).join(' ')).join(' ') + a.take.join(' ')).split(/\s+/).length;
    ARTICLES.forEach(a => { a.mins = Math.max(2, Math.ceil(words(a) / 200)); });

    // Modal shell
    const art = document.createElement('div');
    art.className = 'art';
    art.hidden = true;
    art.innerHTML = '<div class="art-back" data-close></div>' +
        '<article class="art-panel" role="dialog" aria-modal="true" aria-labelledby="art-title" tabindex="-1">' +
        '<button type="button" class="art-close" data-close aria-label="Close article">&times;</button>' +
        '<div class="art-scroll" id="art-scroll"></div></article>';
    document.body.appendChild(art);
    const panel = art.querySelector('.art-panel');
    const scroll = art.querySelector('#art-scroll');
    let current = -1, lastFocus = null;

    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    function render(i) {
        const a = ARTICLES[i], card = cards[a.cardIndex], img = card.querySelector('img');
        const cat = card.querySelector('.jbody > span').textContent;
        const next = ARTICLES[(i + 1) % ARTICLES.length];
        scroll.innerHTML =
            (img ? '<img class="art-img" src="' + esc(img.src) + '" alt="' + esc(img.alt) + '">' : '') +
            '<div class="art-body">' +
            '<div class="art-meta"><span>' + cat + '</span><span>' + a.mins + ' min read</span></div>' +
            '<h2 class="art-title" id="art-title">' + esc(a.title) + '</h2>' +
            '<p class="art-intro">' + esc(a.intro) + '</p>' +
            a.s.map(x => '<h3>' + esc(x.h) + '</h3>' + x.p.map(p => '<p>' + esc(p) + '</p>').join('') +
                (x.l ? '<ul>' + x.l.map(l => '<li>' + esc(l) + '</li>').join('') + '</ul>' : '')).join('') +
            '<div class="art-take"><strong>Key points</strong><ul>' + a.take.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul></div>' +
            '<div class="art-note"><strong>When to seek help</strong><p>' + esc(a.note) + '</p></div>' +
            '<p class="art-disc">This article is general information and is not a substitute for an individual assessment or medical advice.</p>' +
            '<div class="art-cta"><a class="btn" href="#booking" data-go>Book an appointment</a><a class="textlink dark" href="#contact" data-go>Ask a question</a></div>' +
            '<button type="button" class="art-next" data-next><small>Next article</small><span>' + esc(next.title) + '</span></button>' +
            '</div>';
        scroll.scrollTop = 0;
    }

    function open(i, fromHash) {
        if (current === -1) lastFocus = document.activeElement;
        current = i;
        render(i);
        art.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => art.classList.add('on'));
        panel.focus({ preventScroll: true });
        if (!fromHash) history.replaceState(null, '', '#article-' + ARTICLES[i].slug);
    }

    function close(skipFocus) {
        if (current === -1) return;
        current = -1;
        art.classList.remove('on');
        document.body.style.overflow = '';
        history.replaceState(null, '', location.pathname + location.search);
        setTimeout(() => { art.hidden = true; }, 280);
        if (!skipFocus && lastFocus) lastFocus.focus({ preventScroll: true });
    }

    // Wire up cards
    ARTICLES.forEach((a, i) => {
        a.cardIndex = cards.findIndex(c => c.querySelector('h3').textContent.trim() === a.title);
        if (a.cardIndex < 0) return;
        const card = cards[a.cardIndex], body = card.querySelector('.jbody');
        const old = body.querySelector('.jlink');
        const meta = document.createElement('small');
        meta.className = 'jmeta';
        meta.textContent = a.mins + ' min read';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'jlink jread';
        btn.textContent = 'Read more';
        if (old) { old.replaceWith(meta); meta.after(btn); } else { body.append(meta, btn); }
        card.addEventListener('click', e => { if (!e.target.closest('button')) open(i); });
        btn.addEventListener('click', () => open(i));
    });

    art.addEventListener('click', e => {
        if (e.target.closest('[data-close]')) return close();
        if (e.target.closest('[data-next]')) return open((current + 1) % ARTICLES.length);
        const go = e.target.closest('[data-go]');
        if (go) {
            e.preventDefault();
            const id = go.getAttribute('href').slice(1);
            close(true);
            setTimeout(() => { const t = document.getElementById(id); if (t) t.scrollIntoView(); }, 60);
        }
    });

    document.addEventListener('keydown', e => {
        if (current === -1) return;
        if (e.key === 'Escape') return close();
        if (e.key === 'Tab') {
            const f = Array.from(panel.querySelectorAll('button, a[href]')).filter(x => x.offsetParent !== null);
            if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });

    // Open directly from a shared link, e.g. index.html#article-neck-headaches
    const m = location.hash.match(/^#article-(.+)$/);
    if (m) { const i = ARTICLES.findIndex(a => a.slug === m[1]); if (i > -1) open(i, true); }
})();