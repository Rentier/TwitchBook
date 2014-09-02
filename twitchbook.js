// ==UserScript==
// @name       TwitchBook
// @namespace  http://mrklie.com
// @version    0.2
// @description  Kappa
// @match      https://www.facebook.com/messages/*
// @copyright  2014+, JCK
// @require http://code.jquery.com/jquery-latest.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==

// Emotes are taken from
// http://twitchemotes.com/apidocs
var EMOTES_JSON = {"HassaanChop": "emoticon-20225-src-cf62346ed09bb4c3-28x28.png", "PogChamp": "chansub-global-emoticon-60aa1af305e32d49-23x30.png", "FreakinStinkin": "chansub-global-emoticon-d14278fea8fad146-19x27.png", "AtWW": "emoticon-9801-src-3d2087b69c5c5c6b-28x28.png", "SMOrc": "chansub-global-emoticon-9f276ed33053ec70-32x32.png", "WholeWheat": "chansub-global-emoticon-89a30a213fe46f49-20x30.png", "RalpherZ": "chansub-global-emoticon-3d9b59b17687288c-33x30.png", "BORT": "chansub-global-emoticon-6f9fa95e9e3d6a69-19x30.png", "wowsoKAPPA": "emoticon-16836-src-6b4672263d1a45e5-28x28.png", "JKanStyle": "chansub-global-emoticon-3a7ee1bc0e5c9af0-21x27.png", "SuperVinlin": "chansub-global-emoticon-92a1b848540e9347-23x27.png", "BlargNaut": "chansub-global-emoticon-a5293e92212cadd9-21x27.png", "HotPokket": "chansub-global-emoticon-55873089390f4a10-28x30.png", "KZcover": "emoticon-5249-src-c649b1d10e887587-28x28.png", "scarraHAPPY": "emoticon-14896-src-8dbcd8807a68c282-28x28.png", "TehFunrun": "chansub-global-emoticon-a204e65775b969c5-27x27.png", "EvilFetus": "chansub-global-emoticon-484439fc20e0d36d-29x30.png", "KZskull": "emoticon-5253-src-7358e7adaec32ecc-28x28.png", "scarraWARD": "emoticon-14892-src-64e427244100931d-28x28.png", "FrankerZ": "chansub-global-emoticon-3b96527b46b1c941-40x30.png", "WinWaker": "chansub-global-emoticon-d4e971f7a6830e95-30x30.png", "TinyFace": "chansub-global-emoticon-b93007bc230754e1-19x30.png", "ShazBotstix": "chansub-global-emoticon-ccaf06d02a01a804-24x30.png", "StoneLightning": "chansub-global-emoticon-8b5aaae6e2409deb-20x27.png", "wowsoBAKED": "emoticon-17216-src-410327064fab0868-28x28.png", "EagleEye": "chansub-global-emoticon-95eb8045e7ae63b8-18x27.png", "BCWarrior": "chansub-global-emoticon-1e3ccd969459f889-29x27.png", "SMSkull": "chansub-global-emoticon-50b9867ba05d1ecc-24x24.png", "TheRinger": "chansub-global-emoticon-1903cc415afc404c-20x27.png", "wowsoSPOOKY": "emoticon-3176-src-1ce1040aa7e3402c-28x28.png", "Kreygasm": "chansub-global-emoticon-3a624954918104fe-19x27.png", "PJHarley": "emoticon-9808-src-e9e3212e738f3370-28x28.png", "PJSalt": "chansub-global-emoticon-18be1a297459453f-36x30.png", "wowsoQT": "emoticon-2695-src-b90e8221eb05005f-28x28.png", "RedCoat": "chansub-global-emoticon-6b8d1be08f244e92-19x27.png", "SoonerLater": "chansub-global-emoticon-696192d9891880af-23x30.png", "StrawBeary": "chansub-global-emoticon-3dac9659e838fab2-20x27.png", "OMGScoots": "chansub-global-emoticon-e01723a9ae4fbd8b-22x28.png", "OpieOP": "chansub-global-emoticon-21e708123d6a896d-21x30.png", "DBstyle": "chansub-global-emoticon-1752876c0d0ec35f-21x30.png", "Kappa": "chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png", "CougarHunt": "chansub-global-emoticon-551cd64fc3d4590a-21x27.png", "DogFace": "chansub-global-emoticon-d0134a612162a147-22x28.png", "wowsoHEIM": "emoticon-14774-src-65942266841b81ae-28x28.png", "Jebaited": "chansub-global-emoticon-39dff1bb9b42cf38-21x30.png", "JonCarnage": "chansub-global-emoticon-6aaca644ea5374c6-20x27.png", "NightBat": "emoticon-9805-src-5346ae35c2a450e5-28x28.png", "BrainSlug": "chansub-global-emoticon-d8eee0a259b7dfaa-30x30.png", "EleGiggle": "emoticon-4339-src-07433e94eae8754e-28x28.png", "PeoplesChamp": "emoticon-3412-src-76b6e3c79b31b696-28x28.png", "BatChest": "chansub-global-emoticon-df8ac34ab89d8c0c-18x28.png", "SSSsss": "chansub-global-emoticon-5d019b356bd38360-24x24.png", "wowsoHYPE": "emoticon-17221-src-d00612d6534113d6-28x28.png", "Poooound": "chansub-global-emoticon-61a08075ecef6afa-21x30.png", "MrDestructoid": "chansub-global-emoticon-ac61a7aeb52a49d3-39x27.png", "WTRuck": "chansub-global-emoticon-f9ee1c9eb52375de-28x28.png", "owoFACE": "emoticon-21601-src-c4d9f8554a1e3246-28x28.png", "Shazam": "emoticon-9807-src-4444736c1440cb77-28x28.png", "wowsoTILT": "emoticon-19670-src-13d1f370fd176ca9-28x28.png", "4Head": "chansub-global-emoticon-76292ac622b0fc38-20x30.png", "GingerPower": "chansub-global-emoticon-2febb829eae08b0a-21x27.png", "Volcania": "chansub-global-emoticon-efbcc231b2d2d206-27x28.png", "SoBayed": "chansub-global-emoticon-efca3da7a499ac81-24x30.png", "KZhelghast": "emoticon-5251-src-a1596431098da5d4-28x28.png", "UnSane": "chansub-global-emoticon-4eea6f01e372a996-28x30.png", "scarraGASM": "emoticon-20981-src-9af20b3960a456d6-28x28.png", "noScope420": "emoticon-13084-src-d20453d53c23a780-28x28.png", "UncleNox": "emoticon-3666-src-19af357000ae2b42-28x28.png", "wowsoTRAIN": "emoticon-6975-src-6d5c4c32940c2dd3-28x28.png", "KevinTurtle": "chansub-global-emoticon-d530ef454aa17093-21x27.png", "NoNoSpot": "chansub-global-emoticon-179f310b0746584d-23x27.png", "UleetBackup": "chansub-global-emoticon-5342e829290d1af0-17x27.png", "wowsoBLESSED": "emoticon-12576-src-2b9dbb504d4c41eb-28x28.png", "PipeHype": "emoticon-4240-src-d0c560fa27408dc7-28x28.png", "NinjaTroll": "chansub-global-emoticon-89e474822a976928-19x27.png", "Kippa": "chansub-global-emoticon-56a84f0e87c3d3a5-24x28.png", "wowsoCULLED": "emoticon-19671-src-752bc2374b89b200-28x28.png", "PunchTrees": "chansub-global-emoticon-b85003ffba04e03e-24x24.png", "DatSheffy": "chansub-global-emoticon-bf13a0595ecf649c-24x30.png", "DAESuppy": "chansub-global-emoticon-ef2a16bdc037bc91-28x28.png", "OneHand": "chansub-global-emoticon-b6d67569a0c6340a-20x27.png", "TheTarFu": "chansub-global-emoticon-1fcfa48228bbd6ea-25x28.png", "KZowl": "emoticon-5252-src-437c1b59f74e39bc-28x28.png", "PanicVis": "emoticon-3668-src-f36f5a70b1c93a29-28x28.png", "FailFish": "chansub-global-emoticon-c8a77ec0c49976d3-22x30.png", "TF2John": "chansub-global-emoticon-ffa884123ef70519-22x30.png", "MVGame": "chansub-global-emoticon-1a1a8bb5cdf6efb9-24x32.png", "BibleThump": "chansub-global-emoticon-f6c13c7fc0a5c93d-36x30.png", "wowsoFREE": "emoticon-17219-src-3b87827e6a916525-28x28.png", "ArsonNoSexy": "chansub-global-emoticon-e13a8382e40b19c7-18x27.png", "BionicBunion": "chansub-global-emoticon-740242272832a108-30x30.png", "AtGL": "emoticon-9809-src-52738249ed340b6a-28x28.png", "PicoMause": "chansub-global-emoticon-ce027387c35fb601-22x27.png", "GasJoker": "emoticon-9802-src-6e8eaf7c9777fbf8-28x28.png", "YouWHY": "emoticon-4337-src-abba134ff81d77c7-28x28.png", "wowsoMOIST": "emoticon-3263-src-39d14bb4a53cd0d9-28x28.png", "wowsoREKT": "emoticon-19669-src-119a36d6a6187149-28x28.png", "scarraRESET": "emoticon-14426-src-2964531d6c36b26b-28x28.png", "shazamicon": "emoticon-9806-src-973c438f0fd31151-28x28.png", "TriHard": "chansub-global-emoticon-6407e6947eb69e21-24x30.png", "ItsBoshyTime": "chansub-global-emoticon-e8e0b0c4e70c4fb8-18x18.png", "scarraBOWL": "emoticon-14425-src-5836b220a194d432-28x28.png", "HassanChop": "chansub-global-emoticon-22c6299e539344a9-19x28.png", "BigBrother": "chansub-global-emoticon-63c10b84aaddd77c-24x30.png", "FuzzyOtterOO": "chansub-global-emoticon-d141fc57f627432f-26x26.png", "scarraGOD": "emoticon-14890-src-ec06a69e651b393c-28x28.png", "scarraWATER": "emoticon-14893-src-e444e5d43d865cf2-28x28.png", "KZguerilla": "emoticon-5250-src-da9dd1029955070e-28x28.png", "TooSpicy": "chansub-global-emoticon-f193772ca6e512f2-23x30.png", "BrokeBack": "emoticon-4057-src-770e3d6c306dda14-28x28.png", "OptimizePrime": "chansub-global-emoticon-41f8a86c4b15b5d8-22x27.png", "ResidentSleeper": "chansub-global-emoticon-1ddcc54d77fc4a61-28x28.png", "wowsoUSA": "emoticon-14303-src-ee241853ef265b58-28x28.png", "wowsoBROJOB": "emoticon-14518-src-c092bee5336c5aef-28x28.png", "AsianGlow": "chansub-global-emoticon-a3708d1e15c3f197-24x30.png", "TheThing": "emoticon-7427-src-f1278d0b66848536-28x28.png", "GrammarKing": "emoticon-3632-src-c3bf1bef4de9bb99-28x28.png", "owoSPOOKY": "emoticon-22723-src-c79426e20f1bf779-28x28.png", "SwiftRage": "chansub-global-emoticon-680b6b3887ef0d17-21x28.png", "Keepo": "chansub-global-emoticon-8eed21805f6217ce-27x29.png", "FUNgineer": "chansub-global-emoticon-731296fdc2d37bea-24x30.png", "BloodTrail": "chansub-global-emoticon-f124d3a96eff228a-41x28.png", "scarraFACE": "chansub-scarra-emoticon-0ab4e4416506d6a3-24x32.png", "wowsoDONG": "emoticon-17218-src-80ea7abcda33a09c-28x28.png", "KZassault": "emoticon-5248-src-914192574ba9feec-28x28.png", "RuleFive": "chansub-global-emoticon-4e65703c52fb67b5-20x30.png", "wowsoSWAG": "emoticon-19673-src-adb789468482dbe1-28x28.png", "wowsoHAM": "emoticon-17220-src-f552a78fecc69d07-28x28.png", "scarraKAT": "emoticon-14891-src-58b5fbff2d620b9a-28x28.png", "KAPOW": "emoticon-9803-src-4b786d2bb9b6162a-28x28.png", "wowsoTEAM": "emoticon-16837-src-d8cd340c7104a14c-28x28.png", "MechaSupes": "emoticon-9804-src-5b096e8d2ec67fbf-28x28.png", "wowsoSTFU": "emoticon-22127-src-1ae117b52bd9d86a-28x28.png", "owoWAT": "emoticon-22710-src-3cca6d636e4f0c11-28x28.png", "DansGame": "chansub-global-emoticon-ce52b18fccf73b29-25x32.png", "aneleanele": "emoticon-3792-src-1504dbbe3760173a-28x28.png", "AtIvy": "emoticon-9800-src-b27b39cd614d1791-28x28.png", "wowsoAMAZE": "emoticon-17214-src-379285ee1aba954d-28x28.png", "PazPazowitz": "chansub-global-emoticon-521420789e1e93ef-18x27.png", "wowsoDIG": "emoticon-17217-src-d8a4ba3fde96077f-28x28.png", "PMSTwin": "chansub-global-emoticon-a33f6c484c27e249-23x30.png", "BabyRage": "emoticon-22639-src-94b8bc8feebf46d1-28x28.png", "SriHead": "emoticon-14706-src-0867051c194fc3f1-28x28.png", "RitzMitz": "emoticon-4338-src-a741c02562405936-28x28.png", "FPSMarksman": "chansub-global-emoticon-6c26a3f04616c4bf-20x27.png", "ThunBeast": "chansub-global-emoticon-1bae8ebfe6209a0c-26x28.png"};

var EMOTES = EMOTES_JSON;

// build a regex pattern for each defined property
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;
var patterns = [];
for (var i in EMOTES) {
    if (EMOTES.hasOwnProperty(i)){ // escape metacharacters
        patterns.push('('+i.replace(metachars, "\\$&")+')');
    }
}

var PATTERN = new RegExp(patterns.join('|'),'g');
var URL = "http://static-cdn.jtvnw.net/jtv_user_pictures/";

function replaceEmoticons(text) {  
    var s = text.replace(PATTERN, function (match) {
        return typeof EMOTES[match] != 'undefined' ? '<img src="' + URL +EMOTES[match]+'"/>' : match;  
    });
    
    return s;
}

console.log("TwitchFB");
waitForKeyElements ("#webMessengerRecentMessages", actionFunction);

function actionFunction (jNode) {
    var MESSAGEBOX_ID = "webMessengerRecentMessages";
    var MESSAGEBOX = document.getElementById(MESSAGEBOX_ID);
    var config = { childList: true, subTree : true, characterData : true};
    
    var observer = new MutationObserver(function(mutations) {
        observer.disconnect();
        
        mutations.forEach(function(mutation) {
            var added = mutation.addedNodes;
            for (var i = 0; i < added.length; ++i) {
                var item = added[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
                var paragraphs = item.getElementsByTagName("p");
                for (var j = 0; j < paragraphs.length; ++j) {
                    var paragraph = $(paragraphs[j]);                    
                    var nodeText = replaceEmoticons(paragraph.html());                    
                    paragraph.html(nodeText);
                }                
            }            
        });  
        observer.observe(MESSAGEBOX, config);
    });
    
    observer.observe(MESSAGEBOX, config);    
}


