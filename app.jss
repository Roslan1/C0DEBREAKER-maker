
Gesprek met Gemini
Splits de code op in index.html, styles.css en app.js

Je ZIP-bestand met de opgesplitste code is klaar:

ZIP-icoon
c0debreaker_gesplitst
 ZIP 
Ik heb de code uit het enkele HTML-bestand succesvol opgesplitst in de afzonderlijke bestanden index.html, styles.css en app.js. In de nieuwe index.html zijn de juiste verwijzingen (<link rel="stylesheet" href="styles.css"> en <script src="app.js"></script>) automatisch toegevoegd.

Je kunt de bestanden gezamenlijk downloaden via het bovenstaande .zip archief, of ze hieronder ook nog individueel openen/downloaden:

HTML: 
HTML-icoon
index
 HTML 

CSS: 
CSS-icoon
styles
 CSS 

JavaScript: 
JS-icoon
app
 JS 




Je Stichting Fioretti Teylingen-gesprekken worden niet gebruikt om onze modellen te verbeteren. Gemini is geen mens. Gemini kan fouten maken, ook in informatie over mensen, dus dubbelcheck de reacties. Jouw privacy en GeminiOpent in een nieuw venster

// Audio Synthesizer Engine
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        function playR2D2Sound() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            const now = audioCtx.currentTime;
            osc.frequency.setValueAtTime(600 + Math.random() * 800, now);
            osc.frequency.exponentialRampToValueAtTime(300 + Math.random() * 1200, now + 0.15);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.15);
        }

        function playC3POSound() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            const now = audioCtx.currentTime;
            osc.frequency.setValueAtTime(180 + Math.random() * 60, now);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        }

        function playDoorSound() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            const bufferSize = audioCtx.sampleRate * 0.5;
            const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = audioCtx.createBufferSource();
            noise.buffer = buffer;
            const filter = audioCtx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, audioCtx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.5);
            const gain = audioCtx.createGain();
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            noise.start();
        }

        function factorial(n) {
            if (n < 0) return 0;
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        }

        function permutation(n, k) {
            return factorial(n) / factorial(n - k);
        }

        function combination(n, k) {
            return factorial(n) / (factorial(k) * factorial(n - k));
        }

        function repetition(n, k) {
            return Math.pow(n, k);
        }

        // Dynamic Question Generator
        function generateRandomQuestion(doorIndex) {
            // Difficulty scaling
            let minN, maxN, minK, maxK;
            if (doorIndex < 3) {
                // Easy
                minN = 4; maxN = 6; minK = 2; maxK = 3;
            } else if (doorIndex < 7) {
                // Medium
                minN = 6; maxN = 8; minK = 3; maxK = 4;
            } else {
                // Hard
                minN = 7; maxN = 9; minK = 4; maxK = 5;
            }

            const types = ['permutatie', 'combinatie', 'herhaling'];
            const type = types[Math.floor(Math.random() * types.length)];
            const n = Math.floor(Math.random() * (maxN - minN + 1)) + minN;
            const k = Math.min(Math.floor(Math.random() * (maxK - minK + 1)) + minK, n);

            let questionText = "";
            let targetAnswer = 0;

            if (type === 'permutatie') {
                targetAnswer = permutation(n, k);
                const scenarios = [
                    `Een kluisje heeft ${k} posities op een rij. Je hebt ${n} verschillende unieke sleutels (1 t/m ${n}). De VOLGORDE waarin je de sleutels plaatst maakt uit en elke sleutel kan maar 1x gebruikt worden.`,
                    `Er moeten ${k} beveiligingsofficieren gekozen worden uit een groep van ${n} kandidaten voor de functies Kapitein, Luitenant en Sergeant. De VOLGORDE/FUNCTIE telt en herhaling kan niet.`,
                    `Een beveiligingsscherm vereist een volgorde van ${k} unieke symbolen gekozen uit een verzameling van ${n} symbolen. Volgorde is van cruciaal belang!`
                ];
                questionText = scenarios[Math.floor(Math.random() * scenarios.length)];
            } else if (type === 'combinatie') {
                targetAnswer = combination(n, k);
                const scenarios = [
                    `Voor de poortbediening moeten er ${k} kabels tegelijkertijd verbonden worden gekozen uit een bundel van ${n} kabels. De VOLGORDE van verbinden maakt NIET uit.`,
                    `Je moet een team van ${k} Droids selecteren uit een voorraad van ${n} Droids om de stroomknooppunten uit te schakelen. De volgorde van selectie telt niet.`,
                    `Het slot vraagt om een combinatie van ${k} cijfers gekozen uit ${n} opties. Welke cijfers je kiest maakt uit, maar de VOLGORDE telt NIET.`
                ];
                questionText = scenarios[Math.floor(Math.random() * scenarios.length)];
            } else if (type === 'herhaling') {
                targetAnswer = repetition(n, k);
                const scenarios = [
                    `Een digitaal deurslot gebruikt een pincode van ${k} cijfers. Voor elk cijfer kun je kiezen uit ${n} verschillende knoppen (${0} t/m ${n-1}). Cijfers MOGEN HERHAALD worden!`,
                    `De beveiligingscomputer vereist een wachtwoord van ${k} karakters. Elk karakter wordt gekozen uit ${n} mogelijke opties. Herhaling van karakters is toegestaan en de volgorde telt!`,
                    `Er zijn ${k} opeenvolgende schakelaars. Elke schakelaar heeft ${n} verschillende standen. Hoeveel verschillende totale instellingen zijn er mogelijk?`
                ];
                questionText = scenarios[Math.floor(Math.random() * scenarios.length)];
            }

            return {
                type: type,
                n: n,
                k: k,
                text: questionText,
                answer: targetAnswer
            };
        }

        // Game State Variables
        let currentDoor = 1;
        const totalDoors = 10;
        let shields = 3;
        let timerSeconds = 420; // 7 minutes
        let timerInterval = null;
        let selectedType = null;
        let currentQuestion = null;
        let doorOpenProgress = 0; // 0 = closed, 1 = fully open
        let isDoorOpening = false;
        let calcExpression = "";

        // Canvas Rendering Engine
        const canvas = document.getElementById('shipCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function drawShipScene() {
            const w = canvas.width;
            const h = canvas.height;

            // Background Corridor / Cockpit
            if (currentDoor === 10) {
                // Cockpit View
                ctx.fillStyle = '#020617';
                ctx.fillRect(0, 0, w, h);
                // Stars
                ctx.fillStyle = '#ffffff';
                for (let i = 0; i < 40; i++) {
                    const x = (Math.sin(i * 99 + Date.now() * 0.001) * 0.5 + 0.5) * w;
                    const y = (Math.cos(i * 33 + Date.now() * 0.001) * 0.5 + 0.5) * h;
                    ctx.fillRect(x, y, 2, 2);
                }
            } else {
                // Imperial Corridor
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(0, 0, w, h);

                // Perspective Corridor Lines
                ctx.strokeStyle = '#334155';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, 0); ctx.lineTo(w * 0.3, h * 0.3);
                ctx.moveTo(w, 0); ctx.lineTo(w * 0.7, h * 0.3);
                ctx.moveTo(0, h); ctx.lineTo(w * 0.3, h * 0.8);
                ctx.moveTo(w, h); ctx.lineTo(w * 0.7, h * 0.8);
                ctx.stroke();

                // Sliding Hydraulic Doors
                const doorWidth = w * 0.22;
                const doorLeftX = w * 0.3 - (doorOpenProgress * doorWidth);
                const doorRightX = w * 0.48 + (doorOpenProgress * doorWidth);

                // Left Door Leaf
                ctx.fillStyle = '#e2e8f0';
                ctx.strokeStyle = '#020617';
                ctx.lineWidth = 3;
                ctx.fillRect(doorLeftX, h * 0.3, doorWidth, h * 0.5);
                ctx.strokeRect(doorLeftX, h * 0.3, doorWidth, h * 0.5);

                // Right Door Leaf
                ctx.fillRect(doorRightX, h * 0.3, doorWidth, h * 0.5);
                ctx.strokeRect(doorRightX, h * 0.3, doorWidth, h * 0.5);

                // Lock Light Indicator
                ctx.fillStyle = (doorOpenProgress > 0.8) ? '#22c55e' : '#ef4444';
                ctx.beginPath();
                ctx.arc(w * 0.5, h * 0.28, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            // Draw R2-D2 (Left Side)
            drawR2D2(w * 0.2, h * 0.75, 0.7);

            // Draw C-3PO (Right Side)
            drawC3PO(w * 0.8, h * 0.75, 0.7);

            if (isDoorOpening) {
                doorOpenProgress += 0.03;
                if (doorOpenProgress >= 1) {
                    doorOpenProgress = 1;
                    isDoorOpening = false;
                }
            }

            requestAnimationFrame(drawShipScene);
        }

        // Draw R2-D2
        function drawR2D2(x, y, scale) {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale, scale);

            // Legs
            ctx.fillStyle = '#cbd5e1';
            ctx.strokeStyle = '#0f172a';
            ctx.lineWidth = 2;
            ctx.fillRect(-35, -20, 12, 45);
            ctx.fillRect(23, -20, 12, 45);

            // Body
            ctx.fillRect(-25, -45, 50, 60);
            ctx.strokeRect(-25, -45, 50, 60);

            // Blue Panels
            ctx.fillStyle = '#0284c7';
            ctx.fillRect(-18, -35, 12, 10);
            ctx.fillRect(6, -35, 12, 10);
            ctx.fillRect(-18, -15, 36, 12);

            // Dome
            ctx.beginPath();
            ctx.arc(0, -45, 25, Math.PI, 0);
            ctx.fillStyle = '#e2e8f0';
            ctx.fill();
            ctx.stroke();

            // Eye Radar
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(0, -55, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(-2, -56, 2, 0, Math.PI * 2);
            ctx.fill();

            // Hack Arm (if door is opening)
            if (isDoorOpening) {
                ctx.strokeStyle = '#0284c7';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(15, -10);
                ctx.lineTo(45, -25);
                ctx.stroke();
                // Sparks
                playR2D2Sound();
            }

            ctx.restore();
        }

        // Draw C-3PO
        function drawC3PO(x, y, scale) {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale, scale);

            // Body
            ctx.fillStyle = '#eab308';
            ctx.strokeStyle = '#713f12';
            ctx.lineWidth = 2;

            // Legs (Silver Right Leg)
            ctx.fillRect(-20, -10, 12, 50); // Left Gold Leg
            ctx.fillStyle = '#94a3b8'; // Silver Right Leg
            ctx.fillRect(8, -10, 12, 50);

            // Torso & Belly Wires
            ctx.fillStyle = '#eab308';
            ctx.fillRect(-22, -60, 44, 50);
            ctx.strokeRect(-22, -60, 44, 50);

            // Wires Midsection
            ctx.fillStyle = '#020617';
            ctx.fillRect(-16, -35, 32, 12);
            ctx.fillStyle = '#ef4444'; ctx.fillRect(-12, -32, 4, 6);
            ctx.fillStyle = '#3b82f6'; ctx.fillRect(-4, -32, 4, 6);
            ctx.fillStyle = '#eab308'; ctx.fillRect(4, -32, 4, 6);

            // Head
            ctx.beginPath();
            ctx.arc(0, -72, 16, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Eyes
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(-6, -74, 4, 0, Math.PI * 2);
            ctx.arc(6, -74, 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // Draw C3PO Avatar Pixel Canvas
        const avatarCanvas = document.getElementById('c3poAvatarCanvas');
        const actx = avatarCanvas.getContext('2d');
        function drawC3POAvatar() {
            actx.fillStyle = '#000000';
            actx.fillRect(0, 0, 80, 80);
            
            // Gold Head
            actx.fillStyle = '#eab308';
            actx.fillRect(20, 15, 40, 45);
            
            // Eyes
            actx.fillStyle = '#fef08a';
            actx.fillRect(28, 28, 8, 8);
            actx.fillRect(44, 28, 8, 8);

            // Mouth
            actx.fillStyle = '#713f12';
            actx.fillRect(32, 48, 16, 4);
        }
        drawC3POAvatar();

        // Dialogue Typewriter Engine
        let typeIndex = 0;
        let dialogueTimer = null;

        function setDialogue(text) {
            const elem = document.getElementById('dialogueText');
            const indicator = document.getElementById('typingIndicator');
            elem.textContent = "";
            typeIndex = 0;
            clearInterval(dialogueTimer);
            indicator.classList.remove('hidden');

            dialogueTimer = setInterval(() => {
                if (typeIndex < text.length) {
                    elem.textContent += text.charAt(typeIndex);
                    if (Math.random() < 0.4) playC3POSound();
                    typeIndex++;
                } else {
                    clearInterval(dialogueTimer);
                    indicator.classList.add('hidden');
                }
            }, 35);
        }

        function selectType(type) {
            selectedType = type;
            document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('selected'));
            document.getElementById(`type-${type}`).classList.add('selected');
        }

        function loadDoorQuestion() {
            doorOpenProgress = 0;
            selectedType = null;
            document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('selected'));
            document.getElementById('codeInput').value = "";
            document.getElementById('doorStatusText').textContent = "VERGRENDELD";
            document.getElementById('doorStatusText').className = "text-red-400";

            currentQuestion = generateRandomQuestion(currentDoor - 1);
            
            document.getElementById('doorCounter').textContent = `${currentDoor} / ${totalDoors}`;
            document.getElementById('problemText').textContent = currentQuestion.text;

            // Dialogue hint per door
            if (currentDoor === 1) {
                setDialogue("Aanbiddelijke goedheid, R2! We zijn opgesloten! Bepaal welk type formule het slot vereist, reken de opties uit en hack de deur!");
            } else if (currentDoor === 10) {
                setDialogue("We zijn in de Cockpit! Dit is de laatste, zwaarste beveiligingscode om de hyperdrive te ontgrendelen!");
            } else {
                const c3poComments = [
                    "Pas op R2, de beveiligingsprotocollen worden steeds ingewikkelder!",
                    "Onthoud goed: Telt de volgorde wel of niet? En mag een cijfer herhaald worden?",
                    "Snel R2, de time-out van de hoofdcomputer nadert!",
                    "Ik hoop echt dat je rekenmatrix goed ingesteld staat..."
                ];
                setDialogue(c3poComments[Math.floor(Math.random() * c3poComments.length)]);
            }
        }

        function submitCode() {
            const userCode = parseInt(document.getElementById('codeInput').value);

            if (!selectedType) {
                setDialogue("R2! Je bent vergeten te selecteren welk type formule het is! (Permutatie, Combinatie of Herhaling)");
                return;
            }

            if (isNaN(userCode)) {
                setDialogue("Voer een geldig berekend getal in het vak in!");
                return;
            }

            // Verify both type and calculated code
            if (selectedType === currentQuestion.type && userCode === currentQuestion.answer) {
                // Correct!
                playDoorSound();
                isDoorOpening = true;
                document.getElementById('doorStatusText').textContent = "TOEGANG VERLEEND";
                document.getElementById('doorStatusText').className = "text-emerald-400 font-bold";

                if (currentDoor < totalDoors) {
                    setDialogue("Uitstekend werk R2! De deur schuift open! Op naar de volgende!");
                    setTimeout(() => {
                        currentDoor++;
                        // Sector Badge Update
                        if (currentDoor >= 4 && currentDoor <= 6) {
                            document.getElementById('sectorBadge').textContent = "Sector 2: Engineering";
                        } else if (currentDoor >= 7) {
                            document.getElementById('sectorBadge').textContent = "Sector 3: Command Deck & Cockpit";
                        }
                        loadDoorQuestion();
                    }, 1800);
                } else {
                    // Game Win
                    clearInterval(timerInterval);
                    setTimeout(() => {
                        document.getElementById('endTitle').textContent = "HYPERSPEED NAAR TATOOINE!";
                        document.getElementById('endDescription').textContent = "Geweldig! Je hebt alle 10 de deuren gehackt, de cockpit ontgrendeld en bent succesvol ontsnapt naar Tatooine!";
                        document.getElementById('endModal').classList.remove('hidden');
                    }, 1500);
                }
            } else {
                // Wrong
                shields--;
                updateShieldsDisplay();
                playR2D2Sound();

                if (shields <= 0) {
                    // Game Over
                    clearInterval(timerInterval);
                    document.getElementById('endTitle').textContent = "GEVANGEN GENOMEN!";
                    document.getElementById('endDescription').textContent = "De schilden zijn uitgeput en de Stormtroopers hebben R2-D2 en C-3PO overmeesterd.";
                    document.getElementById('endModal').classList.remove('hidden');
                } else {
                    setDialogue("Ojee! Dat was niet juist. Bedenk goed of de volgorde telt en reken opnieuw!");
                }
            }
        }

        function updateShieldsDisplay() {
            const container = document.getElementById('shieldsContainer');
            container.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                if (i < shields) {
                    container.innerHTML += "<span>🛡️</span>";
                } else {
                    container.innerHTML += "<span class='opacity-20'>🛡️</span>";
                }
            }
        }

        // Calculator Functions
        function calcInput(char) {
            calcExpression += char;
            document.getElementById('calcDisplay').textContent = calcExpression;
        }

        function calcClear() {
            calcExpression = "";
            document.getElementById('calcDisplay').textContent = "0";
        }

        function calcEvaluate() {
            try {
                // Replace ! with custom factorial replacement
                let expr = calcExpression;

                // Handle simple n! single numbers e.g. 5! -> factorial(5)
                expr = expr.replace(/(\d+)!/g, "factorial($1)");
                // Handle n^k -> Math.pow(n,k)
                expr = expr.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

                const res = eval(expr);
                document.getElementById('calcDisplay').textContent = res;
                calcExpression = res.toString();
            } catch (e) {
                document.getElementById('calcDisplay').textContent = "FOUT";
                calcExpression = "";
            }
        }

        function useCalcResult() {
            const val = document.getElementById('calcDisplay').textContent;
            if (val !== "0" && val !== "FOUT") {
                document.getElementById('codeInput').value = val;
            }
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                timerSeconds--;
                const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
                const secs = (timerSeconds % 60).toString().padStart(2, '0');
                document.getElementById('timerDisplay').textContent = `${mins}:${secs}`;

                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    document.getElementById('endTitle').textContent = "TIJD IS OM!";
                    document.getElementById('endDescription').textContent = "De 7 minuten zijn verstreken! Het ruimteschip is op verhoogd alarm gegaan.";
                    document.getElementById('endModal').classList.remove('hidden');
                }
            }, 1000);
        }

        function toggleFormulaSheet() {
            document.getElementById('formulaModal').classList.toggle('hidden');
        }

        function resetGame() {
            currentDoor = 1;
            shields = 3;
            timerSeconds = 420;
            updateShieldsDisplay();
            document.getElementById('endModal').classList.add('hidden');
            document.getElementById('sectorBadge').textContent = "Sector 1: Vrachtruim";
            clearInterval(timerInterval);
            startTimer();
            loadDoorQuestion();
        }

        // Initialize Loop
        window.onload = function() {
            drawShipScene();
            startTimer();
            loadDoorQuestion();
        };
app.js
app.js weergeven.