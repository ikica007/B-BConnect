export const COMPANY_EMAIL = 'info@bundbconnect.de';

export interface InquiryPayload {
  formSource: string;
  subject: string;
  name?: string;
  company?: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export function buildMailtoUrl(payload: InquiryPayload): string {
  const lines: string[] = [];
  if (payload.name) lines.push(`Name: ${payload.name}`);
  if (payload.company) lines.push(`Firma / Name: ${payload.company}`);
  lines.push(`E-Mail: ${payload.email}`);
  if (payload.phone) lines.push(`Telefon: ${payload.phone}`);
  if (payload.service) lines.push(`Bereich / Leistung: ${payload.service}`);
  lines.push('');
  lines.push(payload.message);

  const subject = encodeURIComponent(payload.subject);
  const body = encodeURIComponent(lines.join('\n'));
  return `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
}

export async function sendInquiryEmail(payload: InquiryPayload): Promise<{ ok: boolean }> {
  const bodyData: Record<string, string> = {
    _subject: payload.subject,
    _replyto: payload.email,
    _template: 'table',
    _captcha: 'false',
    Quelle: payload.formSource,
    Email: payload.email,
    Nachricht: payload.message,
  };

  if (payload.name) bodyData.Name = payload.name;
  if (payload.company) bodyData.Firma = payload.company;
  if (payload.phone) bodyData.Telefon = payload.phone;
  if (payload.service) bodyData.Leistung = payload.service;

  const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_EMAIL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json().catch(() => null);
  if (data && data.success === 'false') {
    throw new Error(data.message || 'Send failed');
  }

  return { ok: true };
}
