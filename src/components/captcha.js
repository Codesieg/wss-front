const { RecaptchaEnterpriseServiceClient } = require('@google-cloud/recaptcha-enterprise');

/**
 * Créez une évaluation pour analyser le risque d'une action dans l'interface utilisateur.
 *
 * projectID: L'ID de votre projet Google Cloud.
 * recaptchaSiteKey: La clé reCAPTCHA associée au site ou à l'application.
 * token: Jeton généré auprès du client.
 * recaptchaAction: Nom d'action correspondant au jeton.
 */
async function createAssessment() {
  const projectID = "wondersoft-studio";
  const recaptchaKey = "6Le08qMpAAAAAJ82W7z9WIBf8PR_Z33CKwMYpBIK";
  const token = "AIzaSyDsgxN18cIMRUDd2JQHUIkvj-ySasZ_UmQ"; // Assurez-vous que ce jeton est valide
  const recaptchaAction = "submit_form";

  // Créez le client reCAPTCHA.
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Créez la demande d'évaluation.
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  try {
    const [response] = await client.createAssessment(request);

    // Vérifiez si le jeton est valide.
    if (!response.tokenProperties.valid) {
console.log("la");
      console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`);
      return null;
    }

    // Vérifiez si l'action attendue a été exécutée.
    if (response.tokenProperties.action === recaptchaAction) {
      console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
      response.riskAnalysis.reasons.forEach((reason) => {
        console.log(reason);
      });

      return response.riskAnalysis.score;
    } else {
      console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
      return null;
    }
  } catch (error) {
    console.error("Error during assessment:", error);
  }
}

// Appel de la fonction
createAssessment();
