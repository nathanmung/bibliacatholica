// scripts/generateTTS.js – Fix Auth : Env Manuel + Debug pour Windows/Node
// require('dotenv').config({ path: '.env.local' }); // Commenté : Bypasse pour set PS manuel

const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Debug creds AVANT client (pour catch early)
console.log('🔑 Creds path check:', process.env.GOOGLE_APPLICATION_CREDENTIALS ? 'OK (path loaded)' : '❌ UNDEFINED – Set $env:GOOGLE_APPLICATION_CREDENTIALS en PS !');

const client = new textToSpeech.TextToSpeechClient();

async function generateFromText(text, outputFile) {
  try {
    const ssmlText = `<speak>
    ${text.trim().replace(/Dieu/g, '<emphasis level="strong">Dieu</emphasis>')}  <!-- Emphasis sur Dieu -->
    <break time="500ms"/>  <!-- Pause finale verset -->
    </speak>`;
    const request = {
        input: { ssml: ssmlText },  // SSML vs text pur
        voice: { languageCode: 'fr-FR', name: 'fr-FR-Wavenet-D' },  // Plus émotive
        audioConfig: { audioEncoding: 'MP3', speakingRate: 0.85 },  // Encore plus lente contemplative
    };

    const [response] = await client.synthesizeSpeech(request);
    fs.writeFileSync(outputFile, response.audioContent, 'binary');
    console.log(`✅ MP3 sauvé : ${outputFile} – Écoute Chap 5 "descendance d’Adam" en HD !`);
  } catch (error) {
    console.error('❌ Synthèse fail :', error.message); // e.g., "quota" ou "invalid creds"
    if (error.code === 'ENOTFOUND') console.log('🔧 Check internet ou API enabled.');
  }
}

// Prompt flow
console.log('🚀 TTS Interactif : Vérifie .txt dans texts/.');
rl.question('Quel fichier .txt ? (e.g., genese_chap5.txt) : ', async (filename) => {
  const txtPath = path.join('texts', filename);
  if (!fs.existsSync(txtPath)) {
    console.log(`❌ Fichier non trouvé : ${txtPath}. Crée texts/ et droppe !`);
    rl.close();
    return;
  }

  const text = fs.readFileSync(txtPath, 'utf8');
  console.log(`📖 Texte chargé (${text.length} chars) : "${text.substring(0, 100)}..."`);

  rl.question('Vérif OK ? Synthétiser en MP3 ? (y/n) : ', async (confirm) => {
    if (confirm.toLowerCase() === 'y') {
      const basename = path.basename(filename, '.txt');
      const outputFile = path.join('public', 'audio', `${basename}.mp3`);
      await generateFromText(text, outputFile);
    } else {
      console.log('Annulé – Revérifie .txt.');
    }
    rl.close();
  });
});