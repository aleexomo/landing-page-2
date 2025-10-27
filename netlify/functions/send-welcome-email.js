
// Import the Resend library
const { Resend } = require('resend');

// This is the main handler function that Netlify will run
exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Initialize Resend with the API key from your Netlify environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Parse the data sent from the frontend form
    const { parentName, childName, email, childAge } = JSON.parse(event.body);

    // Basic validation
    if (!parentName || !email || !childName) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Please provide all required fields.' }),
      };
    }
    
    // Send the email using Resend
    await resend.emails.send({
      from: 'Jolly English Academy <onboarding@resend.dev>', // IMPORTANT: Use a domain you have verified with Resend
      to: [email],
      subject: 'Bem-vindo(a) à Jolly English Academy! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Olá ${parentName},</h2>
          <p>Seja bem-vindo(a) à <strong>Jolly English Academy</strong>! Estamos muito felizes por ter você e ${childName} conosco.</p>
          <p>Sua inscrição para o nosso <strong>mês de teste grátis</strong> foi um sucesso!</p>
          <p>Nossa equipe já está preparando tudo. Você receberá um segundo e-mail com seus dados de login e os horários das aulas dentro de <strong>72 horas</strong>.</p>
          <p>Enquanto isso, sinta-se à vontade para se juntar à nossa comunidade de pais no WhatsApp. É um ótimo lugar para tirar dúvidas e se conectar com outras famílias.</p>
          <a href="https://wa.me/5511948853088?text=Eu%20me%20inscrevi%2C%20por%20favor%20me%20adicione%20ao%20grupo%20do%20WhatsApp." style="display: inline-block; background-color: #25D366; color: white; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: bold;">Entrar no Grupo do WhatsApp</a>
          <p>Atenciosamente,<br>Equipe da Jolly English Academy</p>
        </div>
      `,
    });

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
    };

  } catch (error) {
    // Log the error and return an error response
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: 'Failed to send email.' }),
    };
  }
};
    