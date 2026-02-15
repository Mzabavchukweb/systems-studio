/* ============================================
   Systems Studio — i18n (PL / EN / NL)
   JSON-based language switcher
   ============================================ */

(function () {
    'use strict';

    const translations = {

        pl: {
            // Nav
            'nav.packs': 'B2B Packs',
            'nav.spokoju': 'System Spokoju',
            'nav.partner': 'Partnerstwo',
            'nav.contact': 'Kontakt',

            // Hero
            'hero.h1': 'Standards that work under pressure.',
            'hero.h2': 'Systems Studio — standardy, które kończą chaos.',
            'hero.lead': 'Gotowe pakiety operacyjne dla firm i domów.<br><strong>Wdrożenie: <span class="hero__counter" data-target="60">0</span> minut.</strong>',
            'hero.cta_b2b': 'Kup B2B Pack',
            'hero.cta_b2c': 'Zobacz System Spokoju',
            'hero.subline': 'Licencja osobowa / Licencja firmowa (1 firma / 1 lokalizacja)',

            // About
            'about.label': 'O nas',
            'about.title': 'Czym jest Systems Studio?',
            'about.text': 'Tworzymy gotowe standardy operacyjne w formie pakietów digital (SOP, checklisty, QuickStart). Wdrażasz w 60 minut i używasz codziennie. To nie są ładne PDF-y — to narzędzia odpowiedzialności.',
            'about.tile1_label': 'Dla firm',
            'about.tile1_text': 'Dowód pracy. Mniej sporów. Więcej kontroli.',
            'about.tile2_label': 'Dla ludzi',
            'about.tile2_text': 'Spokój. Jasne zasady. Mniej chaosu.',

            // Core Truth
            'core.text': 'Wdrażasz prosty standard w <em>60 minut</em> — a od jutra masz porządek, dowód i odpowiedzialność.',

            // Evidence
            'evidence.title': 'Evidence-first',
            'evidence.subtitle': 'Standard ma działać — nie tylko ładnie wyglądać.',
            'evidence.item1': 'Before / During / After',
            'evidence.item2': 'Acceptance (TAK/NIE)',
            'evidence.item3': 'Exceptions / Incidents',
            'evidence.item4': 'Minimalny audit trail',
            'evidence.closing': 'To nie są szablony. To jest standard pracy + dowód + odpowiedzialność.',

            // B2B
            'b2b.title': 'Dla firm (B2B) — Operational Integrity Standard™',
            'b2b.lead': 'Mniej sporów. Mniej chaosu. Więcej kontroli.',
            'b2b.effect1_title': 'Dowód pracy i odbiór (TAK/NIE)',
            'b2b.effect1_result': 'Koniec „ale".',
            'b2b.effect2_title': 'Raport zmiany',
            'b2b.effect2_result': 'Koniec „nikt nie wie co się działo".',
            'b2b.effect3_title': 'Kontrola kluczy / sprzętu / wejść',
            'b2b.effect3_result': 'Koniec strat i wymówek.',
            'b2b.audience_label': 'Dla kogo?',
            'b2b.tag1': 'Cleaning / Facility',
            'b2b.tag2': 'Magazyny / Logistyka',
            'b2b.tag3': 'Produkcja / Zmiany',

            // Packs
            'packs.label': 'Produkty',
            'packs.title': 'B2B Digital Packs',
            'packs.title_sub': '(wdrożenie 60 min)',
            'packs.subline': 'Kupujesz → pobierasz ZIP → wdrażasz → używasz daily.',
            'packs.buy': 'Kup',
            'packs.p1_desc': 'Dowód pracy: Before / During / After + Exceptions + Acceptance (TAK/NIE)',
            'packs.p2_desc': 'Raport zmiany: status, wyjątki, ryzyka, przekazanie odpowiedzialności',
            'packs.p3_desc': 'Wydanie/zwrot kluczy, odpowiedzialność, incydenty, spot-check',
            'packs.p4_desc': 'Check-out/check-in, braki, serwis, accountability',
            'packs.p5_desc': 'Wejścia/wyjścia, strefy, potwierdzenia, minimalny audit trail',
            'packs.note': 'W każdym packu: One-Pager + SOP + Templates + QuickStart + License.',
            'packs.case_title': 'Typowe wdrożenie',
            'packs.case_text': 'W firmie sprzątającej <strong>Proof-of-Work + Shift Report</strong> = koniec sporów o „czy było zrobione". Jest dowód. Jest odbiór. Jest odpowiedzialność.',

            // Add-ons
            'addons.title': 'Opcje dodatkowe',
            'addons.title_sub': '(opcjonalnie)',
            'addons.item1': 'Zdalna konfiguracja pod 1 firmę / 1 lokalizację',
            'addons.item2': 'Wersja papier / USB',
            'addons.item3': 'Etykiety / tagi',
            'addons.cta': 'Kontakt — konfiguracja',

            // Partnership
            'partner.title': 'Partnerstwo (B2B)',
            'partner.text': 'Jeśli obsługujesz firmy (BHP, compliance, facility, szkolenia) — możesz polecać nasze packi.',
            'partner.model': 'Kod partnera + prowizja lub pakiet licencji.',
            'partner.cta': 'Zostań partnerem',

            // System Spokoju
            'spokoju.title': 'System Spokoju™',
            'spokoju.feat1': 'Domowy standard offline.',
            'spokoju.feat2': '10 minut startu.',
            'spokoju.feat3': 'Spokój na 72h–7 dni.',
            'spokoju.home_desc': 'Procedury, checklisty, „co robić teraz".',
            'spokoju.pets_desc': 'Opieka nad zwierzętami + checklista.',

            // Footer
            'footer.delivery': 'Digital delivery: instant download (no physical shipment)',
            'footer.breach': 'Unauthorized sharing = license breach.',

            // Legal
            'legal.terms_text': 'Treść regulaminu zostanie dodana wkrótce. Prosimy o kontakt: office@systemsstudio.com',
            'legal.license_text': 'Treść umowy licencyjnej zostanie dodana wkrótce. Prosimy o kontakt: office@systemsstudio.com',
            'legal.privacy_text': 'Treść polityki prywatności zostanie dodana wkrótce. Prosimy o kontakt: office@systemsstudio.com',
        },

        en: {
            // Nav
            'nav.packs': 'B2B Packs',
            'nav.spokoju': 'Peace of Mind',
            'nav.partner': 'Partnership',
            'nav.contact': 'Contact',

            // Hero
            'hero.h1': 'Standards that work under pressure.',
            'hero.h2': 'Systems Studio — standards that end the chaos.',
            'hero.lead': 'Ready-to-use operational packs for businesses and homes.<br><strong>Deployment: <span class="hero__counter" data-target="60">0</span> minutes.</strong>',
            'hero.cta_b2b': 'Get B2B Pack',
            'hero.cta_b2c': 'See Peace of Mind System',
            'hero.subline': 'Personal license / Business license (1 company / 1 location)',

            // About
            'about.label': 'About',
            'about.title': 'What is Systems Studio?',
            'about.text': 'We create ready-made operational standards as digital packs (SOPs, checklists, QuickStart). You deploy in 60 minutes and use them daily. These aren\'t pretty PDFs — they\'re accountability tools.',
            'about.tile1_label': 'For businesses',
            'about.tile1_text': 'Proof of work. Fewer disputes. More control.',
            'about.tile2_label': 'For people',
            'about.tile2_text': 'Peace. Clear rules. Less chaos.',

            // Core Truth
            'core.text': 'Deploy a simple standard in <em>60 minutes</em> — and from tomorrow you have order, proof, and accountability.',

            // Evidence
            'evidence.title': 'Evidence-first',
            'evidence.subtitle': 'A standard must work — not just look good.',
            'evidence.item1': 'Before / During / After',
            'evidence.item2': 'Acceptance (YES/NO)',
            'evidence.item3': 'Exceptions / Incidents',
            'evidence.item4': 'Minimal audit trail',
            'evidence.closing': 'These aren\'t templates. This is a work standard + proof + accountability.',

            // B2B
            'b2b.title': 'For businesses (B2B) — Operational Integrity Standard™',
            'b2b.lead': 'Fewer disputes. Less chaos. More control.',
            'b2b.effect1_title': 'Proof of work & acceptance (YES/NO)',
            'b2b.effect1_result': 'End of "but...".',
            'b2b.effect2_title': 'Shift report',
            'b2b.effect2_result': 'End of "nobody knows what happened".',
            'b2b.effect3_title': 'Key / equipment / access control',
            'b2b.effect3_result': 'No more losses and excuses.',
            'b2b.audience_label': 'Who is it for?',
            'b2b.tag1': 'Cleaning / Facility',
            'b2b.tag2': 'Warehousing / Logistics',
            'b2b.tag3': 'Production / Shifts',

            // Packs
            'packs.label': 'Products',
            'packs.title': 'B2B Digital Packs',
            'packs.title_sub': '(60 min deployment)',
            'packs.subline': 'Buy → download ZIP → deploy → use daily.',
            'packs.buy': 'Buy',
            'packs.p1_desc': 'Proof of work: Before / During / After + Exceptions + Acceptance (YES/NO)',
            'packs.p2_desc': 'Shift report: status, exceptions, risks, accountability handover',
            'packs.p3_desc': 'Key issue/return, accountability, incidents, spot-check',
            'packs.p4_desc': 'Check-out/check-in, shortages, maintenance, accountability',
            'packs.p5_desc': 'Entry/exit, zones, confirmations, minimal audit trail',
            'packs.note': 'Every pack includes: One-Pager + SOP + Templates + QuickStart + License.',
            'packs.case_title': 'Typical deployment',
            'packs.case_text': 'In a cleaning company, <strong>Proof-of-Work + Shift Report</strong> = end of disputes about "was it done?". There\'s proof. There\'s acceptance. There\'s accountability.',

            // Add-ons
            'addons.title': 'Additional options',
            'addons.title_sub': '(optional)',
            'addons.item1': 'Remote configuration for 1 company / 1 location',
            'addons.item2': 'Paper / USB version',
            'addons.item3': 'Labels / tags',
            'addons.cta': 'Contact — configuration',

            // Partnership
            'partner.title': 'Partnership (B2B)',
            'partner.text': 'If you serve businesses (HSE, compliance, facility management, training) — you can recommend our packs.',
            'partner.model': 'Partner code + commission or license package.',
            'partner.cta': 'Become a partner',

            // System Spokoju
            'spokoju.title': 'Peace of Mind System™',
            'spokoju.feat1': 'Home offline standard.',
            'spokoju.feat2': '10 minutes to start.',
            'spokoju.feat3': 'Peace for 72h–7 days.',
            'spokoju.home_desc': 'Procedures, checklists, "what to do now".',
            'spokoju.pets_desc': 'Pet care + checklist.',

            // Footer
            'footer.delivery': 'Digital delivery: instant download (no physical shipment)',
            'footer.breach': 'Unauthorized sharing = license breach.',

            // Legal
            'legal.terms_text': 'Terms of Service content will be added soon. Please contact: office@systemsstudio.com',
            'legal.license_text': 'License Agreement content will be added soon. Please contact: office@systemsstudio.com',
            'legal.privacy_text': 'Privacy Policy content will be added soon. Please contact: office@systemsstudio.com',
        },

        nl: {
            // Nav
            'nav.packs': 'B2B Packs',
            'nav.spokoju': 'Rust Systeem',
            'nav.partner': 'Partnerschap',
            'nav.contact': 'Contact',

            // Hero
            'hero.h1': 'Standards that work under pressure.',
            'hero.h2': 'Systems Studio — standaarden die chaos beëindigen.',
            'hero.lead': 'Kant-en-klare operationele pakketten voor bedrijven en huishoudens.<br><strong>Implementatie: <span class="hero__counter" data-target="60">0</span> minuten.</strong>',
            'hero.cta_b2b': 'Koop B2B Pack',
            'hero.cta_b2c': 'Bekijk Rust Systeem',
            'hero.subline': 'Persoonlijke licentie / Bedrijfslicentie (1 bedrijf / 1 locatie)',

            // About
            'about.label': 'Over ons',
            'about.title': 'Wat is Systems Studio?',
            'about.text': 'Wij maken kant-en-klare operationele standaarden als digitale pakketten (SOP\'s, checklists, QuickStart). Implementeer in 60 minuten en gebruik ze dagelijks. Dit zijn geen mooie PDF\'s — het zijn verantwoordingsinstrumenten.',
            'about.tile1_label': 'Voor bedrijven',
            'about.tile1_text': 'Werkbewijs. Minder geschillen. Meer controle.',
            'about.tile2_label': 'Voor mensen',
            'about.tile2_text': 'Rust. Duidelijke regels. Minder chaos.',

            // Core Truth
            'core.text': 'Implementeer een eenvoudige standaard in <em>60 minuten</em> — en vanaf morgen heb je orde, bewijs en verantwoordelijkheid.',

            // Evidence
            'evidence.title': 'Evidence-first',
            'evidence.subtitle': 'Een standaard moet werken — niet alleen er mooi uitzien.',
            'evidence.item1': 'Before / During / After',
            'evidence.item2': 'Acceptatie (JA/NEE)',
            'evidence.item3': 'Uitzonderingen / Incidenten',
            'evidence.item4': 'Minimale audit trail',
            'evidence.closing': 'Dit zijn geen sjablonen. Dit is een werkstandaard + bewijs + verantwoordelijkheid.',

            // B2B
            'b2b.title': 'Voor bedrijven (B2B) — Operational Integrity Standard™',
            'b2b.lead': 'Minder geschillen. Minder chaos. Meer controle.',
            'b2b.effect1_title': 'Werkbewijs en acceptatie (JA/NEE)',
            'b2b.effect1_result': 'Einde van "maar...".',
            'b2b.effect2_title': 'Dienstrapport',
            'b2b.effect2_result': 'Einde van "niemand weet wat er gebeurd is".',
            'b2b.effect3_title': 'Sleutel- / materiaal- / toegangscontrole',
            'b2b.effect3_result': 'Geen verliezen en excuses meer.',
            'b2b.audience_label': 'Voor wie?',
            'b2b.tag1': 'Cleaning / Facility',
            'b2b.tag2': 'Magazijnen / Logistiek',
            'b2b.tag3': 'Productie / Ploegen',

            // Packs
            'packs.label': 'Producten',
            'packs.title': 'B2B Digital Packs',
            'packs.title_sub': '(60 min implementatie)',
            'packs.subline': 'Koop → download ZIP → implementeer → gebruik dagelijks.',
            'packs.buy': 'Koop',
            'packs.p1_desc': 'Werkbewijs: Before / During / After + Uitzonderingen + Acceptatie (JA/NEE)',
            'packs.p2_desc': 'Dienstrapport: status, uitzonderingen, risico\'s, verantwoordingsoverdracht',
            'packs.p3_desc': 'Sleuteluitgifte/-retour, verantwoordelijkheid, incidenten, spot-check',
            'packs.p4_desc': 'Check-out/check-in, tekorten, onderhoud, verantwoordelijkheid',
            'packs.p5_desc': 'In-/uitgang, zones, bevestigingen, minimale audit trail',
            'packs.note': 'Elk pakket bevat: One-Pager + SOP + Templates + QuickStart + Licentie.',
            'packs.case_title': 'Typische implementatie',
            'packs.case_text': 'In een schoonmaakbedrijf, <strong>Proof-of-Work + Shift Report</strong> = einde van geschillen over "is het gedaan?". Er is bewijs. Er is acceptatie. Er is verantwoordelijkheid.',

            // Add-ons
            'addons.title': 'Extra opties',
            'addons.title_sub': '(optioneel)',
            'addons.item1': 'Configuratie op afstand voor 1 bedrijf / 1 locatie',
            'addons.item2': 'Papier- / USB-versie',
            'addons.item3': 'Labels / tags',
            'addons.cta': 'Contact — configuratie',

            // Partnership
            'partner.title': 'Partnerschap (B2B)',
            'partner.text': 'Als u bedrijven bedient (HSE, compliance, facility, training) — kunt u onze pakketten aanbevelen.',
            'partner.model': 'Partnercode + commissie of licentiepakket.',
            'partner.cta': 'Word partner',

            // System Spokoju
            'spokoju.title': 'Rust Systeem™',
            'spokoju.feat1': 'Offline thuisstandaard.',
            'spokoju.feat2': '10 minuten om te starten.',
            'spokoju.feat3': 'Rust voor 72u–7 dagen.',
            'spokoju.home_desc': 'Procedures, checklists, "wat nu te doen".',
            'spokoju.pets_desc': 'Dierenverzorging + checklist.',

            // Footer
            'footer.delivery': 'Digitale levering: directe download (geen fysieke verzending)',
            'footer.breach': 'Ongeautoriseerd delen = licentiebreuk.',

            // Legal
            'legal.terms_text': 'De servicevoorwaarden worden binnenkort toegevoegd. Neem contact op: office@systemsstudio.com',
            'legal.license_text': 'De licentieovereenkomst wordt binnenkort toegevoegd. Neem contact op: office@systemsstudio.com',
            'legal.privacy_text': 'Het privacybeleid wordt binnenkort toegevoegd. Neem contact op: office@systemsstudio.com',
        }

    };

    // --- Apply Language ---
    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // Support HTML content (e.g. <em> and <strong> tags)
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update lang attribute on html
        document.documentElement.lang = lang === 'pl' ? 'pl' : lang === 'nl' ? 'nl' : 'en';

        // Save preference
        localStorage.setItem('ss-lang', lang);

        // Update active button
        document.querySelectorAll('.lang-switch button').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // --- Init ---
    const savedLang = localStorage.getItem('ss-lang') || 'pl';
    applyLanguage(savedLang);

    // --- Listen for language switch clicks ---
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });

})();
