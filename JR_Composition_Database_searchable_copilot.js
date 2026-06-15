// JR Compositions – Combined data + catalog rendering (emoji‑free)
// Upload to: /wp-content/themes/riverbank/JR_Composition_Database_searchable_copilot.js
// In your HTML: <script src="/wp-content/themes/riverbank/JR_Composition_Database_searchable_copilot.js"></script>

(function () {
    'use strict';

    var JRDBCompositions = [
        {
            "title": "Solace",
            "ensemble": ["chamber"],
            "instruments": ["flute (2)"],
            "year": 2016,
            "length": "4:30",
            "difficulty": "easy",
            "premiere": "Spring 2017",
            "performer": "Joan Merrill and friend",
            "commissioner": "Women's Missionary Society of the Brethren Church",
            "type": "commissioned",
            "series": ["Duos"],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/solace-for-flute-duo-2017",
            "videoLink": "https://www.youtube.com/watch?v=dR6tuXSzZZY",
            "programNotesLink": "",
            "purchaseLinks": [
                {
                    "url": "https://www.sonolize.com/en/music/1712/solace",
                    "name": "Sonolize",
                    "price": "€4"
                },
                {
                    "url": "https://www.sheetmusicdirect.com/en-US/se/ID_No/1027078/Product.aspx",
                    "name": "SheetMusicDirect",
                    "price": "$4.99"
                }
            ]
        },

        {
            "title": "Sleep",
            "ensemble": ["String Orchestra"],
            "instruments": [
                "soprano",
                "violin (4)",
                "viola (2)",
                "cello (2)",
                "double bass"
            ],
            "year": 2019,
            "length": "7:00",
            "difficulty": "advanced",
            "premiere": "April 20, 2019, Ithaca College",
            "performer": "Kin Szeto, conductor, and Monica Ramich, soprano",
            "commissioner": "commissioner name",
            "type": "other",
            "series": ["My Children"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Elegy No. 4: for Cyrus Rico",
            "ensemble": ["cello"],
            "instruments": ["cello"],
            "year": 2025,
            "length": "",
            "difficulty": "professional",
            "premiere": "",
            "performer": "Kin Szeto, conductor, and Monica Ramich, soprano",
            "commissioner": "commissioner name",
            "type": "current project",
            "series": ["Elegies"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Pieces for Two Violins",
            "ensemble": ["chamber"],
            "instruments": ["violin (2)"],
            "year": 2017,
            "length": "9'",
            "difficulty": "advanced",
            "premiere": "November 2017",
            "performer": "Gabriella Stout and Kathryn Drake",
            "commissioner": "",
            "type": "other",
            "series": ["Juvenilia"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": [
                {
                    "url": "https://www.sheetmusicdirect.com/en-US/se/ID_No/1027083/Product.aspx",
                    "name": "SheetMusicDirect",
                    "price": "12.99"
                }
            ]
        },

        {
            "title": "Wedding Suite",
            "ensemble": ["string trio"],
            "instruments": ["violin", "cello"],
            "year": 2016,
            "length": "10'-12'",
            "difficulty": "advanced",
            "premiere": "April 23, 2016",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["Events"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Alleluia No. 1",
            "ensemble": ["choir"],
            "instruments": ["voice"],
            "year": 2016,
            "length": "1'30\"",
            "difficulty": "intermediate",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["24 Choral Preludes", "Juvenilia"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Alleluia No. 2",
            "ensemble": ["choir"],
            "instruments": ["SSAATTBB"],
            "year": 2016,
            "length": "1'45\"",
            "difficulty": "intermediate",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["24 Choral Preludes", "Juvenilia"],
            "scoreLink": "https://youtu.be/ZJq8_Enew6g?si=kNbZOc3kA8Sd-ZEL",
            "audioLink": "",
            "videoLink": "https://youtu.be/ZJq8_Enew6g?si=kNbZOc3kA8Sd-ZEL",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Pieces of Christmas, I. Trip to Mimi & Papaw's",
            "ensemble": ["chamber"],
            "instruments": ["flute", "viola", "bassoon"],
            "year": 2024,
            "length": "4:30",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "ongoing",
            "series": ["Daily Pages", "Pieces of Christmas"],
            "scoreLink": "",
            "audioLink": "https://jonathanrainous.substack.com/p/first-of-the-first-drafts-ab2",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "21 Miniatures for Flute",
            "ensemble": ["solo"],
            "instruments": ["flute"],
            "year": 2017,
            "length": "45\" -- 2' each",
            "difficulty": "intermediate",
            "premiere": "ongoing performances",
            "performer": "Joan Merrill, Robin Meiksins, Dr. Beth Ratay",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/sets/24-flute-miniatures",
            "videoLink": "https://youtu.be/AqspndYx2Jg",
            "programNotesLink": "",
            "purchaseLinks": [
                {
                    "url": "https://www.sheetmusicdirect.com/en-US/Search.aspx?query=rainous%20miniatures&u=1",
                    "name": "SheetMusicDirect",
                    "price": "$4.99 each"
                },
                {
                    "url": "https://www.sheetmusicplus.com/en/explore?q=rainous%2Bminiatures",
                    "name": "Sheet Music Plus",
                    "price": "$4.99 each"
                }
            ]
        },

        {
            "title": "Reveries No. 1",
            "ensemble": ["solo"],
            "instruments": ["piano"],
            "year": 2016,
            "length": "",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["Juvenilia"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Ruminations on the Potoo",
            "ensemble": ["chamber"],
            "instruments": ["trombone", "clarinet", "violin", "piano", "percussion"],
            "year": 2015,
            "length": "9:00-10:00",
            "difficulty": "professional",
            "premiere": "April 2015",
            "performer": "Daniel Torres, trombone soloist, with Grace McCaw, violin; Kathryn Coffer, clarinet; Josh McClellan, percussion; Jeff Burnham, piano",
            "commissioner": "Daniel Torres",
            "type": "commissioned",
            "series": ["Juvenilia"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "https://www.youtube.com/watch?v=KvOXoAUamuM",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Occasional No. 1",
            "ensemble": ["chamber"],
            "instruments": ["bassoon", "violin", "double bass"],
            "year": 2022,
            "length": "11-15'",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["Daily Pages"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Ostinato with Machines, No. 1",
            "ensemble": ["String Orchestra"],
            "instruments": ["violin (2)", "viola", "cello", "double bass(2)"],
            "year": 2025,
            "length": "4:00",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "",
            "series": ["Daily Pages", "Ostinato Experiments"],
            "scoreLink": "",
            "audioLink": "https://jonathanrainous.substack.com/p/ostinato-with-machines-no-1",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "I-75: Southward from Sault Ste. Marie",
            "ensemble": ["chamber"],
            "instruments": [
                "at least one keyboard(s) and/or mallet instrument(s)",
                "minimum of two other instruments"
            ],
            "year": 2023,
            "length": "25-70'",
            "difficulty": "professional",
            "premiere": "November 28, 2023",
            "performer": "The Academic Complex, University at Buffalo",
            "commissioner": "",
            "type": "other",
            "series": ["I-75", "Open Instrumentation"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Homeward",
            "ensemble": ["chamber"],
            "instruments": [
                "flute",
                "clarinet",
                "saxophone",
                "violin",
                "cello",
                "percussion",
                "piano"
            ],
            "year": 2022,
            "length": "9:00",
            "difficulty": "professional",
            "premiere": "workshopped March 2022",
            "performer": "[Switch~ Ensemble]",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/sets/homeward-excerpts",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "[Repeat Once]",
            "ensemble": ["solo", "electronic"],
            "instruments": ["theremin cello or electric cello with electronics"],
            "year": 2021,
            "length": "8'",
            "difficulty": "professional",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Rapture, 1. Exuberance",
            "ensemble": ["chamber"],
            "instruments": ["violin", "cello", "percussion"],
            "year": 2021,
            "length": "",
            "difficulty": "professional",
            "premiere": "recorded June 2021",
            "performer": "Slee Sinfonietta",
            "commissioner": "",
            "type": "other",
            "series": ["Enraptured"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Concurrents/ce",
            "ensemble": ["brass quintet"],
            "instruments": ["trumpet", "horn", "trombone", "tuba"],
            "year": 2020,
            "length": "",
            "difficulty": "professional",
            "premiere": "recorded February 2025",
            "performer": "Atlantic Brass Quintet",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Overture for L",
            "ensemble": ["concerto"],
            "instruments": ["piano", "orchestra"],
            "year": 2019,
            "length": "13'",
            "difficulty": "professional",
            "premiere": "unpremiered",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Gethsemane",
            "ensemble": ["chamber"],
            "instruments": [
                "coloratura soprano",
                "baritone",
                "violin",
                "clarinet / bass clarinet"
            ],
            "year": 2019,
            "length": "5'",
            "difficulty": "professional",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["Via Dolorosa"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Symphony for Post-Moderns",
            "ensemble": ["orchestra"],
            "instruments": ["orchestra"],
            "year": 2018,
            "length": "7-9'",
            "difficulty": "professional",
            "premiere": "April 7, 2019",
            "performer": "Ithaca College Symphony Orchestra",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/symphony-for-post-moderns",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "String Quartet No. 1, \"Imaginarium\"",
            "ensemble": ["string quartet"],
            "instruments": ["violin", "viola", "cello"],
            "year": 2018,
            "length": "18'-20'",
            "difficulty": "professional",
            "premiere": "excerpts performed July 2018 in València, Spain",
            "performer": "Mivos Quartet",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "https://www.youtube.com/watch?v=14oPWX3_H3M",
            "audioLink": "https://soundcloud.com/jonathan-rainous/sets/excerpts-from-string-quartet-no-1",
            "videoLink": "https://www.youtube.com/watch?v=14oPWX3_H3M",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "A Long Walk In the Garden of Vanquished Dreams",
            "ensemble": ["chamber"],
            "instruments": ["trumpet", "piano"],
            "year": 2023,
            "length": "33'",
            "difficulty": "professional",
            "premiere": "December 2023",
            "performer": "Walt Skidmore, Nicholas Emmanuel",
            "commissioner": "Teressa-Jo Izzo",
            "type": "commissioned",
            "series": ["in the Garden of Vanquished Dreams"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Meditations In the Garden of Vanquished Dreams",
            "ensemble": ["chamber"],
            "instruments": ["trumpet and electronics", "piano"],
            "year": 2023,
            "length": "various",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "seeking commission",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Quanta",
            "ensemble": ["solo"],
            "instruments": ["marimba"],
            "year": 2019,
            "length": "5'",
            "difficulty": "professional",
            "premiere": "unperformed (postponed due to COVID-19)",
            "performer": "Ujjal Bhattacharyya",
            "commissioner": "Ujjal Bhattacharyya",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Sonatina for Euphonium",
            "ensemble": ["chamber"],
            "instruments": ["euphonium", "piano"],
            "year": 2013,
            "length": "8:00",
            "difficulty": "advanced",
            "premiere": "November 2013",
            "performer": "Christopher Baldani",
            "commissioner": "Christopher Baldani",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "To Reach for Heaven",
            "ensemble": ["solo"],
            "instruments": ["violin"],
            "year": 2022,
            "length": "13:00",
            "difficulty": "professional",
            "premiere": "May 2022",
            "performer": "Tyler Adamthwaite, University at Buffalo",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Elegy No. 3, for Ray Miller",
            "ensemble": ["chamber"],
            "instruments": ["violin", "viola", "cello", "piano"],
            "year": 2021,
            "length": "6-7'",
            "difficulty": "advanced",
            "premiere": "June 2022 (June in Buffalo Festival)",
            "performer": "Slee Sinfonietta",
            "commissioner": "",
            "type": "other",
            "series": ["Elegies"],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/elegy-no-3-for-ray-miller",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fantasia for 5 Horns",
            "ensemble": ["brass ensemble"],
            "instruments": ["horn (5)"],
            "year": 2021,
            "length": "6'",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "https://youtu.be/dUV8SJ_0uLE",
            "audioLink": "",
            "videoLink": "https://youtu.be/dUV8SJ_0uLE",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Meditations, Nos. 1-3",
            "ensemble": ["solo"],
            "instruments": ["piano"],
            "year": 2020,
            "length": "various",
            "difficulty": "advanced",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": ["Meditations"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Suite for Flute and Clarinet",
            "ensemble": ["chamber"],
            "instruments": ["flute", "clarinet"],
            "year": 2017,
            "length": "25:00",
            "difficulty": "advanced",
            "premiere": "partial premieres October 2017, April 2019 at Ithaca College",
            "performer": "Nicole Murray, flute; Valerie Nuzzolo, clarinet",
            "commissioner": "",
            "type": "other",
            "series": ["Daily Pages", "Juvenilia"],
            "scoreLink": "https://youtube.com/playlist?list=PLrSS87bP7AAd8tqZJ1DisG37N9QeOcgYI",
            "audioLink": "https://youtube.com/playlist?list=PLrSS87bP7AAd8tqZJ1DisG37N9QeOcgYI",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "A Short Stroll in the Garden of Vanquished Dreams",
            "ensemble": ["chamber"],
            "instruments": ["trumpet", "piano"],
            "year": 2023,
            "length": "6:00",
            "difficulty": "professional",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "Teressa-Jo Izzo",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Downtempo Etude No. 1",
            "ensemble": ["concert band"],
            "instruments": [
                "flute",
                "oboe",
                "clarinet",
                "bassoon",
                "alto saxophone",
                "tenor saxophone",
                "baritone saxophone",
                "trumpet",
                "horn",
                "trombone",
                "euphonium",
                "tuba",
                "percussion"
            ],
            "year": 2024,
            "length": "6'",
            "difficulty": "intermediate",
            "premiere": "Fall 2025",
            "performer": "",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fretless Dreams",
            "ensemble": ["solo with electronics"],
            "instruments": [
                "electric cello",
                "optional electronicist or electronics triggered by performer via pedal and Max patch"
            ],
            "year": 2025,
            "length": "40'",
            "difficulty": "professional",
            "premiere": "in progress",
            "performer": "",
            "commissioner": "",
            "type": "current project",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Dark March",
            "ensemble": ["String Orchestra"],
            "instruments": ["violin", "viola", "cello", "double bass"],
            "year": 2024,
            "length": "8'",
            "difficulty": "intermediate",
            "premiere": "June 5, 2024",
            "performer": "Buffalo String Works",
            "commissioner": "Buffalo String Works",
            "type": "commissioned",
            "series": ["Side-by-side"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fanfares, No. 2: Grand March for an Eisteddfod",
            "ensemble": ["brass ensemble"],
            "instruments": ["trombone (3)"],
            "year": 2022,
            "length": "2:30",
            "difficulty": "intermediate",
            "premiere": "",
            "performer": "",
            "commissioner": "2022 Eisteddfod Festival in Australia",
            "type": "commissioned",
            "series": ["Fanfares"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Light Shines in the Darkness",
            "ensemble": ["concert band"],
            "instruments": [
                "flute",
                "oboe",
                "clarinet",
                "bassoon",
                "saxophone",
                "trumpet",
                "horn",
                "trombone",
                "euphonium",
                "tuba",
                "percussion"
            ],
            "year": 2017,
            "length": "5'30\"",
            "difficulty": "intermediate",
            "premiere": "recorded March 2018 at Ithaca College",
            "performer": "Boynton MS Band",
            "commissioner": "Boynton MS Band",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/light-shines-in-the-darkness",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fanfare No. 1, for Brass Quintet",
            "ensemble": ["brass ensemble"],
            "instruments": ["trumpet (2)", "horn", "trombone", "tuba"],
            "year": 2018,
            "length": "0:45",
            "difficulty": "intermediate",
            "premiere": "September 2018",
            "performer": "Ithaca College",
            "commissioner": "",
            "type": "other",
            "series": ["Fanfares"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fanfare No. 3",
            "ensemble": ["chamber"],
            "instruments": ["trombone", "trombone", "bass trombone"],
            "year": 2025,
            "length": "3:00",
            "difficulty": "advanced",
            "premiere": "",
            "performer": "",
            "commissioner": "",
            "type": "",
            "series": ["Fanfares"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Fantasies on Old 100th",
            "ensemble": ["chamber"],
            "instruments": ["trombone", "piano"],
            "year": 2013,
            "length": "4'-5'",
            "difficulty": "intermediate",
            "premiere": "April 2014 at Belmont University",
            "performer": "R. Alexander Plasket",
            "commissioner": "R. Alexander Plasket",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "https://youtu.be/u8qfpCq2t_w",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Vignette No. 1",
            "ensemble": ["woodwind quintet"],
            "instruments": ["flute", "oboe", "clarinet", "bassoon", "horn"],
            "year": 2017,
            "length": "2'15\"",
            "difficulty": "advanced",
            "premiere": "February 2018",
            "performer": "District5",
            "commissioner": "",
            "type": "other",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/vignettes-no-1-lazily",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "I Cry (Psalm 18)",
            "ensemble": ["choir"],
            "instruments": ["SSAABB"],
            "year": 2017,
            "length": "6:00",
            "difficulty": "intermediate",
            "premiere": "May 2017",
            "performer": "Cincinnati Christian School's High School choir",
            "commissioner": "Cincinnati Christian School's High School choir, directed by Carolyn",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "https://soundcloud.com/jonathan-rainous/i-cry-psalm-18-premiere-recording",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Haiku I",
            "ensemble": ["choir"],
            "instruments": ["voice"],
            "year": 2019,
            "length": "5'",
            "difficulty": "advanced",
            "premiere": "May 2023 at the University at Buffalo",
            "performer": "UB students and faculty",
            "commissioner": "Groton High School chamber choir",
            "type": "commissioned",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Epithalamion for AM & NC",
            "ensemble": ["chamber"],
            "instruments": ["alto saxophone", "violin", "guitar", "bass"],
            "year": 2025,
            "length": "5'",
            "difficulty": "intermediate",
            "premiere": "in progress",
            "performer": "",
            "commissioner": "",
            "type": "current project",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Canon-fire No. 1, Palyndromia",
            "ensemble": ["brass ensemble"],
            "instruments": ["trumpet"],
            "year": 2025,
            "length": "",
            "difficulty": "intermediate",
            "premiere": "in progress",
            "performer": "",
            "commissioner": "",
            "type": "current project",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Elegy No. 2",
            "ensemble": ["chamber"],
            "instruments": ["cello", "flute"],
            "year": 2025,
            "length": "6'",
            "difficulty": "intermediate",
            "premiere": "in progress",
            "performer": "",
            "commissioner": "",
            "type": "current project",
            "series": ["Elegies"],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Trumpet Trio",
            "ensemble": ["brass ensemble", "chamber"],
            "instruments": ["trumpet"],
            "year": 2025,
            "length": "7'",
            "difficulty": "intermediate",
            "premiere": "in progress",
            "performer": "",
            "commissioner": "",
            "type": "current project",
            "series": [],
            "scoreLink": "",
            "audioLink": "",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        },

        {
            "title": "Elegy No. 5, For Those Never Born",
            "ensemble": ["chamber", "solo", "open"],
            "instruments": [
                "piano",
                "optional: 1-4 monophonic instruments, played with or without electronics, with parts for SATB instruments and allowing free octave transposition"
            ],
            "year": 2025,
            "length": "11:30 - 75:00",
            "difficulty": "intermediate",
            "premiere": "unperformed",
            "performer": "",
            "commissioner": "",
            "type": "ongoing",
            "series": ["Elegies", "Open Instrumentation"],
            "scoreLink": "",
            "audioLink": "https://jonathanrainous.substack.com/p/elegy-no-5-for-those-never-born",
            "videoLink": "",
            "programNotesLink": "",
            "purchaseLinks": []
        }
    ];
    // ── Helpers ──────────────────────────────────────────────────────────────
    function esc(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    var DIFFICULTY_ORDER = {
        'easy': 1,
        'intermediate': 2,
        'advanced': 3,
        'professional': 4
    };

    var IN_PROGRESS_TYPES = [
        'current project',
        'ongoing',
        'seeking commission',
        'in progress'
    ];

    function isInProgress(comp) {
        var t = (comp.type || '').toLowerCase().trim();
        for (var i = 0; i < IN_PROGRESS_TYPES.length; i++) {
            if (t === IN_PROGRESS_TYPES[i]) return true;
        }
        return false;
    }

    function parsePrice(pl) {
        if (!pl || !pl.length) return Infinity;
        var min = Infinity;
        for (var i = 0; i < pl.length; i++) {
            var p = String(pl[i].price || '').replace(/[^0-9.]/g, '');
            var n = parseFloat(p);
            if (!isNaN(n) && n < min) min = n;
        }
        return min;
    }

    // ── Card builder (emoji‑free) ─────────────────────────────────────────────
    function buildCard(comp) {
        var diff = (comp.difficulty || '').toLowerCase();
        var diffLabel = diff ? (diff.charAt(0).toUpperCase() + diff.slice(1)) : '';
        var available = comp.purchaseLinks && comp.purchaseLinks.length > 0;

        var instruments = Array.isArray(comp.instruments)
            ? comp.instruments.join(', ')
            : (comp.instruments || '');

        var ensemble = Array.isArray(comp.ensemble)
            ? comp.ensemble.join(', ')
            : (comp.ensemble || '');

        var series = Array.isArray(comp.series)
            ? comp.series.join(', ')
            : (comp.series || '');

        // Action buttons (text‑only)
        var actions = '';

        if (comp.scoreLink) {
            actions += '<a href="' + esc(comp.scoreLink) +
                '" target="_blank" rel="noopener" class="jrdb-action-btn jrdb-btn-score">Score</a>';
        }

        if (comp.audioLink) {
            actions += '<a href="' + esc(comp.audioLink) +
                '" target="_blank" rel="noopener" class="jrdb-action-btn jrdb-btn-audio">Audio</a>';
        }

        if (comp.videoLink) {
            actions += '<a href="' + esc(comp.videoLink) +
                '" target="_blank" rel="noopener" class="jrdb-action-btn jrdb-btn-video">Video</a>';
        }

        if (comp.programNotesLink) {
            actions += '<a href="' + esc(comp.programNotesLink) +
                '" target="_blank" rel="noopener" class="jrdb-action-btn" style="background:#17a2b8;color:white;">Notes</a>';
        }

        if (comp.purchaseLinks && comp.purchaseLinks.length === 1) {
            var pl = comp.purchaseLinks[0];
            var priceLabel = pl.price ? ' – ' + esc(pl.price) : '';
            actions += '<a href="' + esc(pl.url) +
                '" target="_blank" rel="noopener" class="jrdb-action-btn jrdb-btn-buy">Buy' +
                priceLabel + '</a>';
        } else if (comp.purchaseLinks && comp.purchaseLinks.length > 1) {
            for (var i = 0; i < comp.purchaseLinks.length; i++) {
                var pl = comp.purchaseLinks[i];
                var priceLabel = pl.price ? ' – ' + esc(pl.price) : '';
                actions += '<a href="' + esc(pl.url) +
                    '" target="_blank" rel="noopener" class="jrdb-action-btn jrdb-btn-buy-multiple">Buy' +
                    priceLabel + '</a>';
            }
        }

        // Meta rows (text‑only)
        var meta = '';

        if (instruments) {
            meta += '<div class="jrdb-meta-item"><span>Instruments: ' +
                esc(instruments) + '</span></div>';
        }

        if (comp.length) {
            meta += '<div class="jrdb-meta-item"><span>Length: ' +
                esc(comp.length) + '</span></div>';
        }

        if (ensemble) {
            meta += '<div class="jrdb-meta-item"><span>Ensemble: ' +
                esc(ensemble) + '</span></div>';
        }

        if (series) {
            meta += '<div class="jrdb-meta-item"><span>Series: ' +
                esc(series) + '</span></div>';
        }

        if (comp.premiere) {
            meta += '<div class="jrdb-meta-item"><span>Premiered: ' +
                esc(comp.premiere) + '</span></div>';
        }

        if (comp.commissioner) {
            meta += '<div class="jrdb-meta-item"><span>Commissioned by: ' +
                esc(comp.commissioner) + '</span></div>';
        }

        // Availability badges (text‑only)
        var availBadge = available
            ? '<span class="jrdb-availability-badge jrdb-available-yes">Available</span>'
            : '<span class="jrdb-availability-badge jrdb-available-no">Score on Request</span>';

        // Difficulty badge (text‑only)
        var diffBadge = diffLabel
            ? '<span class="jrdb-difficulty-badge jrdb-difficulty-' +
                esc(diff) + '">' + esc(diffLabel) + '</span>'
            : '';

        // In‑progress tag (no emoji originally)
        var inProgressTag = isInProgress(comp)
            ? '<span style="background:#fff3cd;color:#856404;padding:3px 10px;' +
              'border-radius:12px;font-size:11px;font-weight:600;margin-left:6px;">In Progress</span>'
            : '';

        return (
            '<div class="jrdb-composition-card">' +
                '<div class="jrdb-composition-title">' +
                    esc(comp.title) +
                    ' <span style="color:#8b5a3c;font-size:0.75em;font-weight:400;">(' +
                    esc(String(comp.year)) + ')</span>' +
                    inProgressTag +
                '</div>' +

                '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap;">' +
                    diffBadge + availBadge +
                '</div>' +

                '<div class="jrdb-composition-meta">' + meta + '</div>' +

                (actions
                    ? '<div class="jrdb-composition-actions">' + actions + '</div>'
                    : ''
                ) +
            '</div>'
        );
    }
    // ── State ──────────────────────────────────────────────────────────────────
    var showInProgressOnly = false;

    // ── Core render ────────────────────────────────────────────────────────────
    function filterAndRender() {
        var search       = (document.getElementById('jrdbSearchInput').value || '').toLowerCase().trim();
        var diffFilter   = (document.getElementById('jrdbDifficultyFilter').value || '').toLowerCase();
        var yearFilter   = document.getElementById('jrdbYearFilter').value || '';
        var availFilter  = document.getElementById('jrdbAvailabilityFilter').value || '';
        var sortBy       = document.getElementById('jrdbSortBy').value || 'year';
        var sortOrder    = document.getElementById('jrdbSortOrder').value || 'desc';

        var filtered = JRDBCompositions.filter(function(comp) {
            // In-progress mode
            if (showInProgressOnly && !isInProgress(comp)) return false;

            // Search: title, instruments, ensemble, series, performer, commissioner, type
            if (search) {
                var haystack = [
                    comp.title,
                    Array.isArray(comp.instruments) ? comp.instruments.join(' ') : comp.instruments,
                    Array.isArray(comp.ensemble)    ? comp.ensemble.join(' ')    : comp.ensemble,
                    Array.isArray(comp.series)      ? comp.series.join(' ')      : comp.series,
                    comp.performer,
                    comp.commissioner,
                    comp.type
                ].join(' ').toLowerCase();
                if (haystack.indexOf(search) === -1) return false;
            }

            // Difficulty
            if (diffFilter && (comp.difficulty || '').toLowerCase() !== diffFilter) return false;

            // Year
            if (yearFilter && String(comp.year) !== yearFilter) return false;

            // Availability
            var hasLinks = comp.purchaseLinks && comp.purchaseLinks.length > 0;
            if (availFilter === 'yes' && !hasLinks) return false;
            if (availFilter === 'no'  && hasLinks)  return false;

            return true;
        });

        // Sorting
        filtered.sort(function(a, b) {
            var av, bv, dir = (sortOrder === 'asc') ? 1 : -1;

            switch (sortBy) {
                case 'year':
                    av = parseInt(a.year) || 0;
                    bv = parseInt(b.year) || 0;
                    return (av - bv) * dir;

                case 'title':
                    av = (a.title || '').toLowerCase();
                    bv = (b.title || '').toLowerCase();
                    return av < bv ? -dir : av > bv ? dir : 0;

                case 'difficulty':
                    av = DIFFICULTY_ORDER[(a.difficulty || '').toLowerCase()] || 0;
                    bv = DIFFICULTY_ORDER[(b.difficulty || '').toLowerCase()] || 0;
                    return (av - bv) * dir;

                case 'ensembleSize':
                    av = Array.isArray(a.instruments) ? a.instruments.length : 1;
                    bv = Array.isArray(b.instruments) ? b.instruments.length : 1;
                    return (av - bv) * dir;

                case 'availability':
                    av = (a.purchaseLinks && a.purchaseLinks.length) ? 1 : 0;
                    bv = (b.purchaseLinks && b.purchaseLinks.length) ? 1 : 0;
                    return (av - bv) * dir;

                case 'price':
                    av = parsePrice(a.purchaseLinks);
                    bv = parsePrice(b.purchaseLinks);
                    if (av === Infinity && bv === Infinity) return 0;
                    if (av === Infinity) return dir;
                    if (bv === Infinity) return -dir;
                    return (av - bv) * dir;

                default:
                    return 0;
            }
        });

        // Render
        var grid = document.getElementById('jrdbCompositionsGrid');
        if (filtered.length === 0) {
            grid.innerHTML =
                '<div class="jrdb-no-results">' +
                    '<h3>No compositions found</h3>' +
                    '<p>Try adjusting your search or filters.</p>' +
                '</div>';
        } else {
            grid.innerHTML = filtered.map(buildCard).join('');
        }

        // Stats
        document.getElementById('jrdbTotalCount').textContent =
            'Total: ' + JRDBCompositions.length + ' compositions';

        document.getElementById('jrdbFilteredCount').textContent =
            'Showing: ' + filtered.length + ' composition' +
            (filtered.length !== 1 ? 's' : '');
    }

    // ── Initialise ─────────────────────────────────────────────────────────────
    function init() {
        // Populate year filter dynamically
        var years = [];
        for (var i = 0; i < JRDBCompositions.length; i++) {
            var y = String(JRDBCompositions[i].year);
            if (y && years.indexOf(y) === -1) years.push(y);
        }
        years.sort(function(a, b) { return parseInt(b) - parseInt(a); });

        var yearSel = document.getElementById('jrdbYearFilter');
        for (var j = 0; j < years.length; j++) {
            var opt = document.createElement('option');
            opt.value = years[j];
            opt.textContent = years[j];
            yearSel.appendChild(opt);
        }

        // Event listeners
        [
            'jrdbSearchInput',
            'jrdbDifficultyFilter',
            'jrdbYearFilter',
            'jrdbAvailabilityFilter',
            'jrdbSortBy',
            'jrdbSortOrder'
        ].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('change', filterAndRender);
        });

        // Live search
        var si = document.getElementById('jrdbSearchInput');
        if (si) si.addEventListener('keyup', filterAndRender);

        // In-progress toggle
        var btn    = document.getElementById('jrdbInProgressBtn');
        var btnAll = document.getElementById('jrdbShowAllBtn');

        if (btn) {
            btn.addEventListener('click', function() {
                showInProgressOnly = true;
                btn.style.display    = 'none';
                btnAll.style.display = '';
                filterAndRender();
            });
        }

        if (btnAll) {
            btnAll.addEventListener('click', function() {
                showInProgressOnly = false;
                btnAll.style.display = 'none';
                btn.style.display    = '';
                filterAndRender();
            });
        }

        // Initial render
        filterAndRender();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
