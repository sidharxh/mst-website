import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Check for missing env vars and return specific errors
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      return NextResponse.json(
        { error: 'Server misconfiguration: GOOGLE_CLIENT_EMAIL is not set.' },
        { status: 500 }
      );
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      return NextResponse.json(
        { error: 'Server misconfiguration: GOOGLE_PRIVATE_KEY is not set.' },
        { status: 500 }
      );
    }
    if (!process.env.SHEET_ID) {
      return NextResponse.json(
        { error: 'Server misconfiguration: SHEET_ID is not set.' },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Contacts!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, phone || '', service || '', message]],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
