import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'お問い合わせ <yourname@resend.dev>',
      to: ['phoby20@hotmail.com'],
      subject: 'Integrity Company から新しい開発依頼お問い合わせがありました',
      html: `
        <p>👤 名前: ${name}</p>
        <p>📧 メール: ${email}</p>
        <p>📝 内容: ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}