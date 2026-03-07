import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req) {
  try {
    const body = await req.json();
    const { page, referrer } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });

    // Get user agent and IP from headers
    const headersList = req.headers;
    const userAgent = headersList.get('user-agent') || '—';
    const ip =
      headersList.get('x-forwarded-for')?.split(',')[0] ||
      headersList.get('x-real-ip') ||
      '—';

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Visits!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, page, referrer, ip, userAgent]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Track visit error:', err);
    // Silently fail — don't break the page if tracking fails
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
