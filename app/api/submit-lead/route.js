import { appendToSheet } from '@/lib/googleSheets';

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone) {
      return Response.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    await appendToSheet('leads data', [timestamp, name, phone, email || '', message || '']);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Submit lead error:', error);
    return Response.json({ success: false }, { status: 500 });
  }
}
